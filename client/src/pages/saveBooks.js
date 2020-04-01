import React, { useEffect, useState } from "react";
// import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../utils/API";
import Row from "../components/Row";
import Col from "../components/Col";
import { Input, TextArea, FormBtn } from "../components/Form";
import Container from "../components/Container";
import Header from "../components/Header";

function SaveBooks() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        loadBooks()
      }, [])

    function loadBooks() {
        API.getBooks()
          .then(res => 
            setBooks(res.data)
          )
          .catch(err => console.log(err));
      };
    
       
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <Header />
                    
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default SaveBooks;