import { Button, FormControl, TextField } from "@mui/material";
import { useAuth } from "lib/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await auth.login({ username, password });
      navigate("/protected");
    } catch (error) {
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          required
          variant="outlined"
          type="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          label="Password"
          required
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button variant="outlined" color="primary" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
