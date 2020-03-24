import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import { postBook } from "./redux/actions";

class BookForm extends Component {
  state = {
    title: "",
    color: "",
    authors: [this.props.authorID]
  };

  onTextChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    event.preventDefault();
    this.props.postBook(this.state, this.props.closeModal);
  };

  render() {
    const colorOptions = [
      "white",
      "red",
      "blue",
      "green",
      "yellow",
      "black",
      "grey",
      "purple"
    ].map(color => (
      <option key={color} value={color}>
        {color}
      </option>
    ));

    return (
      <div className="mt-5 p-2">
        <form onSubmit={this.onSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Title</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Color</span>
            </div>
            <select
              name="color"
              className="form-control"
              onChange={this.onTextChange}
            >
              <option value="">----</option>
              {colorOptions}
            </select>
          </div>
          <input type="submit" value="Add Book" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postBook: (book, closeModal) => dispatch(postBook(book, closeModal))
  };
};

export default connect(null, mapDispatchToProps)(BookForm);
