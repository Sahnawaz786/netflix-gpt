export const ValidateData = (email,password)=>{
  
    const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    // const isName  = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/.test(name);

    if(!isEmail) return "Email ID is not Valid !";
    if(!isPassword) return "Password is not Valid";
    // if(!isName) return "Name is Invalid"

    return null;

}