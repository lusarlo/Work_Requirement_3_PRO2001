import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import type Game from '../interfaces/Games';

export default function GameCard(
  { name, description, image, link }: Game
) {
  return (
    <Card className="game-card">
      <Card.Img
        className="game-card-image"
        src={image}
        alt={`${name} cover`}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button
          className="read-more-button"
          variant="primary"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Official Website
        </Button>
      </Card.Body>
    </Card>
  );
}