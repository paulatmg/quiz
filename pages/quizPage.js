import { useState } from "react";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import { withRouter } from "next/router";
import styles from '../styles/Home.module.css'


function formatAnswer(answer, currentQuestion, index) {
  let answerStyle;

  if (index === Number(currentQuestion.selectedAnswer) && !answer.isCorrect) {
    answerStyle = styles.textFailed;
  }
  else if (answer.isCorrect) {
    answerStyle = styles.textSuccess;
  }
  return answerStyle
}


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


  return (
    <div className={styles.homepage}>
      {/* <div className="flex items-center justify-center min-h-screen"> */}
      <Head>
        <title>Programming</title>
      </Head>

      <div className="container">
        <div className="row">
          <div className="col-lg"></div>
          <div className="col-lg">
            <div className="row">
              <div className="col-lg-12">
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {!actualValue.quizData.length ?
                  // <div className={styles.homepage} >
                  <div>
                    <div className="row">
                      <div className="col"> </div>
                      <div className={styles.h4}>
                        <h4><b>Select the Subject:</b></h4>
                        <br />
                        <form action="" method="GET">


                          <select name="subject" id="subject" className="btn btn-secondary dropdown-toggle">

                            {/* {subjectData.map((item) => (
                      <option value={item.subject}> {item.subject} </option>

                    ))}; */}

                            {subjectData.map(function (item) {
                              return <option value={item.subject}> {item.subject} </option>

                            })
                            }



                          </select>


                          <br />
                          <br />
                          <br />
                          <button type="submit" className={styles.button}> SUBMIT! </button>

                        </form>
                      </div>
                    </div>
                    <div className="col"> </div>
                  </div>
                  // </div>
                  :
                  null
                }


                {actualValue.quizData.length && actualValue.quizData[actualValue.currentQuestionId] ?
                  //? <ul>{quizData.map((option, index) => <li key={index}> {option.question}</li>)}</ul> : null}

                  <div className={styles.body}>
                    <div>
                      <div className={styles.h6}>
                        <h6> Select the correct answer: </h6>
                      </div>
                      <div className={styles.h5}>
                        <h5><b>Question number #{actualValue.currentQuestionId + 1} of #{actualValue.quizData.length}</b></h5>
                        <br />
                      </div>
                    </div>


                    <div className="row">
                      <div className="col"> </div>
                      <div className="col-6">

                        <div className={styles.card}>
                          <div> Question: {actualValue.quizData[actualValue.currentQuestionId].question} </div>
                        </div>

                        <div className={styles.cardAnswers}>
                          <div>
                            <ul style={{ "listStyleType": "none" }} >

                              {actualValue.quizData[actualValue.currentQuestionId].answers.map((option, index) => <li key={index}> <input type="radio" data-answerid={index} onClick={selectAnswer} /> {option.description}</li>)}

                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col"> </div>
                    </div>
                  </div>


                  : null

                }


                {actualValue.quizData.length && !actualValue.quizData[actualValue.currentQuestionId] ?


                  <div className={styles.finalPage}>
                    <ul style={{ "listStyleType": "none" }} >
                      {actualValue.quizAnswers.map((currentQuestion, index) => (
                        <li key={index}>


                          <div className={styles.cardSelectedAnswers}>
                            <b>Question: {currentQuestion.question}</b>
                            <br />
                            <br />

                            {currentQuestion.answers.map((answer, index) => (

                              <div key={index}>

                                <div className={formatAnswer(answer, currentQuestion, index)}>
                                  {index === Number(currentQuestion.selectedAnswer) ? "SELECTED: " : null} {answer.description}
                                </div>
                              </div>

                            ))}

                          </div>
                        </li>
                      )
                      )}
                    </ul>
                  </div>
                  : null

                }
              </div>
            </div>
          </div>
          <div className="col-lg">
          </div>
        </div>
        {/* </div> */}




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

