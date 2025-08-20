import { useState, type ChangeEvent, type FormEvent } from 'react';


type Field = {
    label: string;
    type: "text" | "number";
    required: boolean;
    min?: number;
    max?: number;
} | {
    label: string;
    type: "dropdown";
    required: boolean;
    options: string[];
};

const formJson: { fields: Field[] } = {
    fields: [
        { label: "Name", type: "text", required: true },
        { label: "Age", type: "number", required: false, min: 1, max: 100 },
        {
            label: "Gender",
            type: "dropdown",
            required: true,
            options: ["Male", "Female", "Other"],
        },
    ],
};

type FormData = {
    [key: string]: string;
};

type FormErrors = {
    [key: string]: string;
};

export default function DynamicForm() {
    const [formData, setFormData] = useState<FormData>({});
    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (label: string, value: string) => {
        setFormData((prev) => ({ ...prev, [label]: value }));
    };

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        for (const field of formJson.fields) {
            const value = formData[field.label];

            if (field.required && !value) {
                newErrors[field.label] = "This field is required.";
            } else if (field.type === "number" && value) {
                const num = Number(value);
                if (field.min !== undefined && num < field.min) {
                    newErrors[field.label] = `Minimum is ${field.min}`;
                } else if (field.max !== undefined && num > field.max) {
                    newErrors[field.label] = `Maximum is ${field.max}`;
                }
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form Submitted:", formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {formJson.fields.map((field, index) => (
                <div key={index}>
                    <label>{field.label}</label>
                    <br />
                    {(field.type === "text" || field.type === "number") && (
                        <input
                            type={field.type}
                            value={formData[field.label] || ""}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                handleChange(field.label, e.target.value)
                            }
                        />
                    )}
                    {field.type === "dropdown" && (
                        <select
                            value={formData[field.label] || ""}
                            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                                handleChange(field.label, e.target.value)
                            }
                        >
                            <option value="">Select</option>
                            {field.options.map((opt, i) => (
                                <option key={i} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    )}
                    {errors[field.label] && (
                        <div style={{ color: "red" }}>{errors[field.label]}</div>
                    )}
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
}
