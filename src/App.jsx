import {ScrollTrigger, SplitText} from "gsap/all";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);
//these gsap plugins aren't automaticallty active therefore we have to register them first.
//app file me krne se poore project me active honge

const App = () => {
  return (
    <div className="flex-center h-[100vh]">
      <h1 className="text-3xl text-indigo-300">Hello, GSAP !</h1>
    </div>
  )
}

export default App
