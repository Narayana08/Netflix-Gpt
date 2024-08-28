const checkValidData = (email, password, name="react") => {

    const isNameValid = /^[a-zA-Z0-9_]{5,15}$/.test(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(password);

    if (!isNameValid) return "Name is not valid"
    if (!isEmailValid) return "Email Id is not valid"
    if (!isPasswordValid) return "Password is not valid."

}

export default checkValidData