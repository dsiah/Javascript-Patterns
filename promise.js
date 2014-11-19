var promise = new Promise(function (resolve, reject) {
// Async stuff, create a XHR object, open it and declare method and url
    var request = new XMLHttpRequest();
    
// Let's use Spotify's public routes as a quick and painless example
// We will search for Radiohead and specify the query to return artists only
    request.open(
        "GET",
        "https://api.spotify.com/v1/search?q=radiohead&type=artist"
    );
    
/*
    Requests can have 4 stages: stage 4 is the completed request stage
    
    We can listen for that event and then if the response is not 
    null we have can pass that down the promise "chain"
*/
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.responseText) {
            console.log("Success");
            // pass the responseText data to the next 
            resolve(request.responseText);
        } else if (request.readyState === 4) {
            console.log("Failure");
            // reject -- bubble up error
            reject(Error(request.responseText));
        }
    }
    
    request.send();
});

promise.then(function(data) {
    // successful 'then' function
    console.log("------------\n" + data);
}, function (error) {
    // failure 'then' function
    console.err(error);
});