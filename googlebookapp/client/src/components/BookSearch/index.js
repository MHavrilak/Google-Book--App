import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Container from "../Container";
import { Input, TextArea, FormBtn } from "../Form";
import Row from "../Row";
import Col from "../Col";


function BookSearch(props) {


  function handleSaveSubmit(event) {
    event.preventDefault();

    let index = event.target.id
    let book = props.books[index]

    if (book.volumeInfo.title && book.volumeInfo.authors) {
      API.saveBook({
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors,
        description: book.volumeInfo.description
      })
        .then(() => {
          console.log("savedBook")
        })
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
          
              <h3>Search Results</h3>
              <Link to="/savedBooks">Save Book</Link>

               {props.books.map((book, index) => (
                  <div>
                    <p>Title: {book.volumeInfo.title}</p>
                    <p>Author: {book.volumeInfo.authors}</p>
                    <p>Description: {book.volumeInfo.description}</p>
                    <FormBtn onClick={handleSaveSubmit} id={index}>
                Save Book
              </FormBtn>
                  </div>
               ))}  
              
            
          </Col>
          </Row>
          </Container>
          )
    }
    export default BookSearch;