import { useContext } from "react"
import { authcontext } from "./Authprovider"

const Useauth = () =>{
    return useContext(authcontext)
}
export default Useauth