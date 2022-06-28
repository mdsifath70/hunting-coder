import fs from 'fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const dataDir = await fs.promises.readdir('./contactData');

            await fs.promises.writeFile(
                `./contactData/${++dataDir.length}.json`,
                JSON.stringify(req.body)
            );

            res.status(200).json({
                message: 'Thanks for contacting us.',
            });
        } catch (err) {
            res.status(500).json({
                error: err,
            });
        }
    } else {
        res.status(200).send(['Hello']);
    }
}
