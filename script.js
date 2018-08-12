// console.log('Add validation!');
 
document.getElementById('parking-form').addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault()
  
    var submittedFields = document.querySelectorAll('input');
    var submittedCVV = document.getElementById('cvv');
    var submittedCarYear = document.getElementById('car-year');
    var submittedParkingDate = document.getElementById('start-date');
    var submittedNumDays = document.getElementById('days');

    validateCarYear(submittedCarYear);

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
    validateParkingDate(submittedParkingDate);
    validateNumDays(submittedNumDays);

}

function clearError () {
  var clearFields = document.querySelectorAll('input')

  for (var fieldClear of clearFields) {
    fieldClear.closest('.input-field').classList.remove('input-invalid');
    fieldClear.closest('.input-field').classList.remove('input-valid');

    // same as: field.closest('.input-field').getElementsByClassName('.error-msg')[0]
    // var errorMsg = field.closest('.input-field').querySelector('.error-msg')
    // if (errorMsg) {
    //   errorMsg.remove()
  }

}

  //Creates a div with a class='error-msg' and text.
function showEmptyFieldError (fieldTest) {
  fieldTest.closest('.input-field').classList.remove('input-valid')
  fieldTest.closest('.input-field').classList.add('input-invalid');

  var errorMsg = fieldTest.closest('.input-field').querySelector('.isRequired');
  if (errorMsg) {
    errorMsg.remove()
  }

  var errorDiv = document.createElement('div');
  errorDiv.classList.add('isRequired');
  errorDiv.innerText = 'is required';
  fieldTest.closest('.input-field').querySelector('label').insertAdjacentElement('beforeend', errorDiv);  

}

function showNonEmptyField (fieldTest) {
    fieldTest.closest('.input-field').classList.remove('input-valid')
    fieldTest.closest('.input-field').classList.add('input-valid');
}

// CVV must be three.

function validateCVV (submittedCVV) {
    submittedCVV.closest('.input-field').classList.remove('input-valid');
    if (isNaN(submittedCVV.value.trim())) {
    //   -- Change Text to say "Please enter numbers only" --
      submittedCVV.closest('.input-field').classList.add('input-invalid');
  } else if (submittedCVV.value.trim().length != 3) {
    //   -- Change Text to say "Enter three digits" --
      submittedCVV.closest('.input-field').classList.add('input-invalid');
  } else {
    submittedCVV.closest('.input-field').classList.add('input-valid');
  }
}

function validateCarYear (submittedCarYear) {
    submittedCarYear.closest('.input-field').classList.remove('input-valid');
    var valueCarYear = submittedCarYear.value.trim();
    var currentYear = new Date().getFullYear();
    //Check to see if Car Year is an actual digit number
    if (isNaN(valueCarYear)) {
        // -- Change text to say "digits only" --
        submittedCarYear.closest('.input-field').classList.add('input-invalid');
    // Check to see if Car Year is greater than 1900
    } else if (valueCarYear <= 1900){
        submittedCarYear.closest('.input-field').classList.add('input-invalid');
    // Check to see if Car Year is greater than current year
    } else if (valueCarYear > currentYear) {
        submittedCarYear.closest('.input-field').classList.add('input-invalid');
    // Ensure four digit year
    } else if (valueCarYear.length != 4) {
        submittedCarYear.closest('.input-field').classList.add('input-invalid');
    } else {
        submittedCarYear.closest('.input-field').classList.add('input-valid');
    }
}

function validateParkingDate (submittedParkingDate) {
    submittedParkingDate.closest('.input-field').classList.remove('input-valid');
    var valueParkingDate = new Date(submittedParkingDate.value);
    var currentDate = new Date();
    if (valueParkingDate <= currentDate || isNaN(valueParkingDate)) {
        submittedParkingDate.closest('.input-field').classList.add('input-invalid');
    } else {
        submittedParkingDate.closest('.input-field').classList.add('input-valid');
    }

}

function validateNumDays (submittedNumDays) {
    submittedNumDays.closest('.input-field').classList.remove('input-valid');
    var valueNumDays = submittedNumDays.value.trim();
    
    if (isNaN(valueNumDays)) {
        submittedNumDays.closest('.input-field').classList.add('input-invalid');
    } else if (valueNumDays < 1 || valueNumDays > 30) {
        submittedNumDays.closest('.input-field').classList.add('input-invalid');
    } else if (valueNumDays.isInteger = false) {
        submittedNumDays.closest('.input-field').classList.add('input-invalid');
    } else {
        submittedNumDays.closest('.input-field').classList.add('input-valid');
    }

}