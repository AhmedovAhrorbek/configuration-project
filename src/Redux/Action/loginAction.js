// import { Api } from '../../Api';
import { API_PATH, APP_QALAMPIR_TOKEN } from '../../Utils/constants';


export function  signIn(values, navigate){
    return  function(dispatch){
        console.log(values);
        fetch(API_PATH + 'auth/login/' , {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',

            },
            body:JSON.stringify(values),

        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data.key){
                sessionStorage.setItem(APP_QALAMPIR_TOKEN, data.key);
                navigate("/admin");
            }
        });
        //  Api.post("auth/login/", values)
        //  .then(res => {console.log(res.data)}
         
        //  )
    }
}