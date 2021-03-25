import React from 'react'

class SelectPlace extends React.Component{
    state = {
        startSearch: false,
        numberCitiesToShow: 10
    }

    generatePlacesList = () => {
        let {apiCitiesData, weatherQuery, getDataFromApi} = this.props.data

        if (typeof apiCitiesData !== 'object' || apiCitiesData[0] === undefined)
            return <p> Nothing found </p>
            // Todo format this text

        // Limit cities to show
        apiCitiesData = apiCitiesData.slice(0, this.state.numberCitiesToShow)

        const selectCityAction = (event) => {
            getDataFromApi(weatherQuery, event)
            this.setState({startSearch: false})
        }

        const citesListElements = apiCitiesData.map(city=>
            <li
                key={city.woeid}
                data-key={city.woeid}
                onClick={(event) => selectCityAction(event)}
            >
                {city.title}
            </li>
        )

        return (citesListElements)
    }

    render() {
        const { inputValue, getDataFromApi,
                handleChange, cityNameQuery,
                isRunningApiCitiesRequest, apiCitiesData} = this.props.data

        const whetherRequestSent = this.state.startSearch === true

        const citesListElements = whetherRequestSent ? this.generatePlacesList() : ''
        const notShownCitiesElements = apiCitiesData !== undefined ? apiCitiesData.length - this.state.numberCitiesToShow : false

        const searchButtonAction = (event) => {
            this.setState({startSearch: true})
            getDataFromApi(cityNameQuery, event)
        }

        return (
            <div>
                {/* SEARCH ENGINE */}
                <div>
                    {/* todo add validation (look input isn't empty) before send */}
                    <input
                        type="text"
                        name='searchCity'
                        placeholder="search location"
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <button
                        onClick={(event) => searchButtonAction(event) }
                    >
                        Search
                    </button>
                </div>

                {/* NUMBER OF NOT SHOWN CITIES */}
                {
                    notShownCitiesElements > 0
                    && <p>We hide {notShownCitiesElements} cities</p>
                }

                {/* LIST OF CITIES */}
                <ul>
                    {
                        !isRunningApiCitiesRequest
                        ? citesListElements
                        : <p>Loading data</p>
                    }
                </ul>
            </div>
        )
    }
}

export default SelectPlace