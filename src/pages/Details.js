import React from 'react';
import {useParams} from "react-router-dom";
import Container from 'react-bootstrap/Container';

import './Details.css'

function Details() {
  let { id } = useParams();

  return (
    <div className="detailsWrapper">
      <Container><h3>ini adalah halaman: {id}</h3></Container>
    </div>
  );
  }

  export default Details;