/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import { forEach } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Form, FormGroup, Label, Input, Button,
} from 'reactstrap';

class Anagram extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anagram: '',
      resAnagram: [],
    };
    this.submit = this.submit.bind(this);
  }

  submit() {
    let { anagram } = this.state;
    anagram = anagram.replace(/\s/g, '');
    const arrayAnagram = anagram.split(',');

    const arrayRes = {};
    forEach(arrayAnagram, (val) => {
      const transAnagram = this.transAnagram(val);
      if (arrayRes[transAnagram]) {
        return arrayRes[transAnagram].push(val);
      }
      arrayRes[transAnagram] = [val];
    });

    const resAnagram = [];
    forEach(arrayRes, (val) => {
      resAnagram.push(val);
    });
    this.setState({ resAnagram });
  }

  transAnagram(val) {
    val = val.split('');
    for (let i = 0; i < val.length; i++) {
      for (let j = i; j < val.length; j++) {
        if (val[i] > val[j]) {
          const temp = val[i];
          val[i] = val[j];
          val[j] = temp;
        }
      }
    }
    val = val.join('');
    return val;
  }

  render() {
    const { resAnagram } = this.state;
    const resJson = JSON.stringify(resAnagram);
    return (
      <div>
        <Form>
          <FormGroup>
            <Label className="text-white">Input Anagram Words</Label>
            <Input onChange={(e) => this.setState({ anagram: e.target.value })} name="anagram" id="anagramId" placeholder="e.g kita, atik, tika, aku, kia, makan, kua" />
          </FormGroup>
          <Button onClick={this.submit}>Submit</Button>
        </Form>
        <div className="text-white" style={{ marginTop: 10 }}>{resJson}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stockMovie: state.stockMovie,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(Anagram);
