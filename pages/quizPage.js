import { useState } from "react";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import { withRouter } from "next/router";
import styles from '../styles/Home.module.css'


function totalCorrectAnswers(quizAnswers) {
  return quizAnswers.reduce((accumulator, current) => {
    return accumulator + (current.answers.find((answer, index) => index === Number(current.selectedAnswer) && answer.isCorrect) ? 1 : 0)
  }, 0)
}


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


  const selectAnswer = (event) => {
    event.preventDefault();
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
    <div className={actualValue.quizData.length && actualValue.quizData[actualValue.currentQuestionId] ? styles.questionsBackground : styles.homepage}>
      <Head>
        <title>Quiz</title>
      </Head>

      <div className="container-fluid vh-100">
        <div className="row"> </div>
        <div className={`row ${actualValue.quizData.length && !actualValue.quizData[actualValue.currentQuestionId] ? styles.finalPage : null}`}>
          <div className="col-lg"></div>
          <div className="col-lg">
            {!actualValue.quizData.length ?
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

              :
              null
            }


            {actualValue.quizData.length && actualValue.quizData[actualValue.currentQuestionId] ?
              <div >
                <div className={styles.card1}>
                  <h6> Select the correct answer: </h6>
                  <h5><b>Question number #{actualValue.currentQuestionId + 1} of #{actualValue.quizData.length}</b></h5>
                </div>

                <div className={styles.card}>
                  Question: {actualValue.quizData[actualValue.currentQuestionId].question}
                </div>

                <div className={styles.cardAnswers}>
                  <ul style={{ "listStyleType": "none" }} >
                    {actualValue.quizData[actualValue.currentQuestionId].answers.map((option, index) => <li key={index}> <input type="radio" data-answerid={index} onClick={selectAnswer} /> {option.description}</li>)}
                  </ul>
                </div>
              </div>

              : null

            }


            {actualValue.quizData.length && !actualValue.quizData[actualValue.currentQuestionId] ?
              <div >
                <div className={styles.cardResult}>
                  RESULT: {totalCorrectAnswers(actualValue.quizAnswers)} of {actualValue.quizAnswers.length}
                </div>

                <ul style={{ "listStyleType": "none" }} >
                  {actualValue.quizAnswers.map((currentQuestion, index) => (
                    <li key={index}>
                      <div className={styles.cardSelectedAnswers}>
                        <b>Question: {currentQuestion.question}</b>
                        <br />
                        <br />
                        {currentQuestion.answers.map((answer, index) => (
                          <div key={index} className={formatAnswer(answer, currentQuestion, index)}>
                            {index === Number(currentQuestion.selectedAnswer) ? "SELECTED: " : null} {answer.description}
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
          <div className="col-lg">
          </div>
        </div>
        <div className="row"> </div>
      </div>
    </div >
  );

}


export async function getServerSideProps({ query }) {
  // Fetch data from API
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