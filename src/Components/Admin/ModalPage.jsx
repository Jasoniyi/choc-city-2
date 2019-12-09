import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput
} from "mdbreact";

class ModalPage extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn onClick={this.toggle}>Post Tweet</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>Post Tweet</MDBModalHeader>
          <MDBModalBody>
            <form className="mx-3 grey-text">
              <MDBInput
                name="title"
                label="Title"
                icon="folder"
                hint="I speak my mind"
                group
                type="text"
                getValue={this.props.handleInputChange("title")}
              />
              <MDBInput
                name="body"
                label="Body"
                icon="edit"
                hint="Briefing"
                group
                type="text"
                getValue={this.props.handleInputChange("body")}
              />
              <MDBInput
                name="userId"
                label="userId"
                hint="1"
                icon="user-cog"
                group
                type="number"
                getValue={this.props.handleInputChange("userId")}
              />
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>
              Close
            </MDBBtn>
            <MDBBtn color="primary" onClick={this.props.addTweet}>
              Post
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
