import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };
  }

  render() {
    return (
      <>
        <Button outline>
          <span className="fa fa-pencil fa-lg"></span> Submit Comment
        </Button>
      </>
    );
  }
}

export default CommentForm;
