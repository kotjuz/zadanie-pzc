const http = require('http');

const port = process.env.PORT || 3000;

const requestHandler = (req, res) => {
    const now = new Date();
    const timeString = now.toLocaleString('pl-PL');
    
    const htmlContent = `<html>
<head>
<title>Rozwiązanie zadania PZC 2.1</title>
</head>
<body>
${timeString}
</body>
</html>`;

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(htmlContent);
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('Błąd:', err);
    }
    console.log(`Serwer działa na porcie ${port}`);
});
