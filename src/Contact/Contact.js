import ChildNav from "../Navbar/ChildNav";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";

function Contact() {
  return (
    <div className="kubwa-sun">
      <div>
        <ChildNav />{" "}
      </div>
      <div class="flexbox-container-contact">
        <div class="flexbox-item-contact1" style={{ marginRight: "15px" }}>
          <div className="the-address">
            <img
              src="http://www.thesaruni.com/TheSaruniImages/SaruniLogo.png"
              className="residence-home-logo-grey spec"
              alt="logo"
            />

            <h1 className="find"> C O N T A C T S </h1>
          </div>

          <div className="property">
            <p className="devs">PROPERTY DEVELOPER</p>
            <p className="strand">
              Riverside Strand Property Development Company Ltd.
            </p>
          </div>

          <div className="address">
            <p className="strand">Riverside Drive, Nairobi, Kenya</p>
            <p className="strand">T: +254 759 278 564</p>
            <p className="strand"> T: +254 745 466 634</p>
            <p className="strand">E: info@thesaruni.com</p>
            <p className="strand">
              <a href="https://docs.google.com/document/d/1DasoHkLLXmxrDEfAhTiRxhIoHnSIjASt/edit?usp=sharing&ouid=104257712004828164472&rtpof=true&sd=true" className="terms">
                Terms and Conditions
              </a>
            </p>
          </div>
          <div>
            <p className="small-paragraph">
              Disclaimer The information contained in this website is solely for
              general marketing purposes and should not be relied upon as being
              complete or accurate. No legal relationship or advice is implied.
              Artistic impressions or image renders contained in this website
              are for illustrative purposes only. No representations or
              warranties are implied by Riverside Strand Property Development
              Company Limited (“Riverside Strand”). Riverside Strand shall not
              be liable for any loss or damage howsoever arising from reliance
              upon the information contained in this website. Purchases are
              subject to contractual terms.
            </p>
          </div>
        </div>

        <div class="flexbox-item-contact2">
          <img
            src="http://www.thesaruni.com/TheSaruniImages/home.jpg"
            alt="bag"
            className="neighborhood-profile"
          />
        </div>
      </div>
    </div>
    // <div>
    //   <ChildNav />
    //   <div className="flexbox-container-contact">
    //     <div className="flexbox-item-contact1">
    //       <img
    //         src="https://thesaruni.com/TheSaruniImages/Saruni-Logo.png"
    //         alt="logo"
    //         className="home-logo"
    //       /><h4 className="word">THE SARUNI</h4>
    //       <div className="oppa">
    //         <p
    //           className="strand"
    //           style={{
    //             fontWeight: "bold",
    //           }}
    //         >
    //           PROPERTY DEVELOPER
    //         </p>
    //         <p className="strand">
    //           Riverside Strand Property Development Company Ltd.
    //         </p>
    //       </div>
    //       <div className="hyung">
    //         <p
    //           className="strand"
    //           style={{
    //             fontWeight: "bold",
    //           }}
    //         >
    //           CONTACTS:
    //         </p>
    //         <p
    //           className="strand"
    //           style={{
    //             fontWeight: "bold",
    //           }}
    //         >
    //           Riverside Drive
    //         </p>
    //         <p
    //           className="strand"
    //           style={{
    //             fontWeight: "bold",
    //           }}
    //         >
    //           T: 759 278 564
    //         </p>
    //         <p
    //           className="strand"
    //           style={{
    //             fontWeight: "bold",
    //           }}
    //         >
    //           {" "}
    //           745 466 634
    //         </p>
    //         <p
    //           className="strand"
    //           style={{
    //             fontWeight: "bold",
    //           }}
    //         >
    //           E: info@thesaruni.com
    //         </p>

    //       </div>

    //     </div>
    //     <div className="flexbox-item-contact2">
    //       <img
    //         src="http://www.thesaruni.com/TheSaruniImages/home.jpg"
    //         alt="land"
    //         className="neighborhood-profile"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}

export default Contact;
