import React from 'react'
import Button from "styled-components/buttons/Button";
import FormatInputText from "styled-components/input/InputText";
import FlexRowCenter from "styled-components/position/FlexAlign";
import FlexColumnCenter from "styled-components/position/FlexColumnCenter";
import Small from "styled-components/small/Small";
import FreeSpace from "styled-components/position/FreeSpace";
import Ul from "styled-components/ul/Ul";
import CityListItem from "styled-components/li/CityListItem";

class SelectPlace extends React.Component{
    state = {
        startSearch: false,
        numberCitiesToShow: 6
    }

    generatePlacesList = () => {
        let {apiCitiesData, weatherQuery, getDataFromApi} = this.props.data

        if (typeof apiCitiesData !== 'object' || apiCitiesData[0] === undefined)
            return []
            // Todo format this text

        // Limit cities to show
        apiCitiesData = apiCitiesData.slice(0, this.state.numberCitiesToShow)

        const selectCityAction = (event) => {
            getDataFromApi(weatherQuery, event)
            this.setState({startSearch: false})
        }

        const citesListElements = apiCitiesData.map(city=>
            <CityListItem
                key={city.woeid}
                data-key={city.woeid}
                onClick={(event) => selectCityAction(event)}
            >
                {city.title}
            </CityListItem>
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
            <FlexColumnCenter width="366px" >
                {/* SEARCH ENGINE */}
                <FlexRowCenter width="366px" mb="25px">
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


                {/* LIST OF CITIES */}
                <Ul>
                    {
                        !isRunningApiCitiesRequest
                        && citesListElements
                    }
                </Ul>

                {/* Reaction to all possible data state */}
                {
                    isRunningApiCitiesRequest
                    ? <Small mb="2px">Loading data</Small>
                    : notShownCitiesElements > 0
                        ? <Small mb="12px">We hide {notShownCitiesElements} cities</Small>
                        : citesListElements.length === 0 && this.state.startSearch
                            ? <Small mb="2px"> Nothing found </Small>
                            : <FreeSpace mb="12px"/>
                }
            </FlexColumnCenter>
        )
    }
}

export default SelectPlace