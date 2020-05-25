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

class JoinHospital extends Component {
  state = {
    username: '',
    password: '',
    title: '',
    address: '',
    phone: '',
    weekday: ['', '', '', '', '', '', ''],
    operation_time: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleChangeOperationTime = (e) => {
    const { name, value } = e.target;
    const weekday = this.state.weekday;
    weekday[name] = value;
    this.setState({
      weekday,
    });
  };

  join = async (e) => {
    try {
      const { weekday } = this.state;
      let operation_time = '';
      weekday.forEach((v, k) => {
        if (k === weekday.length - 1) {
          operation_time += v;
        } else {
          operation_time += v + ';';
        }
      });
      console.log(operation_time);
      const result = await axios.post(`http://localhost:4000/join/hospital`, {
        ...this.state,
        operation_time,
      });
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
        <div style={{ fontSize: 40 }}>병원 회원가입</div>
        <div>
          병원아이디{' '}
          <TextField id="standard-required" name="username" onChange={this.handleChange} />
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
          병원이름 <TextField id="standard-required" name="name" onChange={this.handleChange} />
        </div>
        <div>
          주소 <TextField id="standard-required" name="address" onChange={this.handleChange} />
        </div>
        <div>
          전화번호 <TextField id="standard-required" name="phone" onChange={this.handleChange} />
        </div>
        <div>
          운영시간{' '}
          <TextField
            id="standard-required"
            name="0"
            placeholder="월"
            onChange={this.handleChangeOperationTime}
          />
          <TextField
            id="standard-required"
            name="1"
            placeholder="화"
            onChange={this.handleChangeOperationTime}
          />
          <TextField
            id="standard-required"
            name="2"
            placeholder="수"
            onChange={this.handleChangeOperationTime}
          />
          <TextField
            id="standard-required"
            name="3"
            placeholder="목"
            onChange={this.handleChangeOperationTime}
          />
          <TextField
            id="standard-required"
            name="4"
            placeholder="금"
            onChange={this.handleChangeOperationTime}
          />
          <TextField
            id="standard-required"
            name="5"
            placeholder="토"
            onChange={this.handleChangeOperationTime}
          />
          <TextField
            id="standard-required"
            name="6"
            placeholder="일"
            onChange={this.handleChangeOperationTime}
          />
        </div>
        <div>
          <Button onClick={this.join} variant="contained" color="primary">
            회원가입
          </Button>
        </div>
      </div>
    );
  }
}

export default JoinHospital;
