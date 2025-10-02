import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {}, []);

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h2>Name : {name}</h2>
      <h3>Location: New Delhi</h3>
      <h4>Contact: bharatk503@gmail.com</h4>
    </div>
  );
};

export default User;
