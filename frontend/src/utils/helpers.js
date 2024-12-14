export const validatePassword = (password) => {
    const errors = [];
  
    // Check for at least one lowercase letter
    if (!/(?=.*[a-z])/.test(password)) {
      errors.push("lowercase");
    }
  
    // Check for at least one uppercase letter
    if (!/(?=.*[A-Z])/.test(password)) {
      errors.push("uppercase");
    }
  
    // Check for at least one digit
    if (!/(?=.*\d)/.test(password)) {
      errors.push("number");
    }
  
    // Check for minimum length
    if (!/^.{8,}$/.test(password)) {
      errors.push("long");
    }
  
    return {
      isValid: errors.length === 0,
      errors,
    };
  };

export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export const validateName = (value, type) => {
    const regex = /^[a-zA-Zà-žÀ-Ž\s'-]+$/;
    const errors = []

    const cleanedType = type.charAt(0).toUpperCase() + type.replace("_", " ").slice(1);

    if (!value.trim()) {
        errors.push(`${cleanedType} cannot be empty`);
        return { isValid: false, errors };
    }

    if(value.length > 50 || value.length < 2){
        errors.push(`${cleanedType} must be between 2 and 50 characters long`)
    }

    if(!regex.test(value)){
        errors.push(`${cleanedType} contains invalid characters`)
    }

    return {
        isValid: errors.length === 0,
        errors,
    }
}

//Address validation

export const validateLine = (value, name) => {
    const errors = [];

    if (!value.trim() && name !== "line2") {
       errors.push("This field cannot be empty");
       return {isDataValid: false, errors}
    }

    if (value.length > 100) {
        errors.push("This field cannot exceed 100 characters");
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
};

export const validateCity = (value) => {
    const errors = [];
    const regex = /^[a-zA-Z\s'-]+$/;

    if (!value.trim()) {
       errors.push("City cannot be empty");
       return {isDataValid: false, errors}
    }

    if (!regex.test(value)) {
        errors.push("City contains invalid characters");
    }

    if (value.length > 50) {
        errors.push("City cannot exceed 50 characters");
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
};

export const validatePostcode = (value) => {
    const errors = [];
    //UK format
    const regex = /^[A-Z0-9]{2,4}\s?[A-Z0-9]{2,4}$/i;

    if (!value.trim()) {
       errors.push("Postcode cannot be empty");
       return {isDataValid: false, errors}
    }

    if (!regex.test(value)) {
        errors.push("Invalid postcode format");
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
};

export const validateCounty = (value) => {
    const errors = [];
    const regex = /^[a-zA-Z\s'-]+$/;

    if (!value.trim()) {
        errors.push("County cannot be empty");
        return {isDataValid: false, errors}
    }

    if (!regex.test(value)) {
        errors.push("County contains invalid characters");
    }

    if (value.length > 50) {
        errors.push("County cannot exceed 50 characters");
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
};

//ensure fields are filled and there are no errors before submission
export const isDataValid = (data, errors, optionalFields = []) => {
    //ensure all required fields are filled
    const allFieldsFilled = Object.entries(data).every(([key, value]) => {
        //return true if input is optional
        if (optionalFields.includes(key)) return true;
        //return false if input is not optional and is empty
        return value.trim().length > 0;
    });

    //Ensure no errors
    const noErrors = Object.values(errors).every(errorArray => errorArray.length === 0);

    return allFieldsFilled && noErrors;
};

export const transformDate = (isoDateString) => {
    const date = new Date(isoDateString);
  
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
  
    return `${day}/${month}/${year}`;
};