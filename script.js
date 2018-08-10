// console.log('Add validation!');
 
document.getElementById('parking-form').addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault()
  
    var submittedFields = document.querySelectorAll('input');
    var submittedCVV = document.getElementById('cvv');
    var submittedCarYear = document.getElementById('car-year');
    var submittedParkingDate = document.getElementById('start-date');

    clearError();
    
    //Loop through submittedFields to test for empties.
    for (var fieldTest of submittedFields) {
      // abstracting input of fieldTest to var
      var fieldInput = fieldTest.value.trim();
      // check field input is not empty
      if (fieldInput === '') {
        showEmptyFieldError(fieldTest)
        // var isEmpty = true;
      } else {
        showNonEmptyField(fieldTest)
      }
    }

    validateCVV(submittedCVV);
    validateCarYear(submittedCarYear);
    validateParkingDate(submittedParkingDate);

}

function clearError () {
  var clearFields = document.querySelectorAll('input')

  for (var fieldClear of clearFields) {
    fieldClear.parentElement.classList.remove('input-invalid', 'input-valid');
    // same as: field.parentElement.getElementsByClassName('.error-msg')[0]
    // var errorMsg = field.parentElement.querySelector('.error-msg')
    // if (errorMsg) {
    //   errorMsg.remove()
  }

}

  //Creates a div with a class='error-msg' and text.
function showEmptyFieldError (fieldTest) {
    // var errorDiv = document.createElement('div')
  fieldTest.parentElement.classList.add('input-invalid');
  
    //Adds the div just created into the div with id of input-field.
    // var field = document.getElementById('')
    // field.parentElement.appendChild(errorDiv)
    // field.classList.add('input-invalid')
}

function showNonEmptyField (fieldTest) {
  fieldTest.parentElement.classList.add('input-valid');
}

// CVV must be three.

function validateCVV (submittedCVV) {
    submittedCVV.parentElement.classList.remove('input-valid');
    if (isNaN(submittedCVV.value.trim())) {
    //   -- Change Text to say "Please enter numbers only" --
      submittedCVV.parentElement.classList.add('input-invalid');
  } else if (submittedCVV.value.trim().length != 3) {
    //   -- Change Text to say "Enter three digits" --
      submittedCVV.parentElement.classList.add('input-invalid');
  } else {
    submittedCVV.parentElement.classList.add('input-valid');
  }
}

function validateCarYear (submittedCarYear) {
    submittedCarYear.parentElement.classList.remove('input-valid');
    var valueCarYear = submittedCarYear.value.trim();
    var currentYear = new Date().getFullYear();
    //Check to see if Car Year is an actual digit number
    if (isNaN(valueCarYear)) {
        // -- Change text to say "digits only" --
        submittedCarYear.parentElement.classList.add('input-invalid');
    // Check to see if Car Year is greater than 1900
    } else if (valueCarYear <= 1900){
        submittedCarYear.parentElement.classList.add('input-invalid');
    // Check to see if Car Year is greater than current year
    } else if (valueCarYear > currentYear) {
        submittedCarYear.parentElement.classList.add('input-invalid');
    // Ensure four digit year
    } else if (valueCarYear.length != 4) {
        submittedCarYear.parentElement.classList.add('input-invalid');
    } else {
        submittedCarYear.parentElement.classList.add('input-valid');
    }
}

function validateParkingDate (submittedParkingDate) {
    submittedParkingDate.parentElement.classList.remove('input-valid');
    var currentDate = new Date();
    var valueParkingDate = new Date(submittedParkingDate.value);
    if (valueParkingDate <= currentDate) {
        submittedParkingDate.parentElement.classList.add('input-invalid');
    } else {
        submittedParkingDate.parentElement.classList.add('input-valid');
    }

}