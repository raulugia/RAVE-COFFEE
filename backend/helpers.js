const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const validatePassword = (password) => {
    const errors = [];
  
    // Check for at least one lowercase letter
    if (!/(?=.*[a-z])/.test(password)) {
      errors.push("Password must have at least one lowercase letter");
    }
  
    // Check for at least one uppercase letter
    if (!/(?=.*[A-Z])/.test(password)) {
      errors.push("Password must have at least one uppercase letter");
    }
  
    // Check for at least one digit
    if (!/(?=.*\d)/.test(password)) {
      errors.push("Password must have at least one digit");
    }
  
    // Check for minimum length
    if (!/^.{8,}$/.test(password)) {
      errors.push("Password must be at least 8 characters long");
    }
  
    return {
      isValid: errors.length === 0,
      errors,
    };
  };

const validateName = (value, type) => {
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

const validateLine = (value, name) => {
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

const validateCity = (value) => {
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

const validatePostcode = (value) => {
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

const validateCounty = (value) => {
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

module.exports = { validatePassword, validateEmail, validateName, validateLine, validateCity, validatePostcode, validateCounty }