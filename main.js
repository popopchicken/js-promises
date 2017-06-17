function get(url) {
    return new Promise(function(resolve, reject){
        var req = new XMLHttpRequest(); 
        req.open('GET', url);

        req.onload = function()  {
            //Called even on 404
            if (req.status == 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        }

        req.onerror = function() {
            reject(Error('Network Error'));
        }

        Make request
        req.send(); 
    })
}