import React from 'react'

function SelectForPlaces(props){
    const {inputValue, handleChange, getDataFromApi} = props.data
    return(
        <div>
            <input
                type="text"
                name='searchCity'
                placeholder="search location"
                value={inputValue}
                onChange={handleChange}
            />
            <button
                onClick={getDataFromApi}
                data-is-lattlong-query={false}
            >
                Search
            </button>
        </div>
    )
}

export default SelectForPlaces