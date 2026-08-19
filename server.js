const http = require('node:http'); // importing HTTP module

const server = http.createServer((req, res) => {

    console.log(`${req.method} ${req.url} ${new Date().toISOString()}`);

    const { method, url } = req;
    if (method === 'GET' && url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hey Carmen!');
        return;
    }

    if (method === 'GET' && url === '/api/joke') {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        const responseBody = JSON.stringify({
            setup: "Why'd the chicken cross the road?",
            punchline: "To get to the other side AHAHAHA IM SO FUNNY 🤣🤣😂😂"
        });

        res.end(responseBody);
        return;
    }

    const { pathname, searchParams } = new URL(req.url, 'http://localhost:8080');

    const randomArr = [1, 2, 3, 4, 5, 6];

    if (method === 'GET' && pathname === '/api/rollDie') {

        let quantity = parseInt(searchParams.get('quantity'));
        if (isNaN(quantity) || quantity < 1) quantity = 1;

        const rolls = [];

        for (let i = 0; i < quantity; i++) {
            rolls.push(Math.floor(Math.random() * 6) + 1);
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ rolls }));
        return;
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));

});

server.listen(8080, () => {
    console.log('Server listening on http://localhost:8080');
});