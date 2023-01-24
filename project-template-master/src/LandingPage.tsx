import openlab from "./assets/openlab.svg";
import { useAuth } from "./auth/Auth";
import "./App.css";
import SnowParadiseDir from "./SnowParadiseComp";

export default function LandingPage(): JSX.Element {

    const {signOut} = useAuth()

    function handleLogOut(): void {
        signOut();
    }

    return (
<div>
    <SnowParadiseDir></SnowParadiseDir>
        <div className="SignOut" >
            <button onClick={handleLogOut}>Odhlásiť sa</button>
        </div>
</div>
    )
}