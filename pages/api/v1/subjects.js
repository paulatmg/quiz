import { fetchDBDetails } from '../../../helpers/dataBase';

export default async function handler(req, res) {

    const query = `SELECT subject FROM quiz GROUP BY subject`;

    //console.log("QUERY SUBJECTS", query)

    const responses = await fetchDBDetails(query);

    //console.log("RESPONSES SUBJECTS", responses);
    
    res.status(200).json(responses);
}

