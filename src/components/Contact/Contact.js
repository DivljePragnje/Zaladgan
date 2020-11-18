import React from "react";
import "./contact.styles.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleChangeMessage = (event) => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="contact-wrapper">
        <h1 className="contact-header">
          <center>GET IN TOUCH</center>
        </h1>
        <form id="contact-form">
          <div className="form-input">
            <input
              className="form-field"
              type="input"
              id="name"
              autoComplete="off"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleChangeName}
            />
            <label className="form-label">Name:</label>
          </div>

          <div className="form-input">
            <input
              className="form-field"
              type="input"
              id="email"
              autoComplete="off"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
            <label className="form-label">E-mail:</label>
          </div>

          <div className="form-input">
            <textarea
              className="form-field"
              type="input"
              id="message"
              autoComplete="off"
              name="message"
              placeholder="message"
              rows="10"
              value={this.state.message}
              onChange={this.handleChangeMessage}
            />
            <label className="form-label">Message:</label>
          </div>
        </form>
        <button type="submit" form="contact-form" value="Send">
          Submit
        </button>
      </div>
    );
  }
}

export default Contact;
