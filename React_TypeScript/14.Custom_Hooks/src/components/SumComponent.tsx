import { useState, type ChangeEvent } from "react"
import useSum from "../hooks/useSum"

const SumComponent = () => {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const sum = useSum(num1, num2)
    return (
        <div>
            <input type="number" value={num1} onChange={(e: ChangeEvent<HTMLInputElement>) => setNum1(Number(e.target.value))} />
            <input type="number" value={num2} onChange={(e: ChangeEvent<HTMLInputElement>) => setNum2(Number(e.target.value))} />
            <p>{sum}</p>
        </div>
    )
}

export default SumComponent