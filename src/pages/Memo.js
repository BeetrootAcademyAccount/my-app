import { useState, useMemo } from "react";

function Memo() {
  const [val, setVal] = useState(0);
  const [col, setCol] = useState("#23FF23");

  const changeColor = () => {
    setCol((prevValue) => {
      const colorArray = Array.from(prevValue);
      const randPosition = Math.floor(Math.random() * 5 + 1);
      const randValue = Math.floor(Math.random() * 15);
      const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

      console.log(randValue);
      console.log(arr[randValue]);

      colorArray.splice(randPosition, 1, arr[randValue]);
      return colorArray.join("");
    });
  };

  const message = useMemo(() => {
    return changeNumber(val);
  }, [val]);

  const changeValue = () => {
    setVal((previousValue) => previousValue + 1);
  };

  return (
    <div>
      <div style={{ color: col }}>This card {col}</div>
      <div>{message}</div>
      <div>
        <button onClick={changeColor}>Color</button>
        <button onClick={changeValue}>Value</button>
      </div>
    </div>
  );
}

export default Memo;

function changeNumber(number) {
  let result = 0;
  for (let index = 0; index < 1000000000; index++) {
    result += 1;
  }
  return `The current counter is ${number}`;
}
