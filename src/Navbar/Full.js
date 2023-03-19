import ChildNav from "./ChildNav";
import "./Full.css";

function Full() {
  return (
    <div>
      <div>
        <ChildNav />
      </div>
      <div className="full-menu">
        <div className="option1">
        <a href="/residencehomepage">
        <h1 className="menu-opt">
         
         {" "}
         <h5 className="mini-topic">THE</h5>R E S I D E N C E S
       </h1>
        </a>
          <a  href="/amenitieshomepage"><h1 className="menu-opt">
            <h5 className="mini-topic">THE</h5> A M E N I T I E S
          </h1></a>
          <a href="/neighborhoodhomepage"><h1 className="menu-opt">
            <h5 className="mini-topic">THE</h5> N E I G H B O R H O O D
          </h1></a>
          <a href="/availability"><h1 className="menu-opt">A V A I L A B I L I T Y</h1></a>
          <h1 className="menu-opt">VIRTUAL TOUR </h1>

          
          <h1 className="menu-opt">ABOUT US </h1>
          <h1 className="menu-opt">GET IN TOUCH</h1>

        </div>
      </div>
    </div>
  );
}

export default Full;
