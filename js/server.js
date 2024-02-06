const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle file search
app.post('/searchFile', express.json(), (req, res) => {
    const searchValue = req.body.searchValue;
    const folderPath = req.body.folderPath;

    // Perform the file search
    const filePath = searchFile(folderPath, searchValue);

    // Send the result back to the client
    if (filePath) {
        res.json({ fileFound: true, fileName: path.basename(filePath) });
    } else {
        res.json({ fileFound: false });
    }
});

// Function to search for a file in a folder
function searchFile(folderPath, searchValue) {
    const files = fs.readdirSync(folderPath);

    for (const file of files) {
        const filePath = path.join(folderPath, file);

        // Check if the file contains the search value
        if (fs.statSync(filePath).isFile() && fs.readFileSync(filePath, 'utf-8').includes(searchValue)) {
            return filePath;
        }
    }

    return null;
}

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
