export const validation = (email,password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Invalid Email Address";
    if(!isPasswordValid) return "The Password must containt an Upper Case Charater, a Lower Case Charcter , a number and a special charater.";

    if(isEmailValid && isPasswordValid) return null;
}