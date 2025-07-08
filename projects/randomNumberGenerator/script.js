const numberDisplay = document.getElementById("number-display")
const generateButton = document.getElementById("generate-button")
const alertMessage = document.getElementById("alert-message")
const minNumberInput = document.getElementById("min-number")
const maxNumberInput = document.getElementById("max-number")

function displayErrorMessage(message) {
    alertMessage.innerText = message
    minNumberInput.value = 0
    maxNumberInput.value = 10
    setTimeout(() => {
        alertMessage.innerText = "";  
    }, 4000);
}

function validateInputs() {
    const minNumb = Number(minNumberInput.value.trim())
    const maxNumb = Number(maxNumberInput.value.trim())

    if (!isNaN(minNumb) && 
        !isNaN(maxNumb) && 
        maxNumb !== "" && 
        minNumb !== "") {

        if (minNumb < maxNumb) {

            if (maxNumb <= 9007199254740991) {

                if (minNumb >= 0) {

                    if (/^\d+$/.test(minNumberInput.value.trim()) && /^\d+$/.test(maxNumberInput.value.trim())) {
    
                        return true
                    }
                    displayErrorMessage("The Input should not contain special characters or spaces!")
                    return false
                }
                displayErrorMessage("The numbers can't be negative!")
                return false
            }
            displayErrorMessage("The numbers can't be greater than 9,007,199,254,740,991!")
            return false
        }
        displayErrorMessage("Second number should be greater than First Number!")
        return false
    }
    displayErrorMessage("Input the numbers first!")
    return false
}

function getRandomNumber() {
    return Math.floor(Math.random() * (Number(maxNumberInput.value.trim()) - Number(minNumberInput.value.trim()) + 1)) + Number(minNumberInput.value.trim());
  }

function displayNumber(number) {
    numberDisplay.innerText = number
}

generateButton.addEventListener("click", () => {
    if (validateInputs()) {
        displayNumber(getRandomNumber())
    }
})

minNumberInput.addEventListener("focus", () => {
    minNumberInput.value = ""
})
maxNumberInput.addEventListener("focus", () => {
    maxNumberInput.value = ""
})