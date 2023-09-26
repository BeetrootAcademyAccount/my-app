function Card({ cardName, age, hobby, changeUser }) {
  function updateUser() {
    changeUser("Simon");
  }

  return (
    <div className="card">
      <div>Name: {cardName}</div>
      <div>Age: {age}</div>
      <div>Hobby: {hobby}</div>
      <button onClick={updateUser}>Click</button>
    </div>
  );
}

export default Card;
