//stimulating database
const users = {
    user1: {
        name: 'Tiana',
        email: 'tianakpakpo@21',
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


    // if (err) {
    //     console.error('Password comparison error:', err);
    //     res.status(500).json({ message: 'Internal server error' });
    //   } else if (result) {
    //     // Passwords match, user is authenticated
    //     res.status(200).json({
    //       name: user.name,
    //       email: user.email,
    //       message: 'Login successful',
    //     });
    //   } else {
    //     // Passwords don't match, deny login
    //     res.status(401).json({ message: 'Wrong password' });
    //   }


   //simulate database
   if(email != "tianakpakpo@21"){
    res.status(303).json({message: "user not found"})

   }else{
    res.status(200).json(
            {
                name: "Tiana",
                password: "req.body.password",
                email: "email"
            }
        )
   }
   

//    if(password != "Glory@21"){
//     res.status(303).json({message: "wrong password"})
//    }else{
//     res.status(200).json(
//             {
//                 name: "Tiana",
//                 password: "req.body.password",
//                 email: "email"
//             }
//         )
//    }



}

module.exports.loginUser = loginUser;