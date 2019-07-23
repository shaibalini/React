import React from 'react'
import { withRouter } from "react-router-dom";
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.history.push("/contact");
  }
  render() {
    return (
      <form name="myForm" onSubmit={this.handleSubmit}>
      <label>
        Username:
        <input type="text" ref={(input) => this.userName = input} />
      </label><br />
      <label>
        Phone Number:
        <input type="number" ref={(input) => this.phoneNumber = input} />
      </label><br />
      <label>
        Email:
        <input type="text" ref={(input) => this.email = input} />
      </label><br />
      <label>
        Password:
        <input type="password" ref={(input) => this.password = input} />
      </label><br />
      <input type="submit" value="Submit" />
    </form>
    
    
    )
  }
}
export default withRouter(Users);