import React, {useState} from 'react';

function MyComponent() {

    const [name, setName] = useState();
    const [payment, setPayment] = useState();
    const handleClick = (e) => {
        setName(e.target.value)
    };
    const ppayment = (e) => {
        setPayment(e.target.value)
    };
    return (
        <div>
            <input
                value={name} onChange={handleClick }></input>
                <p>Name:{name}</p>
                <select value ={payment} onChange={ppayment}>
                    <option value="credit">Credit Card</option>
                    <option value="debit">Debit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank">Bank Transfer</option>
                </select>
                <p>Payment Method: {payment}</p>
        </div>
  );
}
export default MyComponent;