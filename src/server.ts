import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

const UPLOADS_DIR = path.join(__dirname, '..', 'uploads');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Serve SCORM static files
app.use('/uploads', express.static(UPLOADS_DIR));
app.use('/public', express.static(PUBLIC_DIR));

// Route to serve SCORM course player
app.get('/courses/:courseId', (req: Request, res: Response) => {
  const { courseId } = req.params;
  const entryFile = `/uploads/${courseId}/index_lms.html`; // You can also parse imsmanifest.xml to determine this
  const html = `
    <!DOCTYPE html>
    <html>
      <head><title>SCORM Player</title></head>
      <body>
        <iframe src="${entryFile}" width="100%" height="700px" frameborder="0"></iframe>
        <script src="/public/api.js"></script>
      </body>
    </html>
  `;
  res.send(html);
});

app.get('/', (req: Request, res: Response) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head><title>SCORM Player</title></head>
      <body>
        <h2>The Knowledge and Creative Hub</h2>
        <ol>
          <li><a href="/courses/course1">Course 1</a></li>
          <li><a href="/courses/course2">Course 2</a></li>
          <li><a href="/courses/course3">Course 3</a></li>
        </ol>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`SCORM LMS running at http://localhost:${PORT}`);
});
