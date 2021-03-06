import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult"

class Books extends Component {
  state = {
    search: "",
    books: [],
    error: "",
    message: ""
  };

  //function to take value of what enter in the search bar
  handleInputChange = event => {
    this.setState({ search: event.target.value })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // once it clicks it connects to the google book api with the search value
    API.getGoogleSearchBooks(this.state.search)
      .then(res => {
        if (res.data.items === "error") {
          throw new Error(res.data.items);
        }
        else {
          // store response in a array
          let results = res.data.items
          //map through the array 
          results = results.map(result => {
            //store each book information in a new object 
            result = {
              key: result.id,
              id: result.id,
              title: result.volumeInfo.title,
              author: result.volumeInfo.authors,
              description: result.volumeInfo.description,
              image: result.volumeInfo.imageLinks.thumbnail,
              link: result.volumeInfo.infoLink
            };
            return result;
          });
          // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
          this.setState({ books: results, error: "" })
        }
      })
      .catch(err => this.setState({ error: err.items }));
  };

  handleSavedButton = event => {
    // console.log(event)
    event.preventDefault();
    let savedBooks = this.state.books.filter(book => book.id === event.target.id);
    savedBooks = savedBooks[0];
    API.saveBook(savedBooks)
      .then(this.setState({ message: alert("Your book is saved") }))
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="text-black">Find the books that you have been looking for!</h1>
        </Jumbotron>
        <Container fluid>
          <Container>
            <Row>
              <Col size="12">
                <SearchForm
                  handleFormSubmit={this.handleFormSubmit}
                  handleInputChange={this.handleInputChange}
                />
              </Col>
            </Row>
          </Container>
          <br></br>
          <Container>
            <SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton} />
          </Container>
        </Container>
      </div>
    )
  }
}

export default Books;
