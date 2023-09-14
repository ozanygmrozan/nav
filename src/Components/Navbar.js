import "./Navbar.css";
import { Component } from "react";
import logo from "../Assets/gp-logosu--premium-harf-gp-veya-pg-logo-tasarimi_312303-original.png";

class Navbar extends Component {

  state = { Clicked: false };

  handleClick = () => {
    this.setState({ Clicked: !this.state.Clicked });
  };
  render() {
    return (
      <div>
        <nav className="nav">
          <img className="logo" src={logo} alt="This is a logo" />
          <div>
            <ul
              id="navbar"
              className={this.state.Clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a href="/About">Annasayfa</a>
              </li>
              <li>
                <a href="/Hero">Hakkımızda</a>
              </li>
              <li>
                <a href="/Home">İletişim</a>
              </li>
            </ul>

            <div className="Brandname">
              <p>Odessa yazılım</p>
            </div>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.Clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
