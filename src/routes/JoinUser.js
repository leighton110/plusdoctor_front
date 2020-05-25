import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import {
  TextField,
  Input,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from '@material-ui/core';

class JoinUser extends Component {
  state = {
    username: '',
    password: '',
    name: '',
    phone: '',
    address: '',
    gender: '',
    age: 0,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleGenderChange = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };

  join = async (e) => {
    try {
      const result = await axios.post(`http://localhost:4000/join/user`, { ...this.state });
      console.log(result);
      if (result.data.result === '회원가입성공') {
        alert('회원가입을 성공하였습니다');
        return <Redirect to="/login/user" />;
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const value = this.state.gender;
    return (
      <div style={{ padding: 20, textAlign: 'center' }}>
        <div style={{ fontSize: 40 }}>유저 회원가입</div>
        <div>
          아이디 <TextField id="standard-required" name="username" onChange={this.handleChange} />
        </div>
        <div>
          비밀번호{' '}
          <TextField
            type="password"
            id="standard-required"
            name="password"
            onChange={this.handleChange}
          />
        </div>
        <div>
          이름 <TextField id="standard-required" name="name" onChange={this.handleChange} />
        </div>
        <div>
          전화번호 <TextField id="standard-required" name="phone" onChange={this.handleChange} />
        </div>
        <div>
          주소 <TextField id="standard-required" name="address" onChange={this.handleChange} />
        </div>
        <div>
          성별
          <FormControl component="fieldset">
            <RadioGroup
              style={{ float: 'left' }}
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={this.handleGenderChange}
            >
              <FormControlLabel value="F" control={<Radio />} label="Female" />
              <FormControlLabel value="M" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </div>
        나이 <TextField id="standard-required" name="age" onChange={this.handleChange} />
        <div>
          <Button onClick={this.join} variant="contained" color="primary">
            회원가입
          </Button>
        </div>
      </div>
    );
  }
}

export default JoinUser;
