import { useState, useEffect } from "react";
import MyCard from "./MyCard";

function Main() {
  const items = [
    {
      id: 1,
      name: "Edward",
      age: 7,
    },
    {
      id: 2,
      name: "Tom",
      age: 4,
    },
    {
      id: 3,
      name: "Johny",
      age: 3,
    },
  ];

  const data = items.map((item) => {
    return item;
  });

  //Props
  const cardName = "Ivo";
  const age = 31;
  const hobby = "Teaching";

  //State
  const [myName, setMyName] = useState("Ivo");
  const [counter, setCounter] = useState(0);
  let count = counter;

  function changeUser(user) {
    setMyName(user);
  }

  function updateCount() {
    setCounter(++count);
  }

  return (
    <div className="m-3">
      <h2>
        Hello {myName} {counter}
      </h2>
      <button onClick={updateCount}>Click</button>
      <div className="mt-2 d-flex">
        {items.map((item, index) => (
          <MyCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Main;
