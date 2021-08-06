import {useState} from "react";
import {MyModule} from "../components/newComponent";

const mainPage = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => setCounter(counter + 1);
    const divide = () => setCounter(counter - 1);
    return (
        <div className="text-center"><a>{counter}</a>
            <button onClick={increment}>Add</button>
            <button onClick={divide}>Div</button>
            <MyModule image={"/8641843902.jpg"} size={30}/>
            <a className="bg-green-800">Test text</a>
        </div>);
}
export default mainPage;
