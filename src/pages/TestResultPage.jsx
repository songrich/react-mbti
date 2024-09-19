import { useContext, useEffect, useState } from "react";
import { getTestResults } from "../api/TestResults";
import TestResultList from "../components/TestResultList";
import { UserContext } from "../context/UserContext";

const TestResultPage = () => {
  const { user } = useContext(UserContext);
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    const data = await getTestResults();

    setResults(data);
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const handleUpdate = () => {
    fetchResults();
  };

  const handleDelete = () => {
    fetchResults();
  };

  return (
    <>
      <h1>테스트 결과 모음</h1>
      <TestResultList
        results={results}
        user={user}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </>
  );
};
export default TestResultPage;
