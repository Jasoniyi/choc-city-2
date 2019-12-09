import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol
} from "mdbreact";

import { Link } from "react-router-dom";

class index extends Component {
  state = {
    isLoading: true,
    getArtists: []
  };

  componentDidMount() {
    const url = "http://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          isLoading: false,
          getArtists: data
        })
      );
  }

  getAllArtists = () =>
    this.state.getArtists.map(artist => (
      <MDBCol sm="6" key={artist.id}>
        <MDBCard className="my-2">
          <MDBCardHeader color="deep-orange lighten-1">
            {artist.username}
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle> {artist.name}</MDBCardTitle>
            <MDBCardText>
              Send me a mail at <strong>{artist.email}</strong>. MA Street is
              <strong>{artist.address.street}</strong>
              Hola at <strong>{artist.phone}</strong>.
            </MDBCardText>
            <MDBBtn color="deep-orange">
              <Link
                to={{
                  pathname: `/album/${artist.id}`,
                  state: { album: artist.id }
                }}
              >
                View my Albums
              </Link>
            </MDBBtn>
            <MDBBtn color="deep-orange">
              <Link
                to={{
                  pathname: `/tweets/${artist.id}`,
                  state: { tweet: artist.id, name: artist.name }
                }}
              >
                My Tweets
              </Link>
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    ));

  render() {
    return this.state.isLoading ? (
      <div className="loading">
        <div className="spinner-border text-danger load" role="status">
          {/* <span className="sr-only load">Loading...</span> */}
        </div>
      </div>
    ) : (
      <MDBContainer>
        <MDBRow className="artist_wrapper my-2">{this.getAllArtists()}</MDBRow>
      </MDBContainer>
    );
  }
}

export default index;
