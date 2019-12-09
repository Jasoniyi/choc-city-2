import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBRow
} from "mdbreact";

class index extends Component {
  state = {
    isLoading: true,
    getAlbums: []
  };

  componentDidMount() {
    let albumId = this.props.location.state.album;
    const url = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;

    fetch(url)
      .then(responce => responce.json())
      .then(data =>
        this.setState({
          isLoading: false,
          getAlbums: data
        })
      );

    console.log(albumId);
  }

  getAllAlbums = () =>
    this.state.getAlbums.map(album => (
      <MDBCol lg="3" className="my-3" key={album.albumId}>
        <MDBCard>
          <MDBCardImage
            className="img-fluid album-post"
            src={album.thumbnailUrl}
            waves
          />
          <MDBCardBody>
            <MDBCardTitle>{album.title}</MDBCardTitle>
            {/* <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </MDBCardText>
            <MDBBtn href="#">MDBBtn</MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    ));

  render() {
    console.log(this.props);
    return this.state.isLoading ? (
      <div className="loading">
        <div className="spinner-border text-danger load" role="status"></div>
      </div>
    ) : (
      <MDBContainer>
        <div className="album-title">My Albums</div>
        <MDBRow className="artist_wrapper my-2">{this.getAllAlbums()}</MDBRow>
      </MDBContainer>
    );
  }
}

export default index;
