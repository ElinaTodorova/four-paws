import { Button, Form, Input } from "antd";
// import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./SignUpForm.sass";

export default function SignUpForm() {
  return (
    <section className="container_form">
      <Form
        className="form"
        name="basic"
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
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <h2 className="title">Sign Up</h2>
        <Form.Item
          label="Username"
          name="username"
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
          // prefix={<UserOutlined className="site-form-item-icon" />}
          // placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
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
          name="password"
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
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
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
