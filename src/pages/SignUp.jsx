import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "https://moneyfulpublicpolicy.co.kr/register",
      {
        id,
        password,
        nickname,
      }
    );
    console.log(data);
    if (data.success) {
      alert(
        "회원가입이 정상적으로 처리되었습니다.로그인 페이지로 이동하겠습니다"
      );
      navigate("/login");
    } else {
      alert("회원가입을 다시 진행해주세요");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>회원가입을 해주시기 바랍니다</h1>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
        placeholder="아이디를 입력해주세요"
      />

      <input
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="비밀번호를 입력해주세요"
      />
      <div>
        {" "}
        닉네임:{" "}
        <input
          type="text"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        />
      </div>
      <button type="submit">회원가입</button>
    </form>
  );
};
export default SignUp;
