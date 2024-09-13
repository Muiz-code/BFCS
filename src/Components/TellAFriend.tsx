import React, { useState } from "react";
import { Button, Form, Input } from "antd";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const onFinish = (values: any) => {
  console.log(values);
};

interface FormField {
  label: string;
  name: string;
  rules?: any;
  placeholder?: string;
  type?: string;
  rows?: number;
}

interface FormsProps {
  width?: string;
  inputWidth?: string;
  inputWidth1?: string;
  heading?: string;
  formFields?: FormField[];
}
interface FormValues {
  [key: string]: string | number;
}

const TellaFriend: React.FC<FormsProps> = ({
  width,
  inputWidth,
  inputWidth1,
  heading,
  formFields = [],
}) => {
  const [formValues, setFormValues] = useState<FormValues>({});

  const handleInputChange = (name: string, value: any) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    onFinish(formValues);
  };

  return (
    <Form
      name="nest-messages"
      className={`p-5 flex flex-col justify-center place-items-center rounded-2xl gap-[10px] ${width}`}
      validateMessages={validateMessages}
    >
      <h1 className="font-bold text-[#3a3b3b]">{heading}</h1>
      {formFields.map((field: FormField) => (
        <Form.Item
          key={field.name}
          name={field.name}
          rules={field.rules}
          className={`${inputWidth}`}
        >
          {field.type === "textarea" ? (
            <Input.TextArea
              rows={field.rows || 4}
              placeholder={field.placeholder}
              className={`${inputWidth1} py-2`}
              value={formValues[field.name]}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            />
          ) : (
            <Input
              placeholder={field.placeholder}
              className={`${inputWidth1} py-2`}
              value={formValues[field.name]}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            />
          )}
        </Form.Item>
      ))}

      <Form.Item className={`${inputWidth}`}>
        <Button
          type="primary"
          className="flex place-items-center justify-between px-4 py-2 text-[15px] bg-[#005883] font-semibold text-white hover:scale-105 hover:text-white hover:bg-none rounded-sm"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TellaFriend;
