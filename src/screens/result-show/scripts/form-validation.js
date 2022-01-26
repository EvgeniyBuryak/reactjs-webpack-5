let reName = new RegExp("^([A-Z]{1})([a-z]+)([-\\s]{1})(([A-Za-z]{1})([a-z]+))$|^([A-Z]{1})([a-z]+)$");
let reEmail = new RegExp("^[A-Za-z0-9]+[A-Za-z0-9-_.]*[A-Za-z0-9]+@[A-Za-z]+\\.([A-Za-z]{2,4})+$");

const SAVING_PROMPTS_USER = new Map();

// Collection regular expression
const MAP_REGEXP_FOR_INPUTS = new Map([
    ['name', reName],    
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

    if (SAVING_PROMPTS_USER.has(KEY)) return;

    // get strings from an array by type
    const STRING = COLL_MESSAGE_ABOUT_ERROR[MESSAGE];
    
    const NODE = document.createElement('div');    
    
    NODE.classList.add('alert');    
    
    NODE.innerHTML = STRING;

    SAVING_PROMPTS_USER.set(KEY, NODE);

    input.style.outlineColor = '#d54c4c';
    input.after(NODE);
}

// Clean a hint
const removePromptForUser = (input, KEY) => {

    if (SAVING_PROMPTS_USER.has(KEY)) {

        const NODE = SAVING_PROMPTS_USER.get(KEY);
        
        NODE.remove();

        SAVING_PROMPTS_USER.delete(KEY);
    }

    input.style.outlineColor = '#56bf58';
}

// Validation
const myValidate = () => {
    
    const ARR_INPUT = document.querySelectorAll('input');

    let isValidate = false;

    for (let input of ARR_INPUT) {

        let type = input.getAttribute('type');
        const KEY = input.dataset.callRegType;
        const RE = MAP_REGEXP_FOR_INPUTS.get(KEY);
        
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
    return isValidate;
}

export { myValidate };