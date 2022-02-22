import('./IdCard.css')

function IdCard(props) {
    console.log(props)
    return(
        <>
        <div className='id-card'>
            <div><img src={props.picture} alt="pictures" /></div>
            <div className='info'>
                <p><strong>First name:</strong> {props.firstName}</p>
                
                <p><strong>Last name: </strong>{props.lastName}</p>
                
                <p><strong>Gender: </strong>{props.gender}</p>
                
                <p><strong>Height: </strong>{props.height}</p>
                
                <p><strong>Birth: </strong>{props.birth.toString()}</p>
                
            </div>
        </div>
        </>
    
    )
   
}

export default IdCard