
let api = {

    GetRegisterUser(userName,email, password, ) {
        let formdata = new FormData();
        formdata.append("username", userName)
        formdata.append("email", email)
        formdata.append("password", password)

        return fetch("http://68.183.48.101:3333/users/register",
            {
                method: "POST",
                body: formdata
            }
        )
            .then(response => response.json())
            .catch(err => {
                console.warn("Errr", err.message);
            })


    },

    GetUserList(token) {
        let formdata = new FormData();
        formdata.append("username", userName)
      
        return fetch("http://68.183.48.101:3333/users/list",
            {
                method: "GET",
                headers:{
                    'Authorization': 'Bearer ' + token,
         
                },
                body: formdata
            }
        )
            .then(response => response.json())
            .catch(err => {
                console.warn("Errr", err.message);
            })


    },


}
export default api;
