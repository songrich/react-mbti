import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const verifyUser = (user) => {
    if (user) {
      navigate("/testpage");
    } else {
      alert("로그인 먼저 해주세요");
      navigate("/login");
    }
  };
  return (
    <>
      <Link to="/result">결과 페이지로 이동</Link>
      <h1>자기 성격 알아보기 테스트</h1>
      <div>
        <h3>성격 유형 검사</h3>
        <h3>성격 유형 이해</h3>
        <h3>팀평가</h3>
      </div>
      <button
        onClick={() => {
          verifyUser(user);
        }}
      >
        지금 바로 성격 검사하러 가기
      </button>
    </>
  );
};
export default Home;
