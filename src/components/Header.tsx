import Logo from "../assets/icons/logo.jpg";
import { UsageMenu } from "./partials/utils/Menu";

const Header = () => {

    return (
        <header className="w-100 d-flex">
            <div className="logo-container">
                <img src={Logo} />
            </div>
            <div className="menu">
            <UsageMenu />
            </div>
        </header>
    )
}

export default Header;
