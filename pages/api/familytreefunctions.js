export default function handler(req, res) {
    const body = req.body;
    const isEmailValid = validateCountry({ country: body.country });
    const isFNameValid = validateFName({ firstName: body.name });
    const isLNameValid = validateLName({ fullName: body.lastName });
    const isPWameValid = validateRegion({ region: body.region });

    if (!isEmailValid || !isFNameValid || !isLNameValid) {
        return res
        .status(500)
        .json({ msg: `Invalid fields: ${isEmailValid ? '' : 'email'},  ${isFNameValid ? '' : 'first name'}, ${isLNameValid ? '' : 'last name'}`});
    }

    console.log("FAMILY TREE - EMAIL:", body.country);
    console.log("FAMILY TREE - FIRST NAME:", body.name);
    console.log("FAMILY TREE - LAST NAME:", body.lastName);
    console.log("FAMILY TREE -  REGION:", body.region);

    //const result = res.json();
    //return (`Is this your full name: ${result.name}, your last name: ${result.lastName}, your email: ${result.email} and you are from ${result.country}`);
    
    return res
    .status(200)
    .json({ name: `${body.name}`, lastName: `${body.lastName}`, country: `${body.country}`, region: `${body.region}` });
}

 function validateFName({ firstName }) {
    if (/^[A-Za-z\s]+$/.test(firstName))
        return true;
    else
        return false;
}

 function validateLName({ lastName }) {
    if (/^[A-Za-z\s]+$/.test(lastName))
        return true;
    else
        return false;
}

function validateCountry({ country }) {
    if (/^[A-Za-z\s]+$/.test(country))
        return true;
    else
        return false;
}

function validateRegion({ region }) {
    if (/^[A-Za-z\s]+$/.test(region))
        return true;
    else
        return false;
}


