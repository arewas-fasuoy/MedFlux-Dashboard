const { exec } = require('child_process');

function writeTo(conn, content){

  const arg1 = conn;
  const arg2 = content;
  
  // Execute Python script with arguments
  exec(`python path/to/script.py ${arg1} ${arg2}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Python script: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Python script encountered an error: ${stderr}`);
      return;
    }
    // Process the output from the Python script
    console.log(`Python script output: ${stdout}`);
  });
  
}