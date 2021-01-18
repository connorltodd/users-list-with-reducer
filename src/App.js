import UserList from "./components/UserList";
import UsersContextProvider from "./contexts/UsersContext";

function App() {
  return (
    <div className="App">
      <UsersContextProvider>
        <UserList />
      </UsersContextProvider>
    </div>
  );
}

export default App;
