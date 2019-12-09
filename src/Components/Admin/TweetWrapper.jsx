import React from "react";
import { MDBMedia, MDBIcon } from "mdbreact";

const MediaObjectPage = props => {
  return (
    <MDBMedia list className="px-5 my-4">
      <MDBMedia tag="li">
        <MDBMedia left href="#">
          {/* <MDBMedia
            object
            src="https://mdbootstrap.com/img/Photos/Others/avatar-min1.jpg"
            alt="Generic placeholder image"
          /> */}
        </MDBMedia>
        <MDBMedia body>
          <MDBMedia heading>{props.title}</MDBMedia>

          <p>{props.body}</p>
          <MDBIcon icon="trash-alt" className="red-text mr-4 icon" />
          <MDBIcon icon="pencil-alt" className="blue-text icon" />
        </MDBMedia>
      </MDBMedia>
    </MDBMedia>
  );
};

export default MediaObjectPage;
