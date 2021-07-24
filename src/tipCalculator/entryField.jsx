import Input from "./inputs";

function EntryField({ type = null, children, handleChange, name }) {
    if (type === "select") {
        return (
            <div className="entryField">
                <div className="entryField__description">
                    <label htmlFor="" className="entryField__label">{children}</label>
                    <span className="entryField__errorMsg">Error Message</span>
                </div>

                <div class="entryField__selectBtn">
                    <button class="btn">5%</button>
                    <button class="btn">10%</button>
                    <button class="btn">15%</button>
                    <button class="btn">20%</button>
                    <button class="btn">25%</button>
                    <input
                        type="text"
                        class="input input--txtCenter"
                        placeholder="Custom"
                    />
                </div>
            </div>
        )
    } else {
        return (
            <div className="entryField">
                <div className="entryField__description">
                    <label htmlFor="" className="entryField__label">{children}</label>
                    <span className="entryField__errorMsg">Error Message</span>
                </div>

                <Input name={name} handleChange={handleChange} />
            </div>
        )
    }

}

export default EntryField;