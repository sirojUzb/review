import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <div className="main_wrapper">
      <div className="navbar_wrapper">
        <div className="navbar_container_left">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h6>Murad</h6>
          </div>
          <div className="nav_feature">
            <p>Home</p>
            <p>Features</p>
          </div>
        </div>
        <div className="login">
          <div className="login_part">Login</div>
          <button>Create Account</button>
        </div>
      </div>
      {/* home starts here */}
      <div className="home">
        <div className="home_left">
          <div className="home_left_top">
            <div className="title">
              Hiring Smarter With Better <h1>Reviews</h1>
            </div>
            <div className="description">
              It’s free and easy to use online review platform.
            </div>
            <div className="button_part">
              <button>Create Account</button>
              <p>Learn More</p>
            </div>
          </div>
          <div className="home_left_bottom">456</div>
        </div>
        <div className="home_right">
          <div className="bg_color">
            <div className="bg_color_2">
              <div className="bg_color_3">
                <img
                  className="woman_img"
                  src={
                    "https://s3-alpha-sig.figma.com/img/8b13/9b0b/ea29df4128e02ce6d8ee5b553b6f3cc2?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qEU1Uy4o5tbctkfBG18n0cHj5bLC6hJwbLQ9q9JfzrKWdsR4G4vtIPmMhEiF4ajPt-f0O6oMhOEsP6mCp5WsX08ph4jNaOGVaGXWaak6DBZLN1UWXqOFXlZI~mihnNvQOZLY7X9MIzcfgiEh2D55wKqd6Kun~hgqpwiOr4ELicq0s7f9onFfP0xRvFBpFrRYzHtd9~AvJAPdn~0AjKVV8LfUSw39Bzi2Yai9ud0JPn089YFr7~5XePfBa8Ktx0vrOfXKS0dHUxKlXvCc0AkaHSCIm7sozHsSr1dPlSyUaKbVzNF~rPZh~VU8tWT0CKet99bINiGS1oyERRf6btxBwg__"
                  }
                  alt="woman img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
