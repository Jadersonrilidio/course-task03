class ValidateForm {

    /**
     * Class constructor
     * 
     */
    constructor() {
        this.formulario = document.querySelector('#form');
        this.handleEvent();
    }

    /**
     * Acts over page form events
     * 
     */
    handleEvent() {
        this.formulario.addEventListener('submit', event => {
            this.handleSubmit(event);
        });
    }

    /**
     * Handles the form submit event
     * 
     * @param {*} event
     * 
     */
    handleSubmit(event) {
        event.preventDefault();
        const validFields = this.hasEmptyFields();
        (validFields === true) 
            ? this.triggerMessage('Form submitted with success!', 'success-msg') 
            : this.triggerMessage('All fields must be filled', 'error-msg');
    }

    /**
     * Checks whether the required are filled or not
     * 
     * @returns boolean
     * 
     */
    hasEmptyFields() {
        for (let field of this.formulario.querySelectorAll('.validate'))
            if (!field.value)
                return false;
        return true;
    }

    /**
     * Display the status message under triggered events
     * 
     * @param {*} msg 
     * @param {*} className
     *  
     */
    triggerMessage(msg, className) {
        const span = document.querySelector('.status-msg');
        span.classList.add(className);
        span.innerHTML = msg;
    }
}

const valida = new ValidateForm();
