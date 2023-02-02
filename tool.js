let submitBtn = document.getElementById("submit");
let weight = document.getElementById("weight");

let shipFrom = document.getElementById("ship-from");
let shipTo = document.getElementById("ship-to");

let charges;

//validations
weight.addEventListener("keyup", (res) => {
    const value = res.currentTarget.value;
    if (value === "" || value <= "0") {
        submitBtn.disabled = true;
    } else {
        submitBtn.disabled = false;
    }
})

submitBtn.addEventListener("click", () => {

    //Rapid API Platform : India Pincode API 
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
            document.getElementById("shippingDistance").innerHTML = `Shipping Distance:<br> <span>${response.distance} Km</span>`;
            shippingRates(response.distance, weight.value);
        })
        .catch(err => console.error(err));

    //Test when api not working
    
    /*
    document.getElementById("shippingDistance").innerHTML = `Shipping Distance:<br> <span>121 Km</span>`;
    shippingRates(121, weight.value);
    */


    document.getElementById("parcelWeight").innerHTML = `Weight <br><span>${weight.value} gm</span>`;
    document.getElementById("hr").innerHTML = `<hr>`;
})

function shippingRates(distance, weight) {

    //for Speed Post
    let indianPostCharges = indianPost(distance, weight);

    document.getElementById("speedPost").innerHTML = `
    <img src="/images/indianPost.jpg" alt="Indian post Logo"><br>
    Shipping Cost<br> <span>${indianPostCharges} &#8377; <span>`;

    //For FedEx
    let fedExCharges = fedEx(distance, weight);

    document.getElementById("fedex").innerHTML = `
    <img src="/images/Fedex.png" alt="FedEx Logo"><br>
    Shipping Cost<br> <span>${fedExCharges} &#8377; <span>`;

    //For DTDC
    let dtdcCharges = dtdc(distance, weight);

    document.getElementById("dtdc").innerHTML = `
    <img src="/images/dtdc.png" alt="DTDC Logo"><br>
    Shipping Cost<br> <span>${dtdcCharges}  &#8377; <span>`;


    //For highlighting the affordable and cheapest one
    affordableService(indianPostCharges, fedExCharges, dtdcCharges);
}

function indianPost(distance, weight) {
    charges = 0;
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
    return charges;
}

function fedEx(distance, weight) {
    charges = 0;
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
    return charges;
}



function dtdc(distance, weight) {
    charges = 0;
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
    return charges;
}

function affordableService(indianPostCharges, fedExCharges, dtdcCharges) {

    if (indianPostCharges < fedExCharges && indianPostCharges < dtdcCharges) {
        document.querySelector("#speedPost").style.cssText = "border-radius: 2rem; background: #aaffba;";
    }
    else if (fedExCharges < indianPostCharges && fedExCharges < dtdcCharges) {
        document.querySelector("#fedex").style.cssText = "border-radius: 2rem; background: #aaffba;";
    }
    else {
        document.querySelector("#dtdc").style.cssText = "border-radius: 2rem; background: #aaffba;";
    }
}
