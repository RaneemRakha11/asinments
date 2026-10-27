const emailValidation = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const passwordLength = (password) => {
    const passwordRegex = /^.{6,}$/;
    return passwordRegex.test(password);
}

const nameLength = (name) => {
    const nameRegex = /^.{3,}$/;
    return nameRegex.test(name);
}

module.exports = {emailValidation,passwordLength,nameLength}