"use client";

import { Box } from "@mantine/core";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface TouchPoint {
    x: number;
    y: number;
    age: number;
    force: number;
    vx: number;
    vy: number;
}

class TouchTexture {
    size: number;
    width: number;
    height: number;
    maxAge: number;
    radius: number;
    speed: number;
    trail: TouchPoint[];
    last: { x: number; y: number } | null;
    canvas!: HTMLCanvasElement;
    ctx!: CanvasRenderingContext2D;
    texture!: THREE.Texture;

    constructor() {
        this.size = 64;
        this.width = this.height = this.size;
        this.maxAge = 64;
        this.radius = 0.25 * this.size;
        this.speed = 1 / this.maxAge;
        this.trail = [];
        this.last = null;
        this.initTexture();
    }

    initTexture() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        const ctx = this.canvas.getContext("2d");
        if (!ctx) throw new Error("2D context unavailable for TouchTexture");
        this.ctx = ctx;
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.texture = new THREE.Texture(this.canvas);
    }

    update() {
        if (this.trail.length === 0) return; // skip idle frames entirely
        this.clear();
        const speed = this.speed;
        for (let i = this.trail.length - 1; i >= 0; i--) {
            const point = this.trail[i];
            if (!point) continue;

            const f = point.force * speed * (1 - point.age / this.maxAge);
            point.x += point.vx * f;
            point.y += point.vy * f;
            point.age++;

            if (point.age > this.maxAge) {
                this.trail.splice(i, 1);
            } else {
                this.drawPoint(point);
            }
        }
        this.texture.needsUpdate = true;
    }

    clear() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    addTouch(point: { x: number; y: number }) {
        let force = 0;
        let vx = 0;
        let vy = 0;
        const last = this.last;
        if (last) {
            const dx = point.x - last.x;
            const dy = point.y - last.y;
            if (dx === 0 && dy === 0) return;
            const dd = dx * dx + dy * dy;
            const d = Math.sqrt(dd);
            vx = dx / d;
            vy = dy / d;
            force = Math.min(dd * 20000, 2.0);
        }
        this.last = { x: point.x, y: point.y };
        this.trail.push({ x: point.x, y: point.y, age: 0, force, vx, vy });
    }

    drawPoint(point: TouchPoint) {
        const posX = point.x * this.width;
        const posY = (1 - point.y) * this.height;

        let intensity: number;
        if (point.age < this.maxAge * 0.3) {
            intensity = Math.sin((point.age / (this.maxAge * 0.3)) * (Math.PI / 2));
        } else {
            const t = 1 - (point.age - this.maxAge * 0.3) / (this.maxAge * 0.7);
            intensity = -t * (t - 2);
        }
        intensity *= point.force;

        const radius = this.radius;
        const color = `${((point.vx + 1) / 2) * 255}, ${((point.vy + 1) / 2) * 255}, ${intensity * 255}`;
        const offset = this.size * 5;
        this.ctx.shadowOffsetX = offset;
        this.ctx.shadowOffsetY = offset;
        this.ctx.shadowBlur = radius;
        this.ctx.shadowColor = `rgba(${color},${0.2 * intensity})`;

        this.ctx.beginPath();
        this.ctx.fillStyle = "rgba(255,0,0,1)";
        this.ctx.arc(posX - offset, posY - offset, radius, 0, Math.PI * 2);
        this.ctx.fill();
    }

    dispose() {
        this.trail.length = 0;
        this.texture.dispose();
    }
}

const parseColor = (hex: string) => {
    const c = new THREE.Color(hex);
    return new THREE.Vector3(c.r, c.g, c.b);
};

const vertexShader = `
  varying vec2 vUv;
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  uniform float uSpeed;
  uniform sampler2D uTouchTexture;
  uniform float uGrainIntensity;
  uniform vec3 uWhiteBase;
  uniform float uGradientSize;
  varying vec2 vUv;

  float grain(vec2 uv, float time) {
    vec2 grainUv = uv * uResolution * 0.5;
    float grainValue = fract(sin(dot(grainUv + time, vec2(12.9898, 78.233))) * 43758.5453);
    return grainValue * 2.0 - 1.0;
  }

  vec3 getGradientColor(vec2 uv, float time) {
    float gradientRadius = uGradientSize;
    float t = time * uSpeed;

    vec2 center1 = vec2(0.5 + sin(t * 0.4) * 0.4, 0.5 + cos(t * 0.5) * 0.4);
    vec2 center2 = vec2(0.5 + cos(t * 0.6) * 0.5, 0.5 + sin(t * 0.45) * 0.5);
    vec2 center3 = vec2(0.5 + sin(t * 0.35) * 0.45, 0.5 + cos(t * 0.55) * 0.45);
    vec2 center4 = vec2(0.5 + cos(t * 0.5) * 0.4, 0.5 + sin(t * 0.4) * 0.4);

    float influence1 = 1.0 - smoothstep(0.0, gradientRadius, length(uv - center1));
    float influence2 = 1.0 - smoothstep(0.0, gradientRadius, length(uv - center2));
    float influence3 = 1.0 - smoothstep(0.0, gradientRadius, length(uv - center3));
    float influence4 = 1.0 - smoothstep(0.0, gradientRadius, length(uv - center4));

    vec3 color = uWhiteBase;

    float factor1 = clamp(influence1 * (0.55 + 0.45 * sin(t)) * 0.5, 0.0, 1.0);
    float factor2 = clamp(influence2 * (0.55 + 0.45 * cos(t * 1.2)) * 0.8, 0.0, 1.0);
    float factor3 = clamp(influence3 * (0.55 + 0.45 * sin(t * 0.8)) * 0.5, 0.0, 1.0);
    float factor4 = clamp(influence4 * (0.55 + 0.45 * cos(t * 1.3)) * 0.8, 0.0, 1.0);

    color = mix(color, uColor1, factor1);
    color = mix(color, uColor2, factor2);
    color = mix(color, uColor3, factor3);
    color = mix(color, uColor1, factor4);

    return clamp(color, vec3(0.0), vec3(1.0));
  }

  void main() {
    vec2 uv = vUv;
    vec4 touchTex = texture2D(uTouchTexture, uv);
    float vx = -(touchTex.r * 2.0 - 1.0);
    float vy = -(touchTex.g * 2.0 - 1.0);
    float intensity = touchTex.b;

    uv += vec2(vx, vy) * 0.8 * intensity;

    vec2 center = vec2(0.5);
    float dist = length(uv - center);
    float ripple = sin(dist * 20.0 - uTime * 3.0) * 0.04 * intensity;
    float wave = sin(dist * 15.0 - uTime * 2.0) * 0.03 * intensity;
    uv += vec2(ripple + wave);

    vec3 color = getGradientColor(uv, uTime);
    color += grain(uv, uTime) * uGrainIntensity;

    gl_FragColor = vec4(clamp(color, vec3(0.0), vec3(1.0)), 1.0);
  }
`;

export default function Blob(): React.JSX.Element {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        if (!window.WebGLRenderingContext) {
            console.warn("WebGL not supported; Blob background skipped.");
            return;
        }

        let renderer: THREE.WebGLRenderer;
        let camera: THREE.PerspectiveCamera;
        let scene: THREE.Scene;
        let touchTexture: TouchTexture;
        let mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
        let material: THREE.ShaderMaterial;
        let animationFrameId: number | null = null;
        let isVisible = true;
        let isTabVisible = document.visibilityState === "visible";
        let resizeRaf: number | null = null;
        const clock = new THREE.Clock();

        const pixelRatio = Math.min(window.devicePixelRatio, 2);

        renderer = new THREE.WebGLRenderer({
            antialias: pixelRatio <= 1, // supersampling from higher DPR already smooths edges
            powerPreference: "high-performance",
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(pixelRatio);
        container.appendChild(renderer.domElement);

        camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 10000);
        camera.position.z = 50;

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);

        touchTexture = new TouchTexture();

        const getViewSize = () => {
            const fovInRadians = (camera.fov * Math.PI) / 180;
            const height = Math.abs(camera.position.z * Math.tan(fovInRadians / 2) * 2);
            return { width: height * camera.aspect, height };
        };

        // Fixed unit plane; we scale it instead of rebuilding geometry on resize.
        const geometry = new THREE.PlaneGeometry(1, 1, 1, 1);

        material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
                uColor1: { value: parseColor("#3e9adb") }, // Blue
                uColor2: { value: parseColor("#a621c4") }, // Purple
                uColor3: { value: parseColor("#ff005a") }, // Pink
                uSpeed: { value: 1.5 },
                uGrainIntensity: { value: 0.08 },
                uTouchTexture: { value: touchTexture.texture },
                uWhiteBase: { value: new THREE.Vector3(1.0, 1.0, 1.0) },
                uGradientSize: { value: 0.45 },
            },
        });

        mesh = new THREE.Mesh(geometry, material);
        const initialView = getViewSize();
        mesh.scale.set(initialView.width, initialView.height, 1);
        scene.add(mesh);

        const addTouchFromClient = (clientX: number, clientY: number) => {
            const rect = container.getBoundingClientRect();
            touchTexture.addTouch({
                x: (clientX - rect.left) / rect.width,
                y: 1 - (clientY - rect.top) / rect.height,
            });
        };

        const handlePointerMove = (ev: PointerEvent) => {
            addTouchFromClient(ev.clientX, ev.clientY);
        };

        container.addEventListener("pointermove", handlePointerMove, { passive: true });

        const applyResize = () => {
            if (!container) return;
            const width = container.clientWidth;
            const height = container.clientHeight;
            if (width === 0 || height === 0) return;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);

            const updatedViewSize = getViewSize();
            mesh.scale.set(updatedViewSize.width, updatedViewSize.height, 1);
            material.uniforms.uResolution.value.set(width, height);
        };

        const onResize = () => {
            if (resizeRaf !== null) cancelAnimationFrame(resizeRaf);
            resizeRaf = requestAnimationFrame(applyResize);
        };

        const resizeObserver = new ResizeObserver(onResize);
        resizeObserver.observe(container);

        const intersectionObserver = new IntersectionObserver(
            (entries) => {
                isVisible = entries[0]?.isIntersecting ?? true;
                if (isVisible && isTabVisible) startLoop();
            },
            { threshold: 0 }
        );
        intersectionObserver.observe(container);

        const handleVisibilityChange = () => {
            isTabVisible = document.visibilityState === "visible";
            if (isTabVisible && isVisible) {
                startLoop();
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);

        const handleContextLost = (ev: Event) => {
            ev.preventDefault();
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        };
        const handleContextRestored = () => {
            if (isVisible && isTabVisible) startLoop();
        };
        renderer.domElement.addEventListener("webglcontextlost", handleContextLost, false);
        renderer.domElement.addEventListener("webglcontextrestored", handleContextRestored, false);

        const tick = (): void => {
            animationFrameId = requestAnimationFrame(tick);
            const delta = clock.getDelta();
            touchTexture.update();
            material.uniforms.uTime.value += Math.min(delta, 0.1);
            renderer.render(scene, camera);
        };

        const startLoop = () => {
            if (animationFrameId === null) {
                clock.getDelta(); // discard elapsed pause time
                tick();
            }
        };

        startLoop();

        return () => {
            if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
            if (resizeRaf !== null) cancelAnimationFrame(resizeRaf);

            container.removeEventListener("pointermove", handlePointerMove);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            renderer.domElement.removeEventListener("webglcontextlost", handleContextLost);
            renderer.domElement.removeEventListener("webglcontextrestored", handleContextRestored);
            resizeObserver.disconnect();
            intersectionObserver.disconnect();

            mesh.geometry.dispose();
            material.dispose();
            touchTexture.dispose();
            renderer.dispose();
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <Box
            pos="relative"
            h="12.5rem"
            style={{ overflow: `hidden` }}
        >
            <Box ref={containerRef}
                pos="absolute"
                inset={0}
            />
        </Box>
    );
}