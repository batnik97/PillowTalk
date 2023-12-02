
const http = require('http');
const { exec } = require('child_process');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
  exec('./llama.cpp/main -m ./llama.cpp/zephyr-7b-beta.Q5_K_M.gguf -n 256 --repeat_penalty 1.0 --color -r "User:" -f ./llama.cpp/prompts/alpaca.txt', (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      return;
    }
    res.end(stdout);
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
