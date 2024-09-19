import UserProvider from "./context/UserContext";
import Router from "./shared/Router";

const App = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
};
export default App;
