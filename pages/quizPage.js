import { useState } from "react";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import { withRouter } from "next/router";
import styles from '../styles/Home.module.css'




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
      <div className="flex items-center justify-center min-h-screen">
        <Head>
          <title>Programming</title>
        </Head>




        {!actualValue.quizData.length ?
          // <div className={styles.homepage} >
          <div>
            <div className="row">
              {/* <div className="col"> </div> */}
              <div className={styles.h4}>
                <h4> Select the Subject:</h4>
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
            {/* <div className="col"> </div> */}
          </div>
          // </div>
          :
          null
        }


        {actualValue.quizData.length && actualValue.quizData[actualValue.currentQuestionId] ?
          //? <ul>{quizData.map((option, index) => <li key={index}> {option.question}</li>)}</ul> : null}

          <div className={styles.body}>
            <div>
              <div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
                <div className={styles.h6}>
                  <h6> Select the correct answer: </h6>
                  <br />
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
                    <div> <ul
                      // className="card text-left list-group list-group-flush bg-white text-black border-info" 
                      style={{ "listStyleType": "none" }} >

                      {actualValue.quizData[actualValue.currentQuestionId].answers.map((option, index) => <li key={index}> <input type="radio" data-answerid={index} onClick={selectAnswer} /> {option.description}</li>)}

                    </ul>
                    </div>
                  </div>
                </div>
                <div className="col"> </div>
              </div>
            </div>
          </div>

          : null

        }


        {actualValue.quizData.length && !actualValue.quizData[actualValue.currentQuestionId] ?
          <div className={styles.finalPage}>
            <div>
              <div>
                <ul
                  style={{ "listStyleType": "none" }} >
                  {actualValue.quizAnswers.map((option, index) => (
                    <li key={index}>


                      <div className={styles.cardAnswersSelected}>
                        Question: {option.question}
                        <br />
                        <br />
                        <b>Answers:</b>
                        <br />
                        <br />



                        {option.answers.map((answer, index) => (

                          <div key={index}>

                            <div className="text-muted">
                              {index === Number(option.selectedAnswer) ? "SELECTED: " : null}


                              <div className="text-success">
                                {answer.isCorrect ? "CORRECT: " : null}

                                <div className="text-dark">
                                  {answer.description}

                                </div>
                              </div>
                            </div>
                          </div>


                        ))}
                      </div>
                    </li>
                  )
                  )}
                </ul>

              </div>
            </div>
          </div>
          : null

        }

      </div>
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

