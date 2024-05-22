import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Button } from "antd";

import "./Login.scss";

export default function Login({ props }) {
  return (
    <div className="login-side">
      <h2>{props.title}</h2>
      <p>{props.p}</p>
      <Link to={props.link}>
        <Button className="btn-signIn">{props.btnTitle}</Button>
      </Link>
    </div>
  );
}

Login.propTypes = {
  props: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  btnTitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
