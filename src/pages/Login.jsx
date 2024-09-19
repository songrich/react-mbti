import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://moneyfulpublicpolicy.co.kr/login",
      {
        id,
        password,
      }
    );

    setUser(response.data);

    console.log(response.data);
  };
  useEffect(() => {
    if (user) {
      alert("로그인에 성공했습니다");
      navigate("/");
      console.log(user?.userId);
    }
  }, [user]);

  return (
    <>
      <h1>로그인페이지</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
          placeholder="ID:"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password:"
        />
        <button type="submit">로그인</button>
      </form>
    </>
  );
};
export default Login;
