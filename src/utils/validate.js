const checkValidData = (email, password, name) => {

    console.log(email,password,name)

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(password);

    if (name !== undefined) {
        const isNameValid = /^[a-zA-Z\s]{3,20}$/.test(name);
        if (!isNameValid) return "Name is not valid";
    }

    if (!isEmailValid) return "Email Id is not valid";
    if (!isPasswordValid) return "Password is not valid.";

    
    return null;
}

export default checkValidData