import('./Greetings.css')

function Greetings (props) {
    function getGreet(language) {
        switch(language) {
            case 'de':
                return 'Hallo';
            case 'fr':
                return 'Bonjour';
            case 'en':
                return 'Hello';
            default:
                return 'Hola';
        }
    }
    //console.log(props)
    return (
        <div className="greetings">
            <h3>{getGreet(props.lang)} {props.children}</h3>
        </div>
    )
}

export default Greetings