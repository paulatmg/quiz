import mysql from 'serverless-mysql';

async function openConnection({ host, user, password, database }) {
    const db = await mysql({
        config: {
            host: host,
            database: database,
            user: user,
            password: password
        }
    })

 //   db.connect();
    return db;
};

async function excuteQuery({ query, connection }) {
    try {
        return await connection.query(query);
    } catch (error) {
        return { error };
    }
};

async function fetchDBDetails(query) {
    const connection = await openConnection({ host: "ebh2y8tqym512wqs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com", user: "q2w01mu95z1r9p9x", password: "b3cthljmoxgfhpyt", database: "zgwqhx5rlwm7kj0u" });
    const responses = await excuteQuery({ query, connection });
    await connection.quit();
    return responses;

}




module.exports = { fetchDBDetails };