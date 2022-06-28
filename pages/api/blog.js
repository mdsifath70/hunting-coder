import fs from 'fs';

export default function handler(req, res) {
    const { slug } = req.query;

    fs.readFile(`./blogsData/${slug}.json`, 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({
                error: 'There is no such blog',
            });
        } else {
            const parsedData = JSON.parse(data);
            res.status(200).json(parsedData);
        }
    });
}
