import ChildNav from "./ChildNav";
import "./Full.css";

function Full() {
  return (
    <div className="fuller-menu">
      <div>
        <ChildNav />
      </div>
      <div className="full-menu">
        <div className="option1">
          <a href="/residence">
            <h1 className="menu-opt">
              {" "}
              <h5 className="mini-topic">THE</h5>R E S I D E N C E S
            </h1>
          </a>
          <a href="/amenities">
            <h1 className="menu-opt">
              <h5 className="mini-topic">THE</h5> A M E N I T I E S
            </h1>
          </a>
          <a href="/map">
            <h1 className="menu-opt">
              <h5 className="mini-topic">THE</h5> N E I G H B O R H O O D
            </h1>
          </a>
          <a href="/availability">
            <h1 className="menu-opt">A V A I L A B I L I T Y</h1>
          </a>
          <a href="https://www.youtube.com/embed/I8iI6Oh-OkA" target="_blank" rel="noreferrer" > <h1 className="menu-opt">VIRTUAL TOUR</h1></a>

          <h1 className="menu-opt">ABOUT US </h1>
          <a href="/contact">
            <h1 className="menu-opt">CONTACT</h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Full;
