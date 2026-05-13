import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading";
export function App() {
  return (
    <div>
      <Heading attr="string" attr2={123}>
        Ola mundo!
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        perspiciatis et repellat commodi odio, quibusdam laborum quis ipsum quo
        perferendis saepe mollitia accusantium debitis quam deleniti enim eaque
        id in!
      </p>
    </div>
  );
}
