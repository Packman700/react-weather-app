import React from 'react'
import SearchBlueButton from 'styled-components/buttons/SearchBlueButton'
import FormatInputText from 'styled-components/input/InputText'
import FlexRowCenter from 'styled-components/position/FlexRowCenter'
import FlexColumnCenter from 'styled-components/position/FlexColumnCenter'
import Small from 'styled-components/small/Small'
import FreeSpace from 'styled-components/position/FreeSpace'
import Ul from 'styled-components/ul/Ul'
import CityListItem from 'styled-components/li/CityListItem'
import CloseButton from 'styled-components/buttons/CloseButton'
import StyledSelectPlace from 'styled-components/StyledSelectPlace'

class SelectPlace extends React.Component {
    state = {
        startSearch: false,
        numberCitiesToShow: 5,
    }

    /// GENERATE LIST OF CITIES ///
    generatePlacesList = () => {
        let {
            apiCitiesData,
            weatherQuery,
            getDataFromApi,
            handleChange,
        } = this.props.data

        if (typeof apiCitiesData !== 'object' || apiCitiesData[0] === undefined)
            return [] // This empty is important!
        // Todo format this text

        // Limit cities to show
        apiCitiesData = apiCitiesData.slice(0, this.state.numberCitiesToShow)

        // On click event
        const selectCityAction = event => {
            getDataFromApi(weatherQuery, event)
            this.setState({ startSearch: false })

            // Modify event.target to hide SelectPlace after chose city
            event.target = { name: 'isSelectPlaceActive', value: false }
            handleChange(event)
        }

        // List of item to return
        return apiCitiesData.map(city => (
            <CityListItem
                key={city.woeid}
                data-key={city.woeid}
                onClick={event => selectCityAction(event)}
            >
                {city.title}
            </CityListItem>
        ))
    }

    render() {
        const {
            inputValue,
            getDataFromApi,
            handleChange,
            cityNameQuery,
            isRunningApiCitiesRequest,
            apiCitiesData,
        } = this.props.data

        const weatherRequestSent = this.state.startSearch === true

        const citesListElements = weatherRequestSent
            ? this.generatePlacesList()
            : ''
        const notShownCitiesElements =
            apiCitiesData !== undefined
                ? apiCitiesData.length - this.state.numberCitiesToShow
                : false

        const searchButtonAction = event => {
            this.setState({ startSearch: true })
            getDataFromApi(cityNameQuery, event)
        }

        return (
            <StyledSelectPlace>
                <FlexColumnCenter width='366px'>
                    {/* CLOSE BUTTON */}
                    <FlexRowCenter
                        mb='13px'
                        mt='13px'
                        justifyContent='flex-end'
                    >
                        <CloseButton
                            name='isSelectPlaceActive'
                            value='false'
                            onClick={handleChange}
                        />
                    </FlexRowCenter>

                    {/* SEARCH ENGINE */}
                    <FlexRowCenter mb='25px'>
                        {/* todo add validation (look input isn't empty) before send */}
                        <FormatInputText searchIcon>
                            <input
                                type='text'
                                name='searchCity'
                                placeholder='search location'
                                autoComplete='off'
                                value={inputValue}
                                onChange={handleChange}
                                onKeyUp={(event => {event.keyCode === 13 && searchButtonAction(event)})}
                            />
                        </FormatInputText>
                        <SearchBlueButton
                            onClick={event => searchButtonAction(event)}
                        >
                            Search
                        </SearchBlueButton>
                    </FlexRowCenter>

                    {/* LIST OF CITIES */}
                    <Ul>{!isRunningApiCitiesRequest && citesListElements}</Ul>

                    {/* Reaction to all possible data state */}
                    {isRunningApiCitiesRequest ? (
                        <Small mb='2px'>Loading data</Small>
                    ) : notShownCitiesElements > 0 ? (
                        <Small mb='12px'>
                            We hide {notShownCitiesElements} cities
                        </Small>
                    ) : citesListElements.length === 0 &&
                      this.state.startSearch ? (
                        <Small mb='2px'> Nothing found </Small>
                    ) : (
                        <FreeSpace mb='12px' />
                    )}
                </FlexColumnCenter>
            </StyledSelectPlace>
        )
    }
}

export default SelectPlace
