import logo from "./assets/logo.svg";
import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { IUser } from "./App";

const Button = styled(LoadingButton)`
  background-color: purple;
  text-transform: capitalize;
  width: 100%;
  margin: 10px 0;
  padding: 16px 32px;
  height: 48px;
  background: #4834d4;
  border: 1px solid rgba(155, 155, 155, 0.2);
  border-radius: 8px;
  margin-top: 44px;
`;

type Props = {
  setUser: Dispatch<SetStateAction<IUser | undefined>>;
};

const Login = ({ setUser }: Props) => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      let data = await fetch(
        "https://adminstaging.airgate.ng/index.php/api/auth/login",
        {
          method: "POST",
          body: JSON.stringify({
            email: username,
            password: password,
          }),
        }
      );
      // let response = data.body;
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Login">
      <img src={logo} alt="logo" />
      <form onSubmit={handleSubmit}>
        <p className="form-header">Welcome Back!</p>
        <p className="form-subhead">Log into your account</p>
        <label htmlFor="username">
          <p>Username</p>
          <input
            name="username"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <div>
          <div>
            <input type="checkbox" name="remember" id="remember-me" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <p>Forgot Password?</p>
        </div>
        <Button type="submit" loading={loading} variant="contained">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
