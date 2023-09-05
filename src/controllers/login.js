//stimulating database
const users = {
    user1: {
        name: 'Tiana',
        email: 'tianakpakpo@gmail.com',
        password: 'Glory@21'
    }
}


const loginUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

   
    const user = users[email];
    

    if(!user){
        res.status(404).json({message: 'User not found'})
        return;
    }

   //simulate database
   if(email != "tianakpakpo@gmail.com"){
    res.status(303).json({message: "user not found"})

   }else{
    res.status(200).json(
            {
                name: "Tiana",
                password: "req.body.password",
                email: "tianakpakpo@gmail.com"
            }
        )
   }


   if(password != "Glory@21"){
    res.status(303).json({message: "wrong password"})
   }else{
    res.status(200).json(
            {
                name: "Tiana",
                password: "req.body.password",
                email: "tianakpakpo@gmail.com"
            }
        )
   }



}

module.exports.loginUser = loginUser;