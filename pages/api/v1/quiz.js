
import { fetchDBDetails } from '../../../helpers/dataBase';


export default async function handler(req, res) {
    const subject = req.query.subject;

    if (!subject) {
        res.status(400).json({ error: 'Please provide a "subject" to filter the questions!' });
        return null;
    }

    const query = `SELECT q.id, q.subject, q.question, a.description, a.is_correct FROM quiz q JOIN answers a ON a.quiz_id = q.id WHERE q.subject = '${subject}'`;

    const responses = await fetchDBDetails(query);

    if (!responses.length) {
        res.status(400).json({ error: `No results for the "${subject}" subject!` });
        return null;
    }

    const quiz = [];


    for (let i = 0; i < responses.length; i++) {
        const currentResponse = responses[i];

        //console.log("currentResponse::::", currentResponse);



        if (!quiz.find((data) => data.question === currentResponse.question)) {

            quiz.push({
                subject: currentResponse.subject,
                question: currentResponse.question,
                answers: shuffle(responses
                    .filter((data) => data.id === currentResponse.id)
                    .map((data) => ({
                        isCorrect: data.is_correct,
                        description: data.description
                    }))
                ),
            });
        }
    }


    res.status(200).json(shuffle(quiz));
    //res.status(200).json(quiz);
}



function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}