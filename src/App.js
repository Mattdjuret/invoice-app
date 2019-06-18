import React, { Component } from 'react';
import Swal from 'sweetalert2'
import NavBar from './components/NavBar'
import Alert from './components/Alert'
import Invoice from './components/Invoice'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      invoices: [],
      isLoading: false
    }
    this.checkPassedDueDate = this.checkPassedDueDate.bind(this)    
    this.handlePayment = this.handlePayment.bind(this)
  }
  componentDidMount() {
    this.setState({ isLoading: true })
    const url = 'http://localhost:3001/invoices?invoiceId=1'

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ invoices: data, isLoading: false }, () => {
          this.checkPassedDueDate(this.state.invoices[0].payBy)
        })
      })
  }
  checkPassedDueDate(payBy) {
    let payDate = new Date(payBy)
    payDate.setDate(payDate.getDate() + 1) //add one day to allow payment at pay day
    const currentDate = new Date()
    return (currentDate > payDate)
  }
  handlePayment(){
    Swal.fire(
      'Good job!',
      'Payment received!',
      'success'
    )
  }
  render() {
    const { invoices, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }
    if (invoices.length !== 1) {
      return null;
    }
    const invoice = invoices[0]
    return (
      <div className="App">
        <NavBar title="Invoice"/>
        {this.checkPassedDueDate(invoice.payBy) &&
        <Alert
          alertText={['This invoice is now ',<strong key="passedDueAlertText">past due</strong>,'. Please remit immediately']}
          bsColorClass='alert-secondary'
          showCloseBtn={true}/>}
        <Invoice invoice={invoice} handlePayment={this.handlePayment}/>        
      </div>
    );
  }
}

export default App;
