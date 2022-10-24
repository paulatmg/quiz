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


  const selectAnswer = (event) => {
    console.log("show answer: ", event.target.dataset.answerid)
    setNewState({
      ...actualValue,
      currentQuestionId: actualValue.currentQuestionId + 1,
      quizAnswers: actualValue.quizAnswers.concat([{
        ...actualValue.quizData[actualValue.currentQuestionId],
        selectedAnswer: event.target.dataset.answerid
      }]
      )
    })
  }

  console.log("actualValue:", actualValue);
  // console.log("QUIZ DATA:", quizData);

  console.log("subjectData:", subjectData);


  return (
    <div className="container">
      <div className='flex items-center justify-center min-h-screen'>
        <Head>
          <title>Programming</title>
          <meta name='description' content='Contact us' />
          <link rel='icon' href='/favicon.ico' />
        </Head>














        {!actualValue.quizData.length ?

          <div>
            <div className="row">
              <div className="col"> </div>
              <div className="col-6">
                <h4> Select the Subject:</h4>
                <form action="" method="GET">
                  <select name="subject" id="subject">

                    {/* {subjectData.map((item) => (
                      <option value={item.subject}> {item.subject} </option>

                    ))}; */}
                    
                    {subjectData.map(function(item){
                      return <option value={item.subject}> {item.subject} </option>

                    })
                  }


                </select>
                <br />
                <br />
                <br />
                <button type="submit"> SUBMIT! </button>

              </form>
            </div>
            <div className="col"> </div>
          </div>
          </div>
      :
      null
        }

      {actualValue.quizData.length && actualValue.quizData[actualValue.currentQuestionId] ?
        //? <ul>{quizData.map((option, index) => <li key={index}> {option.question}</li>)}</ul> : null}


        <div>
          <div>
            <div className="text-center">
              Select the correct answer: </div>
            <br />
            <div className="text-center">
              <div><b>Question number #{actualValue.currentQuestionId + 1} of #{actualValue.quizData.length}</b></div>
              <br />
            </div>
          </div>


          <div className="row">
            <div className="col"> </div>
            <div className="col-6">

              <div className="card text-white text-center bg-info" styles="width: 18rem;">
                <div className="card-header">
                  <h6> Question: {actualValue.quizData[actualValue.currentQuestionId].question} </h6>
                </div>
              </div>


              <div> <ul className="card text-left list-group list-group-flush bg-white text-black border-info" style={{ "list-style-type": "none" }} >

                {actualValue.quizData[actualValue.currentQuestionId].answers.map((option, index) => <li key={index}> <input type="radio" data-answerid={index} onClick={selectAnswer} /> {option.description}</li>)}

              </ul>
              </div>
            </div>
            <div className="col"> </div>
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


                <div className="card text-white bg-info mb-30 w-50" styles="width: 18rem;">
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

    </div>
    </div >
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