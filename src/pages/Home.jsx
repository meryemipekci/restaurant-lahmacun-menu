import { Link } from "react-router-dom";
// import BannerImage from "../lah2.webp";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${"./lah2.webp"}` }}>
      <div className="headerContainer">
        <h1>Lahmacun & Pide</h1>
        <p>
          Citir citir Lahmacun ve Pideler <br /> En Aci Haliyle
        </p>
        <Link to="/menu">
          {" "}
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
