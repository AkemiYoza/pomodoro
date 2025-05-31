import { TimerIcon } from "lucide-react";
import { Heading } from "./components/Heading";

import './styles/global.css';
import './styles/theme.css';

export function App() {

  return (
    <>
        <Heading>Olá mundo!
            <button>
                <TimerIcon />
            </button>
        </Heading>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nostrum iusto alias, autem neque perspiciatis rem quisquam ullam optio magni possimus dolore est soluta fugit doloribus, quasi ad excepturi repudiandae.</p>
    </>
  )
}

