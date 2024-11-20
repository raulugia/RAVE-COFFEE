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
// Simple regex for email validation
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return regex.test(email); // Returns true if valid, false otherwise
};


  