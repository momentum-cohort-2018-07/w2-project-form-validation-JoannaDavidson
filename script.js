// console.log('Add validation!');
 
document.getElementById('parking-form').addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault()
  
    clearError()
  
    var submittedFields = document.querySelectorAll('input');

    // var isEmpty = false;

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