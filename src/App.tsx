import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";
export function App() {
  return (
    <div>
      <Heading>
        Ola mundo!
        <button>
          <TimerIcon />
        </button>
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
