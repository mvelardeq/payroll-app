import { googleSignInWithPopup } from "../../firebase/providers"
import { chekingCredencials } from "./authSlice"

export const checkingAuthentication = ()=>{
    return async( dispatch )=>{
        dispatch(chekingCredencials())
    }
}

export const startSingInGoogle = ()=>{
    return async(disptach)=>{
        disptach(chekingCredencials())

        const result = await googleSignInWithPopup()
    }
}