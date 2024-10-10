// Import npm packages
// NOTE: Use V5 react-bootstrap syntax, to reduce pulling the ENTIRE library in (can reduce load size)
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { RiReactjsLine } from "react-icons/ri";
import AlertDialog from "../../../packages/src/components/AlertDialog/AlertDialog";

const Home = () => {
  return (
    <header>
      {/* NAVBAR */}
      <Navbar className="mb-4" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <RiReactjsLine className="mb-1" style={{ color: "aqua" }} />{" "}
            react-base
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* HERO SECTION */}
      <Container>
        <div id="hero-section">
          <h1>Welcome to React Base</h1>
          <p>Our first peer into the React ecosystem & first principles!</p>
          <Button variant="info">Learn more</Button>
        </div>
        <AlertDialog
          title="Warning!"
          body="Are you sure you want to proceed?"
          btnText="Open Alert"
          alertType="warning"
        />
      </Container>
    </header>
  );
};

export default Home;
