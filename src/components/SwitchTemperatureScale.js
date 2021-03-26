import React from "react";

function SwitchTemperatureScale(props){
    // eslint-disable-next-line no-unused-vars
    const {handleChange, selectedTemperatureScale} = props.data
    return(
        <div>
            {/*Todo add some style to recognise with scale is selected*/}
            <button
                onClick={handleChange}
                name="temperatureScale"
                value="c"
            > °C
            </button>

            <button
                onClick={handleChange}
                name="temperatureScale"
                value="f"
            > °F
            </button>
        </div>
    )
}

export default SwitchTemperatureScale