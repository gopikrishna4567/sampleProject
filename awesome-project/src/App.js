import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './component/list';
import Second from './component/second';

class App extends Component {
  transmission = ''
  constructor(props) {
    super(props);

    this.state = {
      transmissoinData: [], acct: [], transtype: [], acctType: '',
      transType: '', childshow: false
    };
    const URL = "../list.json";
    let data = fetch(URL, { method: 'GET' })
      .then(response => Promise.all([response, response.json()]));
    data.then((data) => {
      this.setState({ transmissoinData: data[1].transactions })
      this.finalData = data[1].transactions;
      let type = [];
      let acct = [];
      let transtype = this.state.transmissoinData;
      transtype.map((e) => {
        if (!type.includes(e.transactionType)) {
          type.push(e.transactionType);
        }
        if (!acct.includes(e.accountName)) {
          acct.push(e.accountName);
        }
      })
      this.state = { transmissoinData: [], acct: [], transtype: [] };
      this.setState({ transtype: type, acct: acct });
    })

  }

  filterAccount(accountype) {
    this.setState({
      acctType: accountype.value
    })
    let data = this.finalData;
    let filteredData = data.filter((e) => {

      return this.state.transType ? e.accountName == accountype.value && e.transactionType == this.state.transType : e.accountName == accountype.value;
    })
    this.setState({
      transmissoinData: filteredData
    })
  }

  filterType(transactionType) {
    let temArr = []

    this.setState({
      transType: transactionType.value
    })
    let data = this.finalData;
    let filteredData = data.filter((e) => {

      return this.state.acctType ? e.transactionType == transactionType.value && e.accountName == this.state.acctType : e.transactionType == transactionType.value;
    })
    this.setState({
      transmissoinData: filteredData
    })
  }

  childshowCall(data) {
    let temData = this.state.transmissoinData;

    this.childDaata = temData.filter((e) => {
      return e.account == data.name;
    })
    this.setState({
      childshow: true
    })
  }
  render() {
    let elementshow
    if (this.state.childshow) {
      elementshow = <Second values={this.childDaata}></Second>
    }
    else {
      elementshow = <List values={this.state.transmissoinData} transtype={this.state.transtype} accttype={this.state.acct} ontraChange={this.filterType.bind(this)} onaccChange={this.filterAccount.bind(this)} onChildShow={this.childshowCall.bind(this)}></List>
    }
    return (
      <div className="App container" >
        {elementshow}
      </div>
    );
  }
}

export default App;
