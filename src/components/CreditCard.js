function CreditCard(props) {
    const number = props.number.slice(-4)
    let expiryDate;
    
    if (props.expirationMonth < 10) {
        expiryDate = `0${props.expirationMonth}/${props.expirationYear.toString().slice(-2)}`
    } else {
        expiryDate = `${props.expirationMonth}/${props.expirationYear.toString().slice(-2)}`
    }
    
    // console.log('credit card props: ', props)
    // console.log('number ', )
    // console.log()
    return (
        <div className="credit-card" style={{backgroundColor: props.bgColor, color:props.color}}>
            <div className="credit-card-type">{props.type}</div>
            <div className="credit-card-number">•••• •••• •••• {number} </div>
            <div className="credit-card-details">Expires {expiryDate} {props.bank}</div>
            <div className="credit-card-owner">{props.owner}</div>
        </div>
    )
}

export default CreditCard