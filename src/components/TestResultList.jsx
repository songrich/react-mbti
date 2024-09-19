import TestResultItem from "./TestResultItem";

const TestResultList = ({ user, results, onUpdate, onDelete }) => {
  const filteredResults = results.filter((result) => {
    return result.visibility || result?.userId === user?.userId;
  });
  console.log(filteredResults);

  return (
    <>
      {filteredResults.map((result) => {
        return (
          <TestResultItem
            key={result.id}
            result={result}
            user={user}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        );
      })}
    </>
  );
};
export default TestResultList;
