import logo from "../../images/logo.jpg";
import Image from "react-bootstrap/Image";
import NavMenu from "../navMenu/navMenu";

function Header() {
  return (
    <>
      {/* header tag containing the logo, name of the company and the sign in button */}
      <header className="mb-5">
        <div className="headerItems">
          <Image className="brand-logo" src={logo} />
          <h1 className="pt-4">Lumi La Boutique</h1>
        </div>

        <div>
          <NavMenu />
        </div>
      </header>
    </>
  );
}

export default Header;
