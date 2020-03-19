import React, { Component } from 'react';
import './list.css';

class List extends Component {
    constructor(props) {
        super(props);

    }

    handleacctnameChange(accttype) {
        this.props.onaccChange(accttype.target)
    }

    handleChange(tratype) {
        this.props.ontraChange(tratype.target)
    }

    handleChild(event) {
        this.props.onChildShow(event.target);
    }

    render() {
        const details = this.props.values;
        const type = this.props.transtype;
        const acct = this.props.accttype;
        const acctType = acct.map((data) => (<li><input type="radio" value={data} name="acctype" onChange={(event) => this.handleacctnameChange(event)} />{data}</li>));
        const listType = type.map((data) => (<li><input type="radio" value={data} name="trtype" onChange={(event) => this.handleChange(event)} />{data}</li>));
        const listItems = details.map((data) => (<tr key={data.account}>
            <td ><input type="label" className="pointer" name={data.account} value={data.account} onClick={(event) => this.handleChild(event)} /></td>
            <td>{data.accountName}</td>
            <td>{data.currencyCode}</td>
            <td>{data.amount}</td>
            <td>{data.transactionType}</td>
        </tr>
        ));
        return (
            <div>
                <div className="header">
                    My Transactions
                    <hr className="black"></hr>
                </div>

                <div className="row">
                    <div className="col-3">
                        <div className="blk">Filters</div>
                        <ul className="background">
                            <span className="blk">Account Name</span>
                            {acctType}
                        </ul>
                        <ul className="background">
                            <span className="blk">Transaction Type</span>
                            {listType}
                        </ul>
                    </div>
                    <div className="col-9">
                        <table className="gap">
                            <thead className="gap">
                                <tr>
                                    <th>Account No</th>
                                    <th>Account name</th>
                                    <th>Currency</th>
                                    <th>Amount</th>
                                    <th>Transaction type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listItems}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        );
    }

}
export default List;