import mysql from 'serverless-mysql';


export default async function handler(req, res) {
    const body = req.body;
    //const isEmailValid = validateEmail({ email: body.email });
    //const isFNameValid = validateFName({ firstName: body.name });
    //const isLNameValid = validateLName({ fullName: body.lastName });
    //const isPWameValid = CheckPassword({ password: body.password });

    // console.log("QUAL EMAIL:", body.email);
    // console.log("QUAL FIRST NAME:", body.name);
    // console.log("QUAL LAST NAME:", body.lastName);
    // console.log("QUAL PASSWORD:", body.password);

    console.log("O QUE TA CHEGANDO AQUI:", body.subject);

    // if (!isEmailValid || !isFNameValid || !isLNameValid || !isPWameValid) {
    //     return res
    //         .status(500)
    //         .json({
    //             msg: `Invalid fields: ${isEmailValid ? '' : 'email'},  ${isFNameValid ? '' : 'first name'}, ${isLNameValid ? '' : 'last name'}, ${isPWameValid ? '' : 'Wrong, try another password ...!'}`
    //         });
    // }

    // const connection =  openConnection({ host: "ebh2y8tqym512wqs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com", user: "q2w01mu95z1r9p9x", password: "b3cthljmoxgfhpyt", database: "zgwqhx5rlwm7kj0u" });
    const connection = await openConnection({ host: "ebh2y8tqym512wqs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com", user: "q2w01mu95z1r9p9x", password: "b3cthljmoxgfhpyt", database: "zgwqhx5rlwm7kj0u" });


    console.log("CONNECTION", connection)
    console.log("FIIIIRST NAME::::", body.subject)


 //   const haha = `SELECT * FROM persons WHERE \`FirstName\` = '${body.name}'`;

//   console.log("QUERY", haha);

    //  const testing =  executeDBComand({ query: haha, connection });
 //   const testing = await excuteQuery({ query: haha, connection: connection });

 //const quizTest = `SELECT q.subject, q.question, a.quiz_id, a.description, a.is_correct FROM quiz q INNER JOIN answers a ON  a.quiz_id = q.id WHERE a.subject = '${req.body.subject}' AND a.level = '${req.body.level}'`
 
 //const quizTest = `SELECT * FROM quiz WHERE subject = '${body.subject}'`;
const quizTest = `SELECT * FROM quiz.'${body.subject}', quiz.question, answers.quiz_id, answers.description, answers.is_correct FROM quiz INNER JOIN answers ON quiz.id = 3 AND answers.quiz_id = 3`;


//const quizTest = `SELECT * WHERE quiz.subject=${body.name}, quiz.question, answers.quiz_id FROM quiz INNER JOIN answers ON quiz.id = answers.quiz_id`;
const quizQuery = await excuteQuery({ query: quizTest, connection: connection });

    // if (testing.length){
    //     return "ERRO"
    // }

    console.log("quizTest:", quizTest);

    console.log("quizQuery:", quizQuery);

   // console.log("RESULTADO:", testing);
    await connection.end();


    res.status(200).json(quizQuery);
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