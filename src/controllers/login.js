const loginUser = async (req, res) => {
    
    const email = req.body.email;
    console.log(email)
    const password = req.body.password;


   //simulate database
   if(email != "tianakpakpo1@gmail.com"){
    res.status(303).json({message: "user not found"})

   }else{
    res.status(200).json(
            {
                name: "Tiana",
                password: "admin1234",
                email: req.body.email
            }
        )
   }

   if(password != 'admin1234'){
    res.status(303).json({message: "invalid password"})
   }else{
    res.status(200).json(
        {
            name: "Tiana",
            password: req.body.password,
            email: req.body.email
        }
    )
   }
}

module.exports.loginUser = loginUser;