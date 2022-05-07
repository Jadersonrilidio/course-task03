
class ValidateForm {

    constructor() {
        this.formulario = document.querySelector('#form');
        this.handleEvent();
    }

    handleEvent() {
        this.formulario.addEventListener('submit', event => {
            this.handleSubmit(event);
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const validFields = this.hasEmptyFields();

        if (validFields === true) {
            this.triggerSuccess('Form submitted with success!');
        } else {
            this.triggerError('All fields must be filled');
        }
    }

    hasEmptyFields() {
        let valid = true;

        for (let field of this.formulario.querySelectorAll('.validate'))
            if (!field.value)
                valid = false;

        return valid;
    }

    triggerError(msg) {
        const span = document.querySelector('.status-msg');
        span.classList.add('error-msg');
        span.innerHTML = msg;
    }

    triggerSuccess(msg) {
        const span = document.querySelector('.status-msg');
        span.classList.add('success-msg');
        span.innerHTML = msg;
    }
}

const valida = new ValidateForm();
