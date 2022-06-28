import fs from 'fs';

export default async function handler(req, res) {
    try {
        const dirFiles = await fs.promises.readdir(`./blogsData`);

        let blogs = [];
        dirFiles.forEach((blogFile) => {
            const data = fs.readFileSync(`./blogsData/${blogFile}`, 'utf-8');
            blogs.push(JSON.parse(data));
        });

        // response
        res.status(200).json({ blogs });
    } catch (err) {
        res.status(500).json({
            error: 'There is no such blog',
            err,
        });
    }
}
