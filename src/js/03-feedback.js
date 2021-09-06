import throttle from 'lodash.throttle';

const inputFormStorage = "feedback-form-state";

const feedbackForm = document.querySelector('.feedback-form');

let feedbackValue = {};

feedbackForm.addEventListener('input', throttle(formInput, 500));


function formInput(event){
    feedbackValue[event.target.name] = event.target.value;
    localStorage.setItem(inputFormStorage, JSON.stringify(feedbackValue));
}

if (localStorage.hasOwnProperty(inputFormStorage)) {
    feedbackValue = JSON.parse(localStorage.getItem(inputFormStorage));

  for (let i in feedbackValue) {
    feedbackForm[i].value = feedbackValue[i];
  }
}


feedbackForm.addEventListener('submit', formSubmit);
function formSubmit(event) {
    event.preventDefault();
    if (feedbackForm.email.value === "" || feedbackForm.message.value === "") {  
   alert('incorrect input, please, fill inn all inputs before submit');
     }
      localStorage.removeItem(inputFormStorage);
      feedbackForm.reset();
      console.log(feedbackValue);
    }

   
   