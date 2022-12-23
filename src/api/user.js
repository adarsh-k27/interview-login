import axios from '../axios'
import {
    toast
} from 'react-toastify'
import {
    Navigate
} from 'react-router-dom'
export const UserLogin = async (data, LoginUser, navigate) => {
    try {
        console.log("data", data);
        const res = await axios({
            method: "GET",
            url: "/user/sign-in",
            params: {
                ...data
            }
        })
        console.log(res);
        if (res.status == 200) {
            toast.success("Login Succeeded")
            LoginUser(res.data.user)
            navigate('/')
        }

    } catch (error) {
        console.log(error);
    }
}

export const UserSignIn = async (data, navigate, setError) => {
    try {
        console.log(data);
        //const res=await axios.post('/user/sign-up',{...data})
        const res = await axios({
            method: "POST",
            url: "/user/sign-up",
            params: {
                ...data
            }
        })
        console.log(res);
        if (res.status == 200) {
            console.log(res.data);
            toast.success("Register Succesfully")
            navigate('/user/login')
        }
    } catch (error) {
        setError(error.response.data.message)
    }
}

export const UpdateUser = async (data, Update) => {
    try {
        const res = await axios({
            method: "put",
            url:"/user/update",
            params:{
                ...data
            }
        })
        if(res.status==200){
            console.log(res.data);
            toast.success("Update SuccesFully")
            Update(res.data.Update)
        }
    } catch (error) {
        console.log(error);
    }
}