
<div>
                <h1>JEOPARDY TRIVIA GAME</h1>
            </div>


function TriviaDisplay({ trivia }) {
    
    const loaded = () => {
        return (
            
            <div>
                <h1>{trivia.Category}</h1>
                <h2>{trivia.Question}</h2>
                 <h2>{trivia.Points}</h2>
            </div>
        )
    }

    const loading = () => {
        return <div>No question to display... :(</div>
    }

    return trivia ? loaded() : loading()
}

export default TriviaDisplay;