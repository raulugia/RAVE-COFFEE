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


  