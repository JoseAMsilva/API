import app from './app';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log();
  console.log(`Server is running on port ${PORT}`);
  console.log(`Access it at http://localhost:${PORT}`);
  console.log(`API documentation available at http://localhost:${PORT}/api-docs`);
});
