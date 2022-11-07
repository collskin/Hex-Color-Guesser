import { useEffect, useState } from "react"
import "./color.css"


export default function Color() {

    const [color, setColor] = useState("");
    const [answers, setAnswers] = useState([]);
    const [isWrongSelection, setIsWrongSelection] = useState(false);

    
    const getRandomColor = ()=>{
        const digits = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"];
        const color = new Array(6).fill("").map(() =>digits[
            Math.floor(Math.random() * digits.length)]).join("");
            return `#${color}`;
        }

        const generateColor = () => {
            const actualColor = getRandomColor();
            setColor(actualColor);
            setAnswers([actualColor, getRandomColor(), getRandomColor()].sort(
            () => 0.5 - Math.random()
            ))
        }

    useEffect(()=>{
        generateColor();
    }, []);

    function handleAnswerClicked(answer){
        if (answer == color){
            setIsWrongSelection(true);
            generateColor();
        }else{
            setIsWrongSelection(false);
        }
    }
  return (
    <div className="mainDiv">
        <div>
        <div className="colorDiv" style={{background: color}}></div>
        
        {answers.map((answer) => (
            <button onClick={()=> handleAnswerClicked(answer)} key={answer}>{answer}</button>
        ))}
        
        </div>
        {isWrongSelection == false && <div>Wront answer</div>}
        {isWrongSelection == true && <div>Correct answer</div>}
    </div>
  )
}
