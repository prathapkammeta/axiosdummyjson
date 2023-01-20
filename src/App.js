import "./styles.css";
import Input from "./Input";
import { useState, useEffect } from "react";
export default function App() {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    await fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(users);

  const filterusers = users;
  console.log(filterusers, "");
  const myusers = filterusers.filter((item) => {
    return item.age > 40;
  });
  console.log(myusers);

  return (
    <div className="App">
      {users.map((item) => (
        <li>{item.firstName}</li>
      ))}

      <Input />
    </div>
  );
}
