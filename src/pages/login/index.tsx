import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormElement } from "../../components/styles/index";
import { InputSubmit, InputText } from "../../components/Input/index";

interface loginProps {
  username: string;
  password: string;
}
const Login = () => {
  const [user, setUser] = useState<loginProps>({ username: "", password: "" });
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (user.username && user.password) {
      localStorage.setItem("user", user.username);
      history.push("/home");
    } else {
      alert("Please provide username and password");
    }
  };

  return (
    <>
      <FormElement onSubmit={handleLogin}>
        <InputText
          type="text"
          id="username"
          labelName="User Name"
          name="username"
          placeholder="username"
          value={user.username}
          onChange={handleChange}
        />
        <InputText
          type="password"
          id="password"
          labelName="Password"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={handleChange}
        />
        <InputSubmit name="Login" value="Login" />
      </FormElement>
    </>
  );
};

export default Login;