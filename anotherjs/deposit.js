// console.log('deposit file')
function getInputValueById(inputFieldId){
const inputField = document.getElementById(inputFieldId);
const inputFieldValueString = inputField.value;
const inputFieldValue = parseFloat(inputFieldValueString);
inputField.value = '';
return inputFieldValue;
}

function getElementValueById(elementId){
    const textElement = document.getElementById('elementId');
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setTextElementValueById(elementId, newValue){
const textElement = document.getElementById('elementId');
textElement.innerText = newValue;
}

document.getElementById('btn-deposit').addEventListener('click',function(){
    // console.log('deposit btn clicked')
    /*
    1.get the element by id
    2.get the value from the element
    3. convert string value to a number    
    */
    const newDepositAmount = getInputFieldValueById('deposit-field');

/*
get previous
*/
const previousDepositTotal = getTextElementValueById('deposit-total');
// console.log(newDepositAmount)

const newDepositTotal = previousDepositTotal + newDepositAmount;

// deposit total
setTextElementValueById('newDepositTotal')

})