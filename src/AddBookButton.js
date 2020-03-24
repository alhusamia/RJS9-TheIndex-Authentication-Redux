import React, { Component } from "react";

import BookForm from "./BookForm";
import Modal from "react-responsive-modal";

class AddBookButton extends Component {
  state = {
    open: false
  };

  openModal = () => this.setState({ open: true });

  closeModal = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    return (
      <div>
        <Modal open={open} onClose={this.closeModal} center>
          <BookForm
            authorID={this.props.authorID}
            closeModal={this.closeModal}
          />
        </Modal>
        <input type="button" onClick={this.openModal} value="Add New Book!" />
      </div>
    );
  }
}
export default AddBookButton;
