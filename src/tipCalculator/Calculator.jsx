import EntryField from "./entryField";
import { useState } from "react";
import Result from "./result"
import Button from "./buttons";


function Calculator() {
    const { state, setState } = useState({
        billInput: {
            amount: 0,
            error: null
        },
        tipPourc: {
            list: [
                5, 10, 15, 20, 25, "custom"
            ],
            selected: null,
            error: null,
        },
        numbPeopleInput: {
            amount: 0,
            error: null,
        },
        totalTipAmount: 0,
        totalAmount: 0

    })

    const handleChange = (e) => {
        console.log(e.target.name);
    }
    return (
        <div class="calculator">
            <div class="calculator__entry">
                <EntryField name="billInput" handleChange={handleChange} type="input">Bill</EntryField>
                <EntryField type="select">Select Typ %</EntryField>
                <EntryField type="input">Number of People</EntryField>

            </div>
            <div class="calculator__output">
                <div class="calculator__result">
                    <Result />
                    <Result />
                </div>
                <div class="calculator__btnReset">
                    <Button />
                </div>
            </div>
        </div>
    )
}


export default Calculator;