import { useState } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { a, data } from './data'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import Detail from './pages/detail/Detail'
import About from './Route/about/About'


function App() {
  let [shoes] = useState(data)
  let navigate = useNavigate(); // 페이지 이동을 도와주는  useNavigate()




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
            {/* <Link to="/detail"> 상세페이지 </Link> */}
            <Nav.Link onClick={() => { navigate(-1) }}> 뒤로가기 </Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}> 상세페이지 </Nav.Link>
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
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<About />} >
          <Route path="member " element={ <p> 첫주문 어쩌고</p>} />
          <Route path="location " element={ <p> 일생기념 쿠폰받기 </p>} />
        </Route>

        <Route path="*" element={<div> 404 ERRORS </div>} />
        {/* 404 페이지는 *로 모든 페이지를 가리킴 *표는 에러를 가르킴 */}
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

