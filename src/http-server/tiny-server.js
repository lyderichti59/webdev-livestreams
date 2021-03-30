const http = require("http");

const host = 'localhost';
const port = 8000;

function randomBetween(mini,maxi){
    return mini + Math.floor((maxi+1-mini)*Math.random())
}

function randomSet(mini, maxi, n)
{
   if(maxi<mini)
     throw new Error(`The argument 'maxi' can't be less than the argument 'mini'`); 
   if(n > (maxi-mini+1))
     throw new Error(`Can't generate ${n} distinct number${n>1?"s":""} between ${mini} and ${maxi}.`);
    
   let result = [];
   for(i=0; i<n; i++){
        do { 
            generatedNumber = randomBetween(mini,maxi)
        } while(result.includes(generatedNumber))

        result[i] = generatedNumber;
    }
   return result;
}

const requestListener = function (req, res) {

    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(
`<html>
    <body>
    <h1>Le tirage du jour</h1>
    <p>${randomSet(1,50,5)}</p>
    </body>
</html>`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});