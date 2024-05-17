import { useState } from "react";
import { Button, Form, Input } from "antd";

import register from "../../services/userServices";

import "./SignUpForm.sass";

const RegisterFormKeys = {
  Username: "username",
  Email: "email",
  Password: "password",
};
export default function SignUpForm() {
  const [userData, setUserData] = useState({
    [RegisterFormKeys.Username]: "",
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
  });

  const onValuesChange = (changedValues, allValues) => {
    setUserData(allValues);
  };

  const onSubmit = () => {
    register(userData);
  };

  return (
    <section className="container_form">
      <Form
        className="form"
        name="basic"
        onFinish={onSubmit}
        onValuesChange={onValuesChange}
        autoComplete="off"
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 20,
        }}
        initialValues={{
          remember: true,
        }}
      >
        <h2 className="title">Sign Up</h2>
        <Form.Item
          label="Username"
          name={[RegisterFormKeys.Username]}
          value={userData[RegisterFormKeys.Username]}
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
            { whitespace: true },
            {
              min: 3,
              message: "Your username must contain at least 3 characters",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name={[RegisterFormKeys.Email]}
          value={userData[RegisterFormKeys.Email]}
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            { type: "email", message: "Please input a valid email" },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name={[RegisterFormKeys.Password]}
          value={userData[RegisterFormKeys.Password]}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              min: 3,
              message: "Your password must contain at least 3 characters",
            },
            {
              pattern: /[A-Z]/,
              message: "Must contain at least one majuscule!",
            },
            {
              pattern: /\d/,
              message: "Must contain at least one number!",
            },
            {
              pattern: /[!@#$%^&*(),.?":{}|<>]/,
              message: "Must contain at least special character!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm your password"
          name="confirmPass"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                // eslint-disable-next-line prefer-promise-reject-errors
                return Promise.reject("Two password does not match!");
              },
            }),
            // {
            //   validator: (_, value, getFieldsValue) => {
            //     if (value && value === getFieldsValue("password")) {
            //       Promise.resolve();
            //     } else {
            //       // eslint-disable-next-line prefer-promise-reject-errors
            //       Promise.reject("Two password does not match!");
            //     }
            //   },
            // },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 1,
            span: 30,
          }}
        >
          <Button
            type="primary"
            style={{ marginTop: "2.5rem" }}
            size="large"
            className="button-start"
            block
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}
