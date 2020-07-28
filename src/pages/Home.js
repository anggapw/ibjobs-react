import React from 'react';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import BackgroundVideo from '../components/BackgroundVideo/BackgroundVideo';
import VideoList from '../components/VideoList/VideoList';
import BlogCard from '../components/BlogCard/BlogCard'
import './Home.css';

const Home = () => {
  let contentBlog = [{
    blogCategory: 'Science',
    blogTitle: 'NASA Siap Luncurkan Misi Mars 2020 Kamis Pekan Ini',
    blogAuthor: 'Virgina Maulita Putri',
    blogDescription: 'NASA siap meluncurkan misi Mars 2020 pada pekan ini. Peluncuran ini akan menutup parade perjalanan antariksa menuju Mars pada bulan ini yang sebelumnya telah dilakukan oleh Uni Emirat Arab dan China.'
  },
  {
    blogCategory: 'Games',
    blogTitle: 'Beredar Bocoran Visual dari Screenshot Game PS5 ',
    blogAuthor: 'Rachmatunnisa',
    blogDescription: 'Baru-baru ini beredar sejumlah screenshot tampilan berkualitas 4K dari game eksklusif PS5 Destruction AllStar. Untuk diketahui, judul game ini diumumkan saat Sony memperkenalkan PS5 dalam event online Juni lalu.'
  }]
  return (
    <div>
      <div className="Hero">
        <h1>A great workplace combines exceptional Colleagues and hard problems.</h1>
        <Container className="Search">
          <Form.Group>
            <Form.Control size="lg" type="text" placeholder="Search jobs by keyword" />
          </Form.Group>
        </Container>
      </div>
      <BackgroundVideo />
      <VideoList />
      <div>
        <Container>
          <Row className="d-flex justify-content-between">
              <BlogCard blog={contentBlog} />
          </Row>

        </Container>
      </div>
    </div>
  );
}

export default Home;