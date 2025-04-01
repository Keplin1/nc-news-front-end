import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

const NavigationBar = () => {
    const { user } = useContext(UserContext)
    return (
        <>
            <p>Nav Bar</p>
            <p>You're logged in as: {user}</p>
        </>
    )


}

export default NavigationBar