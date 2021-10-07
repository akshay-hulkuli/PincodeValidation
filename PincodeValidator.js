let pincodeArray = new Array();
pincodeArray.push("400080");
pincodeArray.push("A400080");
pincodeArray.push("400080B");

function pinCodeValidator(pincode){
    let pinCodeRegex = RegExp("^[0-9]{6}$");
    if(pinCodeRegex.test(pincode))
        console.log("   passed");
    else throw '    Pincode is not valid';
}


pincodeArray.forEach(pincode => {
    console.log("pincode : "+ pincode)
    try{
        pinCodeValidator(pincode);
    }
    catch(e){
        console.error(e);
    }
});