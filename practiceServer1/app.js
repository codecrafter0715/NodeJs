const http = require("http");
const os = require("os");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.end("Hello we are learning nodeJs");
});

port = 8000;

console.log("memoery", os.totalmem());
console.log("platform", os.platform());
console.log("free mem", os.freemem());
console.log(__dirname, "diresctory path");

const dirPath = path.join(__dirname, "myFiles");
const filePath = path.join(dirPath, "example.txt");
const renamedPath = path.join(dirPath, "renamedExample.txt");

// Create Directory
fs.mkdir(dirPath, () => {
  console.log(" Directory created:", dirPath);

  // Step 2: Create and write to example.txt
  fs.writeFile(filePath, "Hello from example.txt\n", () => {
    console.log("File created and written:", filePath);

    // Step 3: Read the file
    fs.readFile(filePath, "utf8", (err, data) => {
      console.log(" File content:\n" + data);

      // Step 4: Append content
      fs.appendFile(filePath, "Appended content!\n", () => {
        console.log("Content appended");

        // Read again to verify
        fs.readFile(filePath, "utf8", (err, updatedData) => {
          console.log(" Updated content:\n" + updatedData);

          // Step 5: Rename the file
          fs.rename(filePath, renamedPath, () => {
            console.log(" File renamed:", renamedPath);

            // Step 6: Delete the renamed file
            fs.unlink(renamedPath, () => {
              console.log("File deleted:", renamedPath);

              // Step 7: Delete the directory
              fs.rmdir(dirPath, () => {
                console.log("Directory deleted:", dirPath);
              });
            });
          });
        });
      });
    });
  });
});

server.listen(port, () => {
  console.log(`server started... http://loacalhost:${port}`);
});
