const loginUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    //checking email is not empty
    if(email === "" || email === null){
        res.status(303).json({message: "email cannot be empty"})
        return;
    }
    //checking email is not empty
    if(password === "" || password === null){
        res.status(303).json({message: "password cannot be empty"})
        return;
    }

   //simulate database
   if(email != "yeboah@mail.com"){
    res.status(303).json({message: "user not found"})

   }else{
    res.status(200).json(
            {
                name: "Isaac",
                password: "admin1234",
                email: req.body.email
            }
        )
   }
}

module.exports.loginUser = loginUser;