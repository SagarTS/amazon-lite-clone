import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt=""
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />

        <div className="home__row">
          <Product
            id="2"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
            price={99.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          />
          <Product
            id="1"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen mixer with K-beater, Dough Hook and Whisk, 5 liter Glass Bowl"
            price={199.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Samsung LC49G199H9D0 49' Curved LED Gaming Monitor"
            price={299.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="4"
            title="Amazon Echo (3rd generation | Smart speaker with Alexa, Charcoal Fabric"
            price={90.99}
            rating={1}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="5"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)- Silver (4th Generation)"
            price={599.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Samsung LC49G100F89H8J9XEN 49' Curved LED Gaming Monitor - Super Ultra Wode Dual WQHD 5120 x 1440"
            price={1999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
