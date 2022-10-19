import { useState } from "react";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
//import Link from 'next/link';

export default function Page({ subjectData, quizData }) {


  const [actualValue, setNewState] = useState({
    quizData,
    currentQuestionId: 0,
    quizAnswers: []
  });


  const increaseCount = () => setNewState(actualValue + 1);


  const selectAnswer = (event) => setNewState({
    ...actualValue,
    currentQuestionId: actualValue.currentQuestionId + 1,
    quizAnswers: actualValue.quizAnswers.concat([{
      ...actualValue.quizData[actualValue.currentQuestionId],
      selectedAnswer: event.target.dataset.answerid
    }]
    )
  })

  console.log("actualValue:", actualValue);
  // console.log("QUIZ DATA:", quizData);

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Head>
        <title>Programming</title>
        <meta name='description' content='Contact us' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {actualValue.quizData.length && actualValue.quizData[actualValue.currentQuestionId] ?
        //? <ul>{quizData.map((option, index) => <li key={index}> {option.question}</li>)}</ul> : null}


        <div>
          <div>
            Select the correct answer: </div>
          <br />

          <div><b>Question number #{actualValue.currentQuestionId + 1} of #{actualValue.quizData.length}</b></div>
          <br />

          <div class="card text-white bg-info mb-30 w-50" styles="width: 18rem;">
            <div class="card-header">
              <h6> Question: {actualValue.quizData[actualValue.currentQuestionId].question} </h6>
            </div>

            {/* <ul class="list-group list-group-flush"> */}
            <ul class="list-group list-group-flush bg-white text-black" >

              {actualValue.quizData[actualValue.currentQuestionId].answers.map((option, index) => <li data-answerid={index} onClick={selectAnswer} key={index}> <input type="radio" /> {option.description}</li>)}

            </ul>
          </div>

          {/* 
          <div class="card-header">
            <h6>Question: {actualValue.quizData[actualValue.currentQuestionId].question}</h6></div>

          <div><ul>{actualValue.quizData[actualValue.currentQuestionId].answers.map((option, index) => <li data-answerid={index} onClick={selectAnswer} key={index}> {option.description}</li>)}</ul></div>

          <button disabled >Submit answers</button> */}
        </div>

        : null

      }

      {actualValue.quizData.length && !actualValue.quizData[actualValue.currentQuestionId] ?

        <div>
          <div>
            <ul>{actualValue.quizAnswers.map((option, index) => (
              <li key={index}>


                <div class="card text-white bg-info mb-30 w-50" styles="width: 18rem;">
                  Question: {option.question}
                </div>

                <div>
                  <b>Answers:</b>
                </div>

                {option.answers.map((answer, index) => (

                  <div key={index}>

                    {index === Number(option.selectedAnswer) ? "SELECTED: " : null}

                    {answer.isCorrect ? "CORRECT: " : null}

                    {answer.description}
                  </div>


                ))}

              </li>

            )
            )}
            </ul>
          </div>


        </div>

        : null

      }



      {/* <div class="card text-white bg-info mb-30 w-50" styles="width: 18rem;">
        <div class="card-header">
          <h6> Question: {actualValue.quizData[actualValue.currentQuestionId].question} </h6>
        </div>

        <ul class="list-group list-group-flush">
        <ul class="list-group list-group-flush bg-white text-black" >
       
            {actualValue.quizData[actualValue.currentQuestionId].answers.map((option, index) => <li data-answerid={index} onClick={selectAnswer} key={index}> <input type="radio" /> {option.description}</li>)}
          
        </ul>
      </div> */}










      {/* 
      <div className='max-w-xs my-2 overflow-hidden rounded shadow-lg'>
        <div className='px-6 py-4'>
          <div className='mb-2 text-xl font-bold'>Type the subject</div>
          <form className='flex flex-col' action="/quizPage" method="GET">

            <br />
            <br />

            <select name="subject">

              {subjectData.map((option, index) => <option key={index} value={option.subject}>{option.subject}</option>)}

            </select>

            <br />
            <br />
            <br />
            <br />
            <br />

            <button type='submit' className='px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700'> LET'S GO!!!
              <Link href="/familytree">LOGIN!!!</Link>
            </button>
          </form>
        </div>
      </div> */}
    </div>
  );
}



export async function getServerSideProps({ query }) {
  // Fetch data from external API
  const subjectResponse = await fetch(`http://localhost:3000/api/v1/subjects`)
  const subjectData = await subjectResponse.json()

  let quizData = [];

  if (query.subject) {
    const quizResponse = await fetch(`http://localhost:3000/api/v1/quiz?subject=${query.subject}`)
    quizData = await quizResponse.json()
  }

  // Pass data to the page via props
  return { props: { subjectData, quizData } }
}




                    {/* <style jsx>{`
        p {
          color: green;
        }
      `}</style> */}