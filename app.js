let fetchPayments = (paymentBody) => {
    fetch("https://api-apix.sensedia.com/payment/v1/payments", {
    method: 'POST',
    headers: {
        'Content-type':'application/json',
        'Accept':'application/json'
    },
    mode: 'cors',
    body: JSON.stringify(paymentBody)
    })
    .then(function(response) {
    console.log(response);
    return response;
    })
    .then(function(data) {
    console.log(data);
    })
    .catch(function(err) {
    console.log(err);
    });

}

let fetchValidateBin = (binNumber) => {
 return    fetch("https://hml-api.elo.com.br/graphql", {
    method: 'POST',
    headers: {
        'Content-type':'application/json',
        'Accept':'application/json', 
        "client_id":"8049be2c-d5f3-3478-985a-fd38cd7eed13"
    },
    body: JSON.stringify({"query":`query { bin (number:\"${binNumber}\"){ brand { name, image{url, width, height, mimeType}, url} } }`})
    })
    .then(res => res.json().then(resp => resp)).catch(function(err) {
    console.log(err);
    });

}