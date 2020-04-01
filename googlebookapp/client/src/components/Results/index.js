import React from "react";

function Results() {

    componentDidMount() {
        API.getBook({
            title: formObject.title,
            author: formObject, author,
            synopsis: formObject.sunopsis
        })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }

    handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.author) {
          API.saveBook({
            title: formObject.title,
            author: formObject.author,
            synopsis: formObject.synopsis
          })
            .then(res => loadBooks())
            .catch(err => console.log(err));
        }
      };
}
    return (
        <div>
            <Container>
                <Row>
                    <h4>Results</h4>
                    <
                </Row>
            </Container>
        </div>
    )