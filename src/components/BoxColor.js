function BoxColor (props) {
    const color = `rgb(${props.r}, ${props.g}, ${props.b})`
    const red = props.r
    const green = props.g
    const blue = props.b

    function colorToHex(color) {
        var hexadecimal = color.toString(16);
        return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
      }
    function convertRGBtoHex(red, green, blue) {
        return "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue);
      }
    return (
        <div style={{backgroundColor:color}} className="box-color">
            <p>{color}</p>
            <p>{convertRGBtoHex(red, green, blue)}</p>
        </div>
    )
}

export default BoxColor