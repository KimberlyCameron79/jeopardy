export default function Score(props) {

    let [trivia, setTrivia]=useState(0)
}

const handleIncrement = () => {
    setTrivia(count + 100)

}

const handleDecrement = () => {
    setTrivia(count - 100)
}

const handleChange = () => {
    console.log('hello')
    setScore(e.target.value)
}

return(
    <>
    <span>Score: {Score}</span>
    <section>
    <input 
        type="text" 
        value={number} 
        onChange{...handleChange} 
        />
        <br />
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    </section>
    </>
    )
