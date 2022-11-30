import React from "react";
import '../styles/home.css';
import modelClose from '../assets/shirt_model_close.png';
import modelPic from '../assets/shirt_model.png';
import shirtClose from '../assets/shirt_close.png';
import shirt from '../assets/shirt.png';

const Home = () => {

  return (
    <div className="homeContainer">
      <section className="one reveal">
        <div>
          <h1 className="titleF">object oriented</h1>
          <img className="image1" src={modelClose} alt="model with shirt" width="500" height="600"/>
        </div>
      </section>
      <section className="two reveal">
        <img className="image2" src={modelPic} alt="model with shirt" width="500" height="600"/>
        <h1 className="textF">Releases 2030</h1>
      </section>
      <section className="three reveal">
        <h1>Cool Jung is seen at Publix on Wednesdays.</h1>
        <img className="image3" src={shirtClose} alt="model with shirt" width="500" height="600"/>
      </section>
      <section className="four reveal">
        <img className="image4" src={shirt} alt="model with shirt" width="500" height="600"/>
        <h1>100% Cotton. Imported. Pull On closure. Machine Wash. Unisex streetwear design for men, women, boys, girls, dark style graphic tshirt.Oversized fit, drop-shoulder. Retro Washed effect Fabric.</h1>
      </section>
    </div>
  );
};

export default Home;