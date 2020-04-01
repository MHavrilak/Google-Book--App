import React, { useState } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../utils/API";
import Row from "../components/Row";
import Col from "../components/Col";
import { Input, TextArea, FormBtn } from "../components/Form";
import Container from "../components/Container";
import BookSearch from "../components/BookSearch";



function SearchBooks() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({
    title: "",
  })

   // Loads all books and sets them to books
  function queryBooks() {
    API.queryBooks(formObject.title)
    .then(res => {
      console.log(res.data.items)
      setBooks(res.data.items)
    })
      
    }
    

  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log(name, value)
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title) {
      queryBooks(formObject.title)
    }
  };

  

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
                value={formObject.title}
              />
              <FormBtn
                disabled={!(formObject.title)}
                onClick={handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
            
          </Col>
          </Row>
          <BookSearch books={books} />
          </Container>
)
}

export default SearchBooks;