// console.log('Add validation!');
 
document.getElementById('parking-form').addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault()
  
    var submittedFields = document.querySelectorAll('input');
    var submittedCVV = document.getElementById('cvv');

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