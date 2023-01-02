import { useState } from "react"
import { create, all } from 'mathjs'

const SimpleCalculator = () => {
    const [mathExpression, setMathExpression] = useState("")
    const [result, setResult] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const config = { }
    const math = create(all, config)

    const evaluateExpression = (value) => {
        setMathExpression(value)
        try{
            let expressionResult = math.evaluate(value)
            setResult(expressionResult.toLocaleString('en-US'))

            // Cleanup previous error message
            setErrorMessage("")
        } catch (ex){
            // Set error message
            setErrorMessage(ex.message)
        }
    }

    return (
        <>
        <input type="text" value={mathExpression} onChange={(event) => {evaluateExpression(event.target.value)}}/>
        <p className={errorMessage != "" && "result error" || "result"}>{result}</p>
        <small>{errorMessage}</small>
        </>
    )
}


export default SimpleCalculator