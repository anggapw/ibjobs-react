import React from 'react';
// import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import BackgroundVideo from '../components/BackgroundVideo/BackgroundVideo';
import VideoList from '../components/VideoList/VideoList';
import BlogCard from '../components/BlogCard/BlogCard'
import CardPhilosophy from '../components/CardPhilosophy/CardPhilosophy';
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

  let contentPhilosophy = [{
    url: 'https://images.ctfassets.net/i5wc420v2vd1/6482BfPUYgw9GqcnxeKXUr/b7bd0b29262020a078b615d7af8eb328/Web-7187.jpg?w=600',
    title: 'Freedom and Responsibility',
    description: 'Our core philosophy is people over process. Our culture has been instrumental to our success and has helped us attract and retain stunning colleagues, making work here more satisfying.',
    position: 'left'
  },
  {
    url: 'https://images.ctfassets.net/i5wc420v2vd1/3YsX6dKHzyaCWsMcoMEYWC/911cfbb7b1dba8c8d92a1ce215a694ac/reed.jpg',
    title: 'Internet entertainment. Global original content. Product personalization.',
    description: 'Our first original series debuted in 2013. Over the following decades, Internet TV will replace linear, and we hope to keep leading by offering an amazing entertainment experience',
    position: 'right'
  }]

  return (
    <div>
      <div className="Hero">
        <h1>A great workplace combines exceptional Colleagues and hard problems.</h1>
        <Container className="Search">
          <InputGroup>
            <FormControl
              placeholder="Search job by keyword"
            />
            <span class="input-group-append bg-white">
              <button class="btn border border-left-0" type="button"><i class="fas fa-search"></i></button>
            </span>
          </InputGroup>
        </Container>
      </div>
      <BackgroundVideo />
      <div className="cardPhilosophyWrapper">
        <CardPhilosophy detail={contentPhilosophy} />
      </div>
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