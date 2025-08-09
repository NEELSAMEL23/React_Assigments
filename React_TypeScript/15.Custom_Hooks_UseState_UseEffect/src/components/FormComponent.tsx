import React from "react";
import useForm from "../hooks/useForm";

interface FormValues {
  name: string;
  email: string;
}

const FormComponent: React.FC = () => {
  const { values, handleChange, resetForm } = useForm<FormValues>({
    name: "",
    email: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Submitted:", values);
    resetForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded-lg w-80"
    >
      <label className="block mb-2">
        Name:
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </label>
      <label className="block mb-2">
        Email:
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
