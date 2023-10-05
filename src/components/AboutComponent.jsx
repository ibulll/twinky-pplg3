import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import logoabout from "../assets/img/logo.jpg";
import "../css/about.css";
import { FaBeer } from 'react-icons/fa';

const AboutComponent = () => {
  return  (
    <Container> 
      <Row>
      <h2 className='judul text-center mt-5'>About XI PPLG 3</h2>
      <p className='text-center '>(pengembangan perangkat lunak dan gim)</p>
      <div className="centered-content">
      <div className="left-text">
       <FaBeer />
        <p>Teks Kiri 1</p>

        <p>Teks Kiri 2</p>
      </div>
      <div className="center-image">
        <img
          src={logoabout} // Ganti dengan path gambar Anda
          alt="Gambar"
        />
      </div>
      <div className="right-text">
      <FontAwesomeIcon icon="fa-solid fa-heart" beat />
        <p>Teks Kanan 1</p>
  
        <p>Teks Kanan 2</p>
      </div>
      <div className="bottom-text">

        <p>Teks di Bawah</p>
      </div>
    </div>
      </Row>
    </Container>
        
  )
}

export default AboutComponent