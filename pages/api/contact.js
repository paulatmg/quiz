import mysql from 'serverless-mysql';


export default async function handler(req, res) {
    const body = req.body;

    console.log("O QUE TA CHEGANDO AQUI:", body.subject);

    const connection = await openConnection({ host: "ebh2y8tqym512wqs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com", user: "q2w01mu95z1r9p9x", password: "b3cthljmoxgfhpyt", database: "zgwqhx5rlwm7kj0u" });

    console.log("CONNECTION", connection)
    console.log("FIIIIRST NAME::::", body.subject)

    const quizTest = `SELECT q.id, q.subject, q.question, a.description, a.is_correct FROM quiz q JOIN answers a ON a.quiz_id = q.id WHERE q.subject = '${body.subject}'`;

    const quizQuery = await excuteQuery({ query: quizTest, connection: connection });

    console.log("quizTest:", quizTest);

    console.log("quizQuery:", quizQuery);

    await connection.end();


    return res.status(200).json(quizQuery);
    // res.status(200).json(testing);


    //AQUIIIIIII inserir no banco de dados!!!


    //const result = res.json();
    //return (`Is this your full name: ${result.name}, your last name: ${result.lastName}, your email: ${result.email} and you are from ${result.country}`);

    //return res.status(200).json({ name: `${body.name}`, lastName: `${body.lastName}`, email: `${body.email}`, password: `${body.password}`});

    // return <Link href="/familytree"> It is everything ok, go to the next step! </Link>;
}

function validateEmail({ email }) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)) {
        return true;

    } else {
        return false;
    }
}

function validateFName({ firstName }) {
    if (/^[A-Za-z\s]+$/.test(firstName))
        return true;
    else
        return false;
}

function validateLName({ lastName }) {
    if (/^[A-Za-z\s]+$/.test(lastName))
        return true;
    else
        return false;
}


function CheckPassword({ password }) {
    var passw = /^[A-Za-z]\w{7,14}$/;
    if (password.match(passw)) {
        return true;
    }
    else {
        //alert('Wrong, try another password ...!')
        return false;
    }
}


//  function openConnection({ host, user, password, database }) {
//     var connection = mysql.createConnection({
//         host: host,
//         user: user,
//         password: password,
//         database: database
//     });

//     connection.connect();
//     return connection;
// }

//  function executeDBComand({ query, connection }) {
//     return new Promise((resolve, reject) => {
//         connection.query(query, (error, results, fields) => {
//             if (error) {
//                 return reject(error.message);
//             }

//             return resolve(results)
//         })
//     })
// }


// export default async (req, res) => {
//     try {
//         console.log("req nom", req.body)
//       const result = await excuteQuery({
//           query: 'INSERT INTO post(content) VALUES(?)',
//           values: [req.body.content],
//       });
//       console.log( "ttt",result );
//   } catch ( error ) {
//       console.log( error );
//   }


//   };



async function openConnection({ host, user, password, database }) {
    const db = await mysql({
        config: {
            host: host,
            database: database,
            user: user,
            password: password
        }
    })

    db.connect();
    return db;
};

async function excuteQuery({ query, connection }) {
    try {
        return await connection.query(query);
    } catch (error) {
        return { error };
    }
};


// SELECT quiz.subject, quiz.question, answers.quiz_id
// FROM quiz
// INNER JOIN answers ON quiz.id=answers.quiz_id;