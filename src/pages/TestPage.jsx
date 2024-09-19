import { useContext } from "react";
import TestForm from "../components/TestForm";

import calculateMBTI from "../utils/mbtiCalculator";
import { createTestResult } from "../api/TestResults";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  const navigate = useNavigate();

  const handleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);

    const resultData = {
      userId: user && user.userId,

      nickname: user.nickname,
      result,
      answers,
      date: new Date().toISOString(),
      visibility: true,
    };
    console.log("result data ===>", resultData);
    await createTestResult(resultData);
    navigate("/result");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">MBTI 테스트</h1>
      <TestForm onSubmit={handleTestSubmit} />
    </div>
  );
};

export default Test;
