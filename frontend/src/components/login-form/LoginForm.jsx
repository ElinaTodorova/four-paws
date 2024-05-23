import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Form, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

import "../signUpForm/SignUpForm.scss";
import useLogin from "../../hook/useLogin";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

export default function LoginForm() {
  const [userData, setUserData] = useState({
    [LoginFormKeys.Email]: "",
    [LoginFormKeys.Password]: "",
  });

  const loginFunc = useLogin();

  const navigate = useNavigate();

  const onValuesChange = (changedValues, allValues) => {
    setUserData(allValues);
  };

  const onSubmit = async () => {
    await loginFunc(userData);

    navigate("/");
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
        <h2 className="title">Log In</h2>

        <Form.Item
          name={[LoginFormKeys.Email]}
          value={userData[LoginFormKeys.Email]}
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          name={[LoginFormKeys.Password]}
          value={userData[LoginFormKeys.Password]}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
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
            Log In
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}
