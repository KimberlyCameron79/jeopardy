import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TriviaDisplay from './components/TriviaDisplay';

function App() {

  const apiKey = '6B84047C-40D2-4B0D-BA87-6AAC21AC724C'

  let [trivia, setTrivia] = useState(null)

  //  async / await 
  const getTrivia = async (triviaQuestion) => {

    // method chaining with .then to handle asynchronous requests
    // fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=godfather`)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))

    const response = await fetch(`http://jservice.io/api/random=${apiKey}&t=${triviaQuestion}`)
    const data = await response.json()
    console.log(data)

    setTrivia(data)
  }

  return (
    <div className="App">
        <TriviaDisplay trivia={trivia} />
        <Form getTrivia={getTrivia} /> 
    </div>
  );
}

export default App;