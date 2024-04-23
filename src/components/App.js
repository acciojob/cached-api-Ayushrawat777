import React, { useEffect, useState } from "react";
const App = () => {
  const [data, Setdata] = useState([]);
  const calling = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    Setdata(data);
  };
  useEffect(() => {
    calling();
  }, []);
  return (
    <>
      {data.map((e, index) => {
        return (
          <ul>
            <li>
              <strong>{e.title}</strong>
            </li>
            <br />
            <p>{e.body}</p>
          </ul>
        );
      })}
    </>
  );
};

export default App;
