import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText
} from "mdbreact";

class index extends Component {
  state = {
    isLoading: true,
    getTweets: []
  };

  componentDidMount() {
    const url = `http://jsonplaceholder.typicode.com/comments`;

    fetch(url)
      .then(responce => responce.json())
      .then(data =>
        this.setState({
          isLoading: false,
          getTweets: data
        })
      );
  }

  getAllTweets = () =>
    this.state.getTweets.map(tweet => (
      <MDBCol lg="12" className="my-3" key={tweet.id}>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>{tweet.name}</MDBCardTitle>
            <MDBCardText>{tweet.body}</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    ));

  render() {
    let tweetName = this.props.location.state.name;

    return this.state.isLoading ? (
      <div className="loading">
        <div className="spinner-border text-danger load" role="status"></div>
      </div>
    ) : (
      <MDBContainer>
        <div className="album-title">{tweetName}'s Tweets</div>
        <MDBRow className="artist_wrapper my-2">{this.getAllTweets()}</MDBRow>
      </MDBContainer>
    );
  }
}

export default index;
