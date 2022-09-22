export default function handler(req, res) {
    const { slug } = req.query
    return res
        .status(200)
        .json([
            { profileId: slug[0], firstName: "PAULA" },
            { profileId: slug[0], firstName: "ROSANA" }
        ]);

}