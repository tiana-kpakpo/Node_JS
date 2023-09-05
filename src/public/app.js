window.addEventListener('load', async () =>{
 
    const login = document.querySelector('.login');
    login.addEventListener('click', async () => {
    
        const email = document.querySelector('input#email');
        const password = document.querySelector('input#password');

         //checking email is not empty
    if(email === "" || email === null ){
        res.status(303).json({message: "email cannot be empty"})
        return;
    }

    //checking password not empty
    // if(password === "" || password === null){
    //     res.status(303).json({message: "password cannot be empty"})
    //     return;
    // }



        // const result = await fetch('http://localhost:5500/api/auth',{
        //     method: 'POST',
        //     headers: {
        //         "Content-Type" : "application/json"
        //     },
        //     body: JSON.stringify({
        //         email: email,
        //         passowrd: password
        //     })
        // })

        const result = await fetch('http://localhost:5500/api/auth',{
            method: 'POST',
            headers: {
                'Content-Type': 'application.json'
            },
        
            body: JSON.stringify({
                email: email,
                password:password
            })
        })

        // console.log(result.body)
        if(result.status == 200){
            let response = await result.json();
            console.log(response)
            return 
        }
            let response = await result.json();
            console.log(response)
        
    })


})