import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get('email');
    const password = data.get('password');
    console.log("form data: ",email+"  "+password);
    this.props.createUser(email,password);
  }
  render() {
    return (
      <div className="App">
        {this.props.accountStatus.status ? this.props.accountStatus.message:''}<br />
        register
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label>Id:</label>
          <input type="text" name="email" id="email" />
          <br /><br />
          <label>key:</label>
          <input type="password" name="password" id="password" />
          <br /><br />
          <input type="submit" name="submit" id="submit" />
        </form>
      </div>
    );
  }
}

function mapSateToProps(state) {
  console.log("state => ",state);
  return {
    accountStatus: state.user_reducer.accountStatus ? state.user_reducer.accountStatus:''
  };
}
const mapDispatchToProps = (dispatch) => ({
  createUser:(email,password) => {
    dispatch({type:'ADD_USER',payload:{email,password}});
  }
});
export default connect(mapSateToProps,mapDispatchToProps)(App);