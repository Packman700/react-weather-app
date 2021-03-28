import React from 'react'
import Button from "styled-components/buttons/Button";
import FormatInputText from "styled-components/input/InputText";
import FlexRowCenter from "styled-components/position/FlexAlign";
import FlexColumnCenter from "styled-components/position/FlexColumnCenter";

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
            <FlexColumnCenter width="366px">
                {/* SEARCH ENGINE */}
                <FlexRowCenter width="366px">
                    {/* todo add validation (look input isn't empty) before send */}
                    <FormatInputText searchIcon>
                        <input
                            type="text"
                            name='searchCity'
                            placeholder="search location"
                            autoComplete="off"
                            value={inputValue}
                            onChange={handleChange}
                        />
                    </FormatInputText>
                    <Button
                        onClick={(event) => searchButtonAction(event)}
                    >
                        Search
                    </Button>
                </FlexRowCenter>

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
            </FlexColumnCenter>
        )
    }
}

export default SelectPlace