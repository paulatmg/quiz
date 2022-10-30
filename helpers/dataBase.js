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
    const connection = await openConnection({ host: process.env.DB_HOST, user: process.env.DB_USER, password: process.env.DB_PASSWORD, database: process.env.DB_DATABASE });
    const responses = await excuteQuery({ query, connection });
    await connection.quit();
    return responses;

}




module.exports = { fetchDBDetails };