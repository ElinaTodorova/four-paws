import { Button, Checkbox, Form, Input } from "antd";
// import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./SignUpForm.sass";

export default function SignUpForm() {
  return (
    <section className="container_form">
      <Form
        className="form"
        name="basic"
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
        autoComplete="off"
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
          ]}
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
          ]}
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
          ]}
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
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
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
