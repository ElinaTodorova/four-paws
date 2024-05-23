import { useState } from "react";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";

import Header from "../header/Header";
import { register } from "../../services/authServices";

import "./SignUpForm.scss";

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
      <Header />
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
        <h2 className="title">Create account</h2>
        <Form.Item
          // label="Username"
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
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          // label="Email"
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
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
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
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item
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
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Confirm password"
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 0,
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
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}
