import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Привет из Express и TypeScript!');
});


app.post('/echo', (req: Request, res: Response) => {
    const data = req.body;
    res.json({
        message: 'Received data',
        data: data
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
