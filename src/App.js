
import './App.css';
import questions from './Comp/questions';
import {useState} from 'react';
import React from 'react';

function App() {
  const [questionindex,setquestionindex] = useState(0);
  const [score,setscore] = useState(0);
  const [results, setResults] = useState(false);
  const   replay= () =>
  {
  setquestionindex(0); 
  setscore(0);
  setResults(false);
  }
  const present_question=questions[questionindex];
const get_choice=(index)=>{
   if(present_question.answer==index){
    alert("Success!!! ");
    setscore(score+1);
    alert(score);
   }
   const next_question =  questionindex+1;
   if(next_question<questions.length)
   {
   setquestionindex(questionindex+1);  
   }
   else{
    setResults(true);
}
} ;
  return (

  <div className='quiz_box'>
    {results?(<>
        <h1>{score}</h1> <br/>
          <button onClick={replay}> Play Again </button> </>):
    <div className='quiz_question'>
     {present_question.question}
    
<div className='quiz-box options'>Options </div>
<ul className='qiz_ul'>
    {present_question.options.map
    ((Option,i)=>
    { return <li className='quiz_li'
    onClick={()=>get_choice(i)}
    >{Option}  </li>
  
  })}

</ul>
</div>}
            </div>
  
  );
}

export default App;
