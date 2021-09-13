export function createControl(config, validation) {
    const control = {
        ...config,
        validation: { ...validation },
        valid: !validation,
        shouldValidate: !!validation,
        touched: false,
        value: '',
    };
    return control;
};

export function validate(value, validation = null) {
    if (!validation) {
        return true;
    };

    let isValid = true;
    if (validation.required) {
        isValid = value.trim() !== '' && isValid;
    };

    return isValid;
};

export function formValidate(formControlls) {
    let isFormValid = true;

    for (let control in formControlls) {
        if (formControlls.hasOwnProperty(control)) {
            isFormValid = formControlls[control].valid && isFormValid;
        };
    };

    return isFormValid;
};
