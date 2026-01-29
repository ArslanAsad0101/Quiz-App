import React from 'react'
import './quiz.css'

const questions = [
   {
    "question": "What is the capital of France?",
    "options": ["London", "Paris", "Berlin", "Madrid"],
    "answer": "Paris"
  },
  {
    "question": "Who painted the Mona Lisa?",
    "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    "answer": "Leonardo da Vinci"
  },
  {
    "question": "Which planet is known as the 'Red Planet'?",
    "options": ["Jupiter", "Mars", "Venus", "Saturn"],
    "answer": "Mars"
  },
  {
    "question": "How many continents are there in the world?",
    "options": ["5", "6", "7", "8"],
    "answer": "7"
  },
  {
    "question": "What is the largest organ in the human body?",
    "options": ["Heart", "Liver", "Skin", "Lungs"],
    "answer": "Skin"
  }
]

const Quiz = () => {

  let [index, setIndex] = React.useState(0);
  let [click, setClick] = React.useState(false);

  return (
    <div className='container'>
        <h1>Quiz</h1>
    <hr />
    <h2>{index+1}.{questions[index].question}</h2>
    <ul>
        {questions[index].options.map((option, i) => (
            <li onClick={(li)=>{
              if(option===questions[index].answer){
                li.target.className="correct"
                setClick(true)
              }else{
                li.target.className="wrong"
                setClick(true)
              }
            }} key={i}
              //  disabled={click ? true : false}
              >
              {option}
            </li>
        ))}
    </ul>

    <button onClick={()=>{
      if(index<questions.length-1) setIndex(index+1)}}
      disabled={index===questions.length-1}>Next</button>

    <div className='q-count'>{index+1} of 5 Questions</div>
    </div>
  )
}

export default Quiz