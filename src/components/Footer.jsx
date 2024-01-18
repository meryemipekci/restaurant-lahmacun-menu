import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <p>&copy; 2024 Cıtır Lahmacun </p>
      <div className="socialMedia">
        <FaInstagram />
        <FaTwitterSquare />
        <FaFacebook />
      </div>
    </div>
  );
}

export default Footer;
