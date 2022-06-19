import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <div className="home__container">
          <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
      
      <div className="home__row">

          <Product

          title = 'Código limpio / Clean code: Manual de estilo para el desarrollo ágil de software / A Handbook of Agile Software Craftsmanship'
          
          price = {1151}
          
          image = 'https://images-na.ssl-images-amazon.com/images/I/41K-wtoYjiL._SX387_BO1,204,203,200_.jpg'       
          
          rating = {4}

          />

          <Product

          title = 'HyperX Cloud Flight, Audífonos inalámbricos para Juegos para PS5 y PS4 con micrófono con cancelación de Ruido con silenciador de micrófono LED.'
          
          price = {2299}
          
          image = 'https://m.media-amazon.com/images/I/61Pq4VQsSTS._AC_SL1500_.jpg'       
          
          rating = {5}

          />

      </div>

      <div className="home__row">

          <Product

          title = 'Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 256 GB'
          
          price = {9908}
          
          image = 'https://m.media-amazon.com/images/I/61kwRNPtMpL._AC_SL1500_.jpg'       
          
          rating = {4}

          />

          <Product

          title = 'Kingston SSD A400 1920GB SATA 3 (6Gb/s) 2.5" Lectura: 500MB/s y Escritura: 450MB/s (SA400S37/1920G)'
          
          price = {4715}
          
          image = 'https://m.media-amazon.com/images/I/91RL+MhTWbL._AC_SL1500_.jpg'       
          
          rating = {5}

          />

          <Product

          title = 'BenQ ZOWIE XL2411P Monitor e-Sports 24” 144Hz con Black eQualizer, Intensidad de Color, Display Port'
          
          price = {5399}
          
          image = 'https://m.media-amazon.com/images/I/51HqBwgAdkL._AC_SL1000_.jpg'       
          
          rating = {4}

          />

      </div>

      <div className="home__row">

         <Product

          title = 'Mytrix ROG Strix G17 Gaming Laptop_by A-Sus, 17.3" FHD 144Hz 3ms, AMD 8-Core Ryzen 7 4800H (Beat i5-11600), GeForce RTX 3060, 32GB RAM, 2TB SSD, USB-C, HDMI, RJ45, WiFi 6, HDMI 2.1 Cable, Win 10'
          
          price = {43434}
          
          image = 'https://m.media-amazon.com/images/I/61O3eWlaD4L._AC_SL1280_.jpg'       
          
          rating = {5}

          />

      </div>
      </div>
    </div>
  )
}

export default Home
