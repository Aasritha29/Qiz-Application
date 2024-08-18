import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Quiz/>
    <Content/>
    <Footer/>

  </React.StrictMode>
);

function Quiz() {
  return (
    <div className='header'>
    <h1>Java Quiz</h1>
    </div>
  );
}

function Content(){
  function displayResult(event)
  {
    let ans1=event.target.q1.value;
    let ans2=event.target.q2.value;
    let ans3=event.target.q3.value;
    let ans4=event.target.q4.value;
    let ans5=event.target.q5.value;
    let ans6=event.target.q6.value;
    let ans7=event.target.q7.value;
    let ans8=event.target.q8.value;
    let ans9=event.target.q9.value;
    let ans10=event.target.q10.value;

    
    let marks=0;

    if(ans1==='B.High Level Language')
    {
      marks++;
    }

    if(ans2==='C.OOPS')
    {
      marks++;
    }

    if(ans3==='A.Inheritance')
    {
        marks++;
    }

    if(ans4==='A.32 and 64')
     {
          marks++;
     }

    if(ans5==='B.Int to long')
      {
            marks++;
      }

    if(ans6==='B.char[] ch=new char[5]')
      {
        marks++;
      }
    
    if(ans7==='B.int[] A={1,2,3}')
     {
        marks++;
     }
    
    if(ans8==='A.The reference of the array')
     {
        marks++;
     }
    
    if(ans9==='B.Objects')
     {
          marks++;
     }
    
    if(ans10==='A.At run time')
      {
          marks++;
      }
    



    alert("total marks:"+marks);
    
    
  }
  return(
    <div className="content">
    <h1 style={{textAlign:'center',color:'pink'}}>Answer these questions</h1>
    <form onSubmit={displayResult}>
    <Question
    ques="1.What is java?"
    op1='A.Low Level Language'
    op2='B.High Level Language'
    op3='C.Scriptted Language'
    name="q1"
    />

    <Question
    ques="2.What is the feature of java?"
    op1="A.Low performance"
    op2="B.Platform dependent"
    op3="C.OOPS"
    name="q2"
    />

   <Question
   ques="3.Which of the following is related to OOP concept?"
   op1="A.Inheritance"
   op2="B.Pointers"
   op3="C.Stack"
   name="q3"
   />

   <Question
   ques="4.What is the size of float and double in java?"
   op1="A.32 and 64"
   op2="B.32 and 32"
   op3="C.64 and 64"
   name="q4"
   />

   <Question
   ques="5.Automatic type conversion is possible in which of the following cases?"
   op1="A.Byte to int"
   op2="B.Int to long"
   op3="C.Long to int"
   name="q5"
   />

   <Question
   ques="6.Select a valid statement."
   op1="A.char[] ch=new char(5)"
   op2="B.char[] ch=new char[5]"
   op3="C.char[] ch=new char()"
   name="q6"
   />

   <Question
   ques="7.Select the valid statement to declare and initialize an array."
   op1="A.int[] A={}"
   op2="B.int[] A={1,2,3}"
   op3="C.int[] A=(1,2,3)"
   name="q7"
   />

  <Question
   ques="8.When an array is passed to a method, what does the method receive?"
   op1="A.The reference of the array"
   op2="B.Copy of the array"
   op3="C.Length of the array"
   name="q8"
   />

  <Question
   ques="9.Arrays in java are?"
   op1="A.Object references"
   op2="B.Objects"
   op3="C.Primitive data type"
   name="q9"
   />

  <Question
   ques="10.When an object is created with new keyword?"
   op1="A.At run time"
   op2="B.At compile time"
   op3="C.Depends on the code"
   name="q10"
   />

   <input type="submit" value="SUBMIT"    className="submitbtn"/>
   </form>
    </div>
  );
}

function Question(props)
{


  return(
    <div className="question">
      <h2>{props.ques}</h2>
      <input   type="radio" name={props.name} value={props.op1} />
      <label>{props.op1}</label>
     <input   type="radio" name={props.name} value={props.op2}/>
     <label>{props.op2}</label>
     <input type="radio" name={props.name} value={props.op3}/>
     <label>{props.op3}</label>
    
  </div>
  )
}



function Footer()
{
  return(
    <div className='foot'>
    <h1>This is the basic quiz application using react</h1>
    </div>
  )
}


