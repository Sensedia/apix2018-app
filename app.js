let fetchPayments = paymentBody => {
    fetch("https://api-apix.sensedia.com/payment/v1/payments", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(paymentBody)
    })
        .then(function (response) {
            return response;
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (err) {
            console.log(err);
        });

}

let fetchValidateBin = (binNumber) => {
    return fetch("<informar a url do desenvolvedores da Elo>", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            "client_id": "<informe a client_id do Portal de desenvolvedores da Elo>"
        },
        body: JSON.stringify({ "query": `query { bin (number:\"${binNumber}\"){ brand { name, image{url, width, height, mimeType}, url} } }` })
    })
        .then(res => res.json().then(resp => resp))
        .catch(function (err) {
            console.log(err);
        });

}