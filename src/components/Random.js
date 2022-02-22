import('./Random.css')
function Random (props) {


    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    return (
        <div className="random">
            <p>Random value between {props.min} and {props.max} :: {getRandomNumber(props.min, props.max)}</p>
        </div>
    )
}

export default Random