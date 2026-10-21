import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import GameCard from './components/GameCard';
import games from './data/games.json';

export default function App() {
  return (
    <main className="game-gallery">
      <Container className="gallery-container">
        <header className="gallery-header">
          <h1>Game Gallery</h1>
          <p className="gallery-intro">
            My favorite games to play on Switch.
          </p>
        </header>

        <Row className="g-4">
          {games.map((game) => (
            <Col key={game.name} xs={12} md={6} lg={4}>
              <GameCard {...game} />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}