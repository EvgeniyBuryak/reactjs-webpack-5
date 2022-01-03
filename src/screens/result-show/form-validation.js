// let reName = new RegExp("^([А-ЯЁ]{1})([а-яё]+)([-\\s]{1})(([А-ЯЁа-яё]{1})([а-яё]+))$|^([А-ЯЁ]{1})([а-яё]+)$");
let reName = new RegExp("^([A-Z]{1})([a-z]+)([-\\s]{1})(([A-Za-z]{1})([a-z]+))$|^([A-Z]{1})([a-z]+)$");
let reUsername = new RegExp("(?=.*[\\w\\W])(?=.*[\\d])");
let reEmail = new RegExp("^[A-Za-z0-9]+[A-Za-z0-9-_.]*[A-Za-z0-9]+@[A-Za-z]+\\.([A-Za-z]{2,4})+$");
// let rePassword = new RegExp("(?=.*[A-Z])(?=.*[a-z])(?=.*[\\d])(?=.*[\\W])[\\w\\W]{8,}"); // positive look forward regex
// let reDate = new RegExp("[0-9]{4}-[0-9]{2}-[0-9]{2}");

const SAVING_PROMPTS_USER = new Map();

// Collection regular expression
const MAP_REGEXP_FOR_INPUTS = new Map([
    ['name', reName],
    ['username', reUsername],
    ['email', reEmail],
    ['company', reName],
    ['country', reName],
    ['state', reName],
    ['city', reName],
    ['address', reName],
]);

// Collection of message that appear when an error occurs
const COLL_MESSAGE_ABOUT_ERROR = {
    'letters': "Only letters",
    'letters-numbers': "Only letters and numbers",
    'email': "Email is not valid",
};

// Checking the collection for truth
const MAP_INPUTS_IS_VALIDATE = new Map([
    ['letters', false],
    ['letters-numbers', false],
    ['email', false],
]);

const checkValueOnRegExp = (value, re) => {
    
    const GOOD = re.exec(value);
    
    if(!GOOD) {        
        return false;
    }        
    else {
        return true;
    }
}

// Create hint if user types text incorretly
const createPromptForUser = (input, KEY) => {

    const MESSAGE = input.dataset.showErrorMessage;
    // const KEY = input.type;

    if (SAVING_PROMPTS_USER.has(KEY)) return;// alert('already exists');

    // get strings from an array by type
    const STRING = COLL_MESSAGE_ABOUT_ERROR[MESSAGE];
    
    const NODE = document.createElement('div');
    // const NODE = document.createTextNode(STRING);
    // const NODE = {(<label></label>)};
    
    NODE.classList.add('alert');    
    
    NODE.innerHTML = STRING;

    SAVING_PROMPTS_USER.set(KEY, NODE);

    input.style.outlineColor = '#d54c4c';
    input.after(NODE);
}

// Clean a hint
const removePromptForUser = (input, KEY) => {

    // const KEY = input.dataset.showErrorMessage;  
    // const KEY = input.type;  

    if (SAVING_PROMPTS_USER.has(KEY)) {

        const node = SAVING_PROMPTS_USER.get(KEY);
        
        node.remove();

        SAVING_PROMPTS_USER.delete(KEY);
    }

    input.style.outlineColor = '#56bf58';
}

// const changePromtForUser = (input, message, KEY) => {

//     // let KEY = input.dataset.showErrorMessage;
//     // const KEY = input.type;

//     if (SAVING_PROMPTS_USER.has(KEY)) {
//         const div = SAVING_PROMPTS_USER.get(KEY);
//         div.innerHTML = message;

//         return;
//     }    
    
//     // const div = document.createElement('div');
//     const div = document.createTextNode(message);
    
//     div.classList.add('alert');
//     // div.innerHTML = message;

//     SAVING_PROMPTS_USER.set(KEY, div);
    
//     input.style.outlineColor = '#d54c4c';
//     input.after(div);
// }

// Validation
const myValidate = () => {
    
    const ARR_INPUT = document.querySelectorAll('input');

    let isValidate = false;

    for (let input of ARR_INPUT) {

        let type = input.getAttribute('type');
        const KEY = input.dataset.callRegType;
        const KEY_ERROR = input.dataset.showErrorMessage;
        // const KEY = input.type;
        const RE = MAP_REGEXP_FOR_INPUTS.get(KEY);
        // const RE = MAP_REGEXP_FOR_INPUTS.get(type);
        const LENGTH = input.value.length;
        
        switch(type) {

            case "text":
            case "email":
                isValidate = checkValueOnRegExp(input.value, RE);

                // Output a hint for the user
                if (!isValidate) createPromptForUser(input, KEY);
                else removePromptForUser(input ,KEY);

                break;
            default:
                break;
                
        }

        // Remember which input was passed validation successfuly
        MAP_INPUTS_IS_VALIDATE.set(KEY, isValidate);
    }
    
    // Checking for the validity of all inputs
    for (let value of MAP_INPUTS_IS_VALIDATE.values()) {
        isValidate = (value === false) ? false : isValidate;
    }
    
    if (isValidate) alert('Validation seccessfuly!');
    return false;//isValidate;
}

export { myValidate };