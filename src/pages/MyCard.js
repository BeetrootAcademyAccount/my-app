import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MyCard({ item }) {
  return (
    <Card style={{ width: "18rem" }} className="m-4">
      <Card.Img variant="top" src="https://picsum.photos/id/237/200/300" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>Age: {item.age}</Card.Text>
        <Button variant="primary">Adopt</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
