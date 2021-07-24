import Result from "./result"
import Button from "./buttons";

function CalculatorOutput() {
    return (
        <div class="calculator__output">
            <div class="calculator__result">
                <Result />
                <Result />
            </div>
            <div class="calculator__btnReset">
                <Button />
            </div>
        </div>
    )
}

export default CalculatorOutput;