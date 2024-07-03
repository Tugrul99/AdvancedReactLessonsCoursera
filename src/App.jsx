import "./App.css";
import UserListAge from "./ListRendering/userListAge";
import UserListName from "./ListRendering/userListName";

const users = [
  { id: 1, name: "Alice", age: 28, city: "New York" },
  { id: 2, name: "Bob", age: 35, city: "San Francisco" },
  { id: 3, name: "Charlie", age: 25, city: "Los Angeles" },
  { id: 4, name: "David", age: 30, city: "Chicago" },
  { id: 5, name: "Eve", age: 22, city: "Miami" },
];
function App() {
  return (
    <div>
      <h1>Age ordered</h1>
      <UserListAge data={users} />
      <div>
        <h1>Alphabetic order</h1>
        <UserListName data={users} />
      </div>
    </div>
  );
}

export default App;
