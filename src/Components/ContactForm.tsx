import React from "react";
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

interface FormsProps {
  width?: string;
  inputWidth?: string;
  inputWidth1?: string;
}

const ContactForms: React.FC<FormsProps> = ({
  width,
  inputWidth,
  inputWidth1,
}) => (
  <Form
    name="nest-messages"
    onFinish={onFinish}
    className={`p-5 flex flex-col justify-center place-items-center rounded-2xl gap-[10px] ${width}`}
    validateMessages={validateMessages}
  >
    <h1 className="text-[30px] font-bold text-[#3a3b3b]">Get In Touch</h1>
    <Form.Item
      name={"Full Name"}
      rules={[{ required: true }]}
      className={`${inputWidth}`}
    >
      <Input placeholder="Full Name" className={`${inputWidth1} py-2`} />
    </Form.Item>
    <Form.Item
      name={["user email"]}
      rules={[{ type: "email" }]}
      className={`${inputWidth}`}
    >
      <Input placeholder="Email" className={`${inputWidth1} py-2`} />
    </Form.Item>
    <Form.Item
      name={["Phone Number"]}
      rules={[{ required: true, message: "Please input your phone number!" }]}
      className={`${inputWidth}`}
    >
      <Input placeholder="Phone Number" className={`${inputWidth1} py-2`} />
    </Form.Item>
    <Form.Item
      name={["Address"]}
      rules={[{ required: true, message: "Please input your Address!" }]}
      className={`${inputWidth}`}
    >
      <Input placeholder="Address" className={`${inputWidth1} py-2`} />
    </Form.Item>
    <Form.Item
      name="bio"
      rules={[{ required: true }]}
      className={`${inputWidth}`}
    >
      <Input.TextArea
        rows={12}
        placeholder="Give a little details on what we should expect!"
        className={`${inputWidth1} py-2`}
      />
    </Form.Item>

    <Form.Item className={`${inputWidth}`}>
      <Button
        type="primary"
        className="flex place-items-center justify-between px-4 py-2 text-[15px] bg-[#005883] font-semibold text-white hover:scale-105 hover:text-white hover:bg-none rounded-sm"
        htmlType="submit"
      >
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default ContactForms;
