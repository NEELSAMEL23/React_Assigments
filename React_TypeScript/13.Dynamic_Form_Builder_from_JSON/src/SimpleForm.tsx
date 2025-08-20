import { useState, type ChangeEvent, type FormEvent } from 'react';


interface FormData {
  name: string;
  age: string;   // keep as string to handle input value correctly
  gender: string;
}

interface FormErrors {
  name?: string;
  age?: string;
  gender?: string;
}

export default function SimpleForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',  
    gender: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const newErrors: FormErrors = {};

    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.gender) newErrors.gender = 'Gender is required.';

    if (formData.age) {
      const ageValue = Number(formData.age);
      if (ageValue < 1) newErrors.age = 'Minimum age is 1.';
      else if (ageValue > 100) newErrors.age = 'Maximum age is 100.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form Submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label><br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
      </div>

      <div>
        <label>Age:</label><br />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <div style={{ color: 'red' }}>{errors.age}</div>}
      </div>

      <div>
        <label>Gender:</label><br />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {errors.gender && <div style={{ color: 'red' }}>{errors.gender}</div>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
