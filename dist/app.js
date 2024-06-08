// Get references to the input fields and other DOM elements
const billAmtInput = document.getElementById("bill-amt");
const tipAmtInput = document.getElementById("tip-amt");
const numberOfPeopleInput = document.getElementById("number-of-people");
const tipCalc = document.getElementById("calc-tip");
const totalTipCalc = document.getElementById("calc-total-tip");
const totalAmtCalc = document.getElementById("calc-total-amt");

// Function to calculate the tip
const calculateTip = () => {
    // Get the current values of the input fields
    const billAmt = parseFloat(billAmtInput.value);
    const tipAmt = parseFloat(tipAmtInput.value);
    const numberOfPeople = parseInt(numberOfPeopleInput.value);

    // Validate the input values
    if (isNaN(billAmt) || isNaN(tipAmt) || isNaN(numberOfPeople) || billAmt <= 0 || tipAmt <= 0 || numberOfPeople <= 0) {
        tipCalc.value = "";
        totalTipCalc.value = "";
        totalAmtCalc.value = "";
        return;
    }

    // Calculate the total tip
    const totalTip = billAmt * (tipAmt / 100);
    // Calculate the tip per person
    const tipPerPerson = totalTip / numberOfPeople;
    // Calculate the total amount per person
    const totalAmtPerPerson = billAmt + totalTip;

    // Display the results
    tipCalc.value = `$${tipPerPerson.toFixed(2)}`;
    totalTipCalc.value = `$${totalTip.toFixed(2)}`;
    totalAmtCalc.value = `$${totalAmtPerPerson.toFixed(2)}`;
};

// Add event listeners to the input fields
[billAmtInput, tipAmtInput, numberOfPeopleInput].forEach(input => {
    input.addEventListener("input", calculateTip);
});
