import { Action } from "@remix-run/router";

export const GlobalReducer=(state,action)=> {
  
    switch(action.type){
        case "LOGIN":{
            console.log("login reducer");
            localStorage.setItem("auth",true)
            localStorage.setItem('user',JSON.stringify(action.payload))
            return {
              ...state,
              auth: true,
              userDetails:action.payload
            };
        }

        case "LOGIN_RESET":{
            console.log("login rESET");
            return{
                ...state,
                auth:true,
                userDetails:action.payload
            }
        }
        case "UPDATE":{
            localStorage.setItem('user',JSON.stringify(action.payload))
            return{
                ...state,
                userDetails:action.payload
            }
        }

        case "LOGOUT":{
            return{
                ...state,
                auth:false,
                userDetails:{}
            }
        }
    }
}

export default GlobalReducer