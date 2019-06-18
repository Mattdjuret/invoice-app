import React, { Component } from 'react';

class Invoice extends Component {
    render() {
        const { invoice } = this.props
        return (
            <div className="container my-4">
                <div className="row">
                    <div className="col-12 col-sm-6 mb-3">
                        <div className="text-secondary small">Sender</div>
                        <Address address={{...invoice.sender}} />
                    </div>
                    <div className="col-12 col-sm-6 mb-3">
                        <div className="text-secondary small">Receiver</div>
                        <Address address={{...invoice.receiver}} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <div className="text-secondary small">Invoice date</div>
                        <div>{invoice.invoiceDate}</div>
                    </div>
                    <div className="col text-right">
                        <div className="text-secondary small">Due date</div>
                        <div className="">{invoice.payBy}</div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col px-2">
                        <table className="table table-sm table-dark table-invoice">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th className="text-right">Price</th>
                                    <th className="text-right">VAT</th>
                                    <th className="text-right">Quantity</th>
                                    <th className="text-right">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>{invoice.lines.map((item, index) => {
                                let subtotal = item.qty * item.price
                                return (<tr key={index}>
                                    <td>{item.description}</td>
                                    <td className="text-right">{item.price}</td>
                                    <td className="text-right">{item.vat}</td>
                                    <td className="text-right">{item.qty}</td>
                                    <td className="text-right">{subtotal}</td>
                                </tr>)
                            })}</tbody>
                            <tfoot>
                                <tr>
                                    <th colSpan="4">Total</th>
                                    <th className="text-right">{invoice.totalPrice}</th>
                                </tr>
                                <tr>
                                    <th className="bt-0 small" colSpan="4">Account</th>
                                    <th className="text-right bt-0 small">{invoice.account}</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col text-center">
                        <button className="btn btn-rounded btn-primary px-4" onClick={()=>this.props.handlePayment()}>Pay now</button>
                    </div>
                </div>
            </div>
        )
    }
}
class Address extends Component {
    render() {
        const { address } = this.props
        return <div>
            <div>{address.name}</div>
            <div className="small">
                <div>{address.street}</div>
                <div>{address.city}</div>
                <div>{address.postalcode}</div>
            </div>
        </div>;
    }
}
export default Invoice