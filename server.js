const express = require('express');
 const app = express();
 const PORT = 3000;

    // Serve client page
    app.get('/', (req, res) => {
                                res.sendFile(__dirname + '/mtable.html');
                               });

     app.listen(PORT, '0.0.0.0', () => {
                                          console.log(`Server running at ${PORT}`);
                                        });
