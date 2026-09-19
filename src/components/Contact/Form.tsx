"use client";

import { useState } from "react";
import { hasLength, isEmail, isNotEmpty, matches, useForm } from "@mantine/form";
import { TextInput, Textarea, Alert, Button } from "@mantine/core";
import { IconInfoCircle, IconLocationShare } from "@tabler/icons-react";

type FormValues = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

export default function Form() {
    const [success, setSuccess] = useState("");

    const form = useForm<FormValues>({
        mode: "controlled",

        validateInputOnChange: true,
        validateInputOnBlur: true,

        initialValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },

        validate: {
            name: isNotEmpty("Name is required"),
            email: isEmail("Enter a valid email"),
            phone: matches(/^$|^\d+$/, "Enter a valid phone number"),
            message: hasLength({ min: 5 }, "Message must be at least 5 characters")
        },
    });

    const sendMessage = async (values: FormValues): Promise<void> => {
        try {
            const response = await fetch("https://api.astack.co/mail/?id=info@astack.co", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            const data = await response.text();

            setSuccess(data);
            form.reset();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={form.onSubmit(sendMessage)}>
            <div className="row g-3">
                <div className="col-md-12">
                    <TextInput
                        placeholder="Enter Your Name"
                        {...form.getInputProps("name")}
                    />
                </div>

                <div className="col-md-12">
                    <TextInput
                        placeholder="Enter Your Email Address"
                        {...form.getInputProps("email")}
                    />
                </div>

                <div className="col-md-12">
                    <TextInput
                        placeholder="Enter Your Phone Number"
                        {...form.getInputProps("phone")}
                    />
                </div>

                <div className="col-md-12">
                    <Textarea
                        placeholder="Enter Your Message"
                        autosize
                        minRows={5}
                        {...form.getInputProps("message")}
                    />
                </div>

                <div className="col-md-12">
                    <Button
                        type="submit"
                        color="black"
                        fullWidth
                        rightSection={<IconLocationShare stroke={1.5} size="1.25rem" />}
                    >
                        Submit
                    </Button>
                </div>
                {success && (
                    <div className="col-md-12">
                        <Alert
                            variant="filled"
                            color="color"
                            title="Success"
                            icon={<IconInfoCircle stroke={1.5} />}
                        >
                            {success}
                        </Alert>
                    </div>
                )}
            </div>
        </form>
    );
}