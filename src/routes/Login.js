import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  state = {
    username: '',
    password: '',
    loginType: 'user',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleRadioChange = (e) => {
    const { loginType } = this.state;
    this.setState({
      loginType: e.target.value,
    });
  };
  login = async (e) => {
    const { username, password, loginType } = this.state;
    // await axios.post(`http://localhost:4000/auth/${loginType}`, { username, password });
    await axios(`http://localhost:4000/login/${loginType}`, {
      method: 'post',
      data: { username, password },
      withCredentials: true,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          placeholder="아이디를 입력해주세요."
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={this.handleChange}
        />
        유저
        <input
          type="radio"
          name="login_type"
          value="user"
          checked={this.state.loginType === 'user'}
          onChange={this.handleRadioChange}
        />
        병원
        <input
          type="radio"
          name="login_type"
          value="hospital"
          checked={this.state.loginType === 'hospital'}
          onChange={this.handleRadioChange}
        />
        <button onClick={this.login}>로그인</button>
      </div>
    );
  }
}

export default Login;
