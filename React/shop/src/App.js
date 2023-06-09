import { useState } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { a, data } from './data'
import { Routes, Route, Link } from 'react-router-dom';

import Detail from './pages/detail/Detail'


function App() {
  let [shoes] = useState(data)

  return (
    <div className="App">
      <Button variant="primary">Button</Button>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">myShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">메인</Nav.Link>
            <Nav.Link href="#features">상의</Nav.Link>
            <Nav.Link href="#pricing">하의</Nav.Link>
            <Link to="/"> 홈 </Link>
            <Link to="/detail"> 상세페이지 </Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <Container>
              <Row>
                {/* {
              shoes.map(function (a, i) {
                return (
                  <>
                    <img src=" https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
                    <h4> {shoes[i].title} </h4>
                    <p> {shoes[i].content}</p>
                  </>
                )
              })
            } */}
                {/* <Card shoes={shoes[0]} i={1} />
            <Card shoes={shoes[1]} i={2} />
            <Card shoes={shoes[2]} i={3} /> */}
                {
                  shoes.map((a, i) => {
                    return (
                      <Card shoes={shoes[i]} i={i + 1} />
                    )
                  })
                }
              </Row>
            </Container>
          </>
        } />
        <Route path="/detail" element={ <Detail /> } />
      </Routes>



    </div>
  );
}

function Card(props) {
  return (
    <Col sm>
      <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
      <h4> {props.shoes.title} </h4>
      <p> {props.shoes.content}</p>
    </Col>
  )
}

export default App;

// npm install react-router-dom@6 설치
// react-router-dom 6 사이트에서 설치과정 그대로따라하기

