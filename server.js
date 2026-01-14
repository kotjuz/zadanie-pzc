const http = require('http');

const port = process.env.PORT || 3000;

const requestHandler = (req, res) => {
    const now = new Date();
    const plusOneHour = new Date(now.getTime() + 60 * 60 * 1000);

    const timeString = plusOneHour.toLocaleString("pl-PL", {
      timeZone: "Europe/Warsaw",
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
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
