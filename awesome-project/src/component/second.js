import React, { Component } from 'react';


class Second extends Component {
    constructor(props) {
        super(props);

    }
  
    render() {
        const details = this.props.values[0];

        return (
            <div>
                <div className="header">
                    My Transactions
                    <hr className="black"></hr>
                </div>

                <div className="row">
                    <div className="col-12">
                        Account: <span>{details.account}</span></div>
                    <div className="col-12">
                        Account name: <span>{details.accountName}</span></div>
                    <div className="col-12">
                        Currency code: <span>{details.currencyCode}</span></div>
                    <div className="col-12">
                        Amount: <span>{details.amount}</span></div>
                    <div className="col-12">
                        Transaction type: <span>{details.transactionType}</span></div>



                </div>

            </div>

        );
    }

}
export default Second;