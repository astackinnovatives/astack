import binjoy from "./studies/binjoy"
import globalSource from "./studies/global-source"
import athma from "./studies/athma"
import fosterAviation from "./studies/foster-aviation"

export { brandProjects } from "./projects"
export type { BrandProject } from "./projects"

export const studies: Record<string, { html: string; css: string }> = {
    binjoy,
    "global-source": globalSource,
    athma,
    "foster-aviation": fosterAviation,
}
