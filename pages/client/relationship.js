const axios = require('axios').default;
const moment = require('moment');
var mysql = require('mysql');


async function handleAllFunctions({ firstName, lastName, dob, email, phoneNumber, address }) {
    console.log("parametros:", firstName, lastName, dob, email, phoneNumber, address)
    const isDobValid = await validateDate({ date: dob });
    const isEmailValid = await validateEmail({ email: email });
    const isPhoneNumberValid = await validatePhoneNumber({ phone: phoneNumber });
    const isFirstNameValid = await validateName({ name: firstName });
    const isLastNameValid = await validateLastName({ name: lastName });
    const isAddressValid = await validateAddress({ address: address });

    if (!isDobValid || !isEmailValid || !isPhoneNumberValid || !isFirstNameValid || !isLastNameValid || !isAddressValid) {
        return "TRY AGAIN"
    }
    
   
    const connection = await openConnection({ host: "ebh2y8tqym512wqs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com", user: "q2w01mu95z1r9p9x", password: "b3cthljmoxgfhpyt", database: "zgwqhx5rlwm7kj0u" });
   
    const haha = `SELECT * FROM users WHERE \`firstName\` = '${firstName}' AND \`dob\` = '${dob}'`;

    console.log("QUERY", haha);

    const testing = await executeDBComand({ query: haha, connection });
   
    if (testing.length){
        return "ERRO"
    }
    
    // //const resultado = await executeDBComand({ query: 'SELECT * FROM users', connection })

    // const queryTest = `INSERT INTO users (\`firstName\`, \`lastName\`, \`dob\`, \`email\`, \`phoneNumber\`, \`address\` ) VALUES ('${firstName}', '${lastName}', '${dob}', '${email}', '${phoneNumber}', '${address}')`;

    // console.log("QUERY TEST:", queryTest);

    // const resultado = await executeDBComand({ query: queryTest, connection })


    // connection.end();


    console.log("RESULTAOD:", testing);
}

async function openConnection({ host, user, password, database }) {
    var connection = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database
    });

    connection.connect();
    return connection;
}

async function executeDBComand({ query, connection }) {
    return new Promise((resolve, reject) => {
        connection.query(query, (error, results, fields) => {
            if (error) {
                return reject(error.message);
            }

            return resolve(results)
        })
    })
}



module.exports = {
    handleAllFunctions
}