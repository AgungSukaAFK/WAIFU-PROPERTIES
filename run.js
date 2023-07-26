const { exec } = require('child_process');

const command = `npx tailwindcss -i ./src/input.css -o ./dist/style.css --watch`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`Output:\n${stdout}`);
  console.error(`Errors:\n${stderr}`);
});
