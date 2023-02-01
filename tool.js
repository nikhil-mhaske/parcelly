let submitBtn = document.getElementById("submit");
let weight = document.getElementById("weight");

let shipFrom = document.getElementById("ship-from");
let shipTo = document.getElementById("ship-to");


submitBtn.addEventListener("click", () => {

    /*
    const encodedParams = new URLSearchParams();
    encodedParams.append("pincode1", shipFrom.value);
    encodedParams.append("pincode2", shipTo.value);
    encodedParams.append("unit", "km");

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'e668b7239amshaa40005da38b6ccp199c42jsn0da4ee38f82b',
            'X-RapidAPI-Host': 'india-pincode-with-latitude-and-longitude.p.rapidapi.com'
        },
        body: encodedParams
    };
    
    fetch('https://india-pincode-with-latitude-and-longitude.p.rapidapi.com/api/v1/pincode/distance', options)
        .then(response => response.json())
        .then(response => {
            document.getElementById("shippingDistance").innerHTML = `Shipping Distance: ${response.distance} Km`;
            shippingRates(response.distance, weight.value);
        })
        .catch(err => console.error(err));

        */
    shippingRates(121, weight.value);
    document.getElementById("parcelWeight").innerHTML = `Weight: ${weight.value} grams`;
})

function shippingRates(distance, weight) {

    //for Speed Post
    indianPost(distance, weight);
    //For FedEx
    fedEx(distance, weight);
    //For DTDC
    dtdc(distance, weight);
}

function indianPost(distance, weight) {
    let charges;
    if (weight <= 50) {
        if (distance <= 50) {
            charges = 15;
        }
        else if (distance <= 2000) {
            charges = 35;
        }
    }
    else if (weight <= 200) {
        if (distance <= 50) {
            charges = 25;
        }
        else if (distance <= 200) {
            charges = 35;
        }

        else if (distance <= 1000) {
            charges = 40;
        }
        else if (distance <= 2000) {
            charges = 60;
        }
        else {
            charges = 70;
        }
    }
    else if (weight <= 500) {
        if (distance <= 50) {
            charges = 30;
        }
        else if (distance <= 200) {
            charges = 50;
        }

        else if (distance <= 1000) {
            charges = 60;
        }
        else if (distance <= 2000) {
            charges = 80;
        }
        else {
            charges = 90;
        }
    }
    else {
        var addWeight = Math.floor(weight / 500);

        if (distance <= 50) {
            charges = 30 + 10 * addWeight;
        }
        else if (distance <= 200) {
            charges = 50 + 15 * addWeight;
        }
        else if (distance <= 1000) {
            charges = 60 + 30 * addWeight;
        }
        else if (distance <= 2000) {
            charges = 80 + 40 * addWeight;
        }
        else {
            charges = 90 + 50 * addWeight;

        }

    }

    document.getElementById("speedPost").innerHTML = `Indian post Charges: Rs. ${charges}`;
}

function fedEx(distance, weight) {
    let charges;
    if (weight <= 50) {
        if (distance <= 50) {
            charges = 32;
        }
        else if (distance <= 2000) {
            charges = 60;
        }
    }
    else if (weight <= 200) {
        if (distance <= 50) {
            charges = 57;
        }
        else if (distance <= 200) {
            charges = 66;
        }

        else if (distance <= 1000) {
            charges = 66;
        }
        else if (distance <= 2000) {
            charges = 75;
        }
        else {
            charges = 80;
        }
    }
    else if (weight <= 500) {
        if (distance <= 50) {
            charges = 65;
        }
        else if (distance <= 200) {
            charges = 70;
        }

        else if (distance <= 1000) {
            charges = 75;
        }
        else if (distance <= 2000) {
            charges = 90;
        }
        else {
            charges = 100;
        }
    }
    else {
        var addWeight = Math.floor(weight / 500);

        if (distance <= 50) {
            charges = 65 + 15 * addWeight;
        }
        else if (distance <= 200) {
            charges = 70 + 25 * addWeight;
        }
        else if (distance <= 1000) {
            charges = 75 + 35 * addWeight;
        }
        else if (distance <= 2000) {
            charges = 90 + 45 * addWeight;
        }
        else {
            charges = 100 + 55 * addWeight;

        }

    }
    document.getElementById("fedex").innerHTML = `FedEx Charges: Rs. ${charges}`;
}



function dtdc(distance, weight) {
    let charges;
    if (weight <= 50) {
        if (distance <= 50) {
            charges = 50;
        }
        else if (distance <= 2000) {
            charges = 90;
        }
    }
    else if (weight <= 200) {
        if (distance <= 50) {
            charges = 75;
        }
        else if (distance <= 200) {
            charges = 80;
        }

        else if (distance <= 1000) {
            charges = 85;
        }
        else if (distance <= 2000) {
            charges = 90;
        }
        else {
            charges = 110;
        }
    }
    else if (weight <= 500) {
        if (distance <= 50) {
            charges = 80;
        }
        else if (distance <= 200) {
            charges = 90;
        }

        else if (distance <= 1000) {
            charges = 100;
        }
        else if (distance <= 2000) {
            charges = 120;
        }
        else {
            charges = 130;
        }
    }
    else {
        var addWeight = Math.floor(weight / 500);

        if (distance <= 50) {
            charges = 80 + 15 * addWeight;
        }
        else if (distance <= 200) {
            charges = 90 + 25 * addWeight;
        }
        else if (distance <= 1000) {
            charges = 100 + 35 * addWeight;
        }
        else if (distance <= 2000) {
            charges = 120 + 45 * addWeight;
        }
        else {
            charges = 130 + 55 * addWeight;

        }

    }
    document.getElementById("dtdc").innerHTML = `DTDC Charges: Rs. ${charges}`;
}

