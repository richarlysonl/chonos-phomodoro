import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import { Container } from "./components/Container";
export function App() {
  return (
    <>
      <Container>
        <Heading>titulo</Heading>
      </Container>
      <Container>
        <Logo />
      </Container>
    </>
  );
}
