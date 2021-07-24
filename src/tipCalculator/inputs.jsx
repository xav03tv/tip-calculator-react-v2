function Input({ handleChange, name }) {
    return (
        <input name={name} onChange={handleChange} type="text" class="input" placeholder="0" />
    )
}

export default Input;