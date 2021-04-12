import React from 'react'
// COMPONENTS
import SelectPlace from 'components/SelectPlace'
import TodayWeather from 'components/TodayWeather'
import WeatherForecastCards from 'components/WeatherForecastCards'
import SwitchTemperatureScale from 'components/SwitchTemperatureScale'
import TodayHighlights from 'components/TodayHighlights'
import LoadingWeatherData from 'components/LoadingWeatherData'
// FUNCTIONS
import stringToBool from 'helpers/stringToBool'
import getLatLong from 'helpers/getLatLong'
// STYLED COMPONENTS
import Layout from 'layout/Layout'
import StyledAside from 'styled-components/StyledAside'
import StyledMain from 'styled-components/StyledMain'
import SearchGreyButton from 'styled-components/buttons/SearchGreyButton'
import LocationButton from 'styled-components/buttons/LocationButton'
import FlexRowCenter from 'styled-components/position/FlexRowCenter'
import Small from 'styled-components/small/Small'
import CloudIcon from './styled-components/icon/CloudIcon'

const CORS_ANYWHERE_PREFIX = 'https://cors-anywhere.herokuapp.com/'
const API_ADDRESS = 'www.metaweather.com/'
const PREFIX = CORS_ANYWHERE_PREFIX + API_ADDRESS

class App extends React.Component {
    constructor() {
        super()
        this.getDataFromApi = this.getDataFromApi.bind(this)
        this.cityNameQuery = this.cityNameQuery.bind(this)
        this.weatherQuery = this.weatherQuery.bind(this)
        // prettier-ignore
        this.currentLocationQueryProcedure = this.currentLocationQueryProcedure.bind(this)
        // prettier-ignore
        this.getWeoidFromCurrentLocation = this.getWeoidFromCurrentLocation.bind(this)
    }

    state = {
        // apiAddress: PREFIX + 'api/location/', // Production with cros-anyware
        apiAddress: 'api/location/', // Develop with http-proxy-middleware
        apiWeatherData: [],
        isRunningApiWeatherRequest: false,

        apiCitiesData: [],
        isRunningApiCitiesRequest: false,
        searchCity: '',

        temperatureScale: 'c',
        isSelectPlaceActive: false,
    }

    async componentDidMount() {
        await this.currentLocationQueryProcedure()
    }

    ///////// GET DATA FROM API /////////
    async getDataFromApi(queryFunction, event) {
        const [response, storeLocalization] = await queryFunction(event)
        // Save data to state
        try {
            if (response.status === 200 && response.ok === true) {
                const apiData = await response.json()
                this.setState({ [storeLocalization]: apiData })
            } else
                return Error(
                    `Failed connect to API: ${response.status} ${response.statusText}`
                )
        } catch (error) {
            console.error(error)
        }
    }

    async cityNameQuery() {
        const { apiAddress, searchCity } = this.state

        this.setState({ isRunningApiCitiesRequest: true })
        const apiResponse = await fetch(
            `${apiAddress}search/?query=${searchCity.trim()}`
        )
        this.setState({ isRunningApiCitiesRequest: false })

        return [apiResponse, 'apiCitiesData']
    }

    async weatherQuery(event) {
        // Restart search engine data
        this.setState({ searchCity: '', apiCitiesData: '' })

        const key = event.target.dataset.key
        const apiAddress = this.state.apiAddress

        this.setState({ isRunningApiWeatherRequest: true })
        const apiResponse = await fetch(`${apiAddress}${key}/`)
        this.setState({ isRunningApiWeatherRequest: false })

        return [apiResponse, 'apiWeatherData']
    }

    async currentLocationQueryProcedure() {
        this.setState({ isRunningApiWeatherRequest: true })
        const woeid = await this.getWeoidFromCurrentLocation()
        const fakeEvent = { target: { dataset: { key: woeid } } }
        await this.getDataFromApi(await this.weatherQuery, fakeEvent)
    }

    ////RELATED TO GET DATA FROM API////

    async getWeoidFromCurrentLocation() {
        const { apiAddress } = this.state
        const [lat, long] = await getLatLong()

        this.setState({ isRunningApiCitiesRequest: true })
        const apiLatLongResponse = await fetch(
            `${apiAddress}search/?lattlong=${lat},${long}`
        )
        this.setState({ isRunningApiCitiesRequest: false })
        const nearestCity = await apiLatLongResponse.json()
        const woeid = await nearestCity[0].woeid

        return woeid
    }

    /////////////////////////////////////

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: stringToBool(value) })
    }

    //////////// TEMPERATURE ////////////

    convertTemperature = centigradeTemperature => {
        // Output => [TemperatureInSelectedScale, SelectedScaleMark]
        if (this?.state?.temperatureScale === undefined)
            return Error('No data in temperatureScale stata')
        if (centigradeTemperature === undefined)
            return Error("convertTemperature don't get any parameter")

        centigradeTemperature = parseFloat(centigradeTemperature)
        if (this.state.temperatureScale === 'c')
            return [Math.round(centigradeTemperature), '°C']
        if (this.state.temperatureScale === 'f')
            return [Math.round((centigradeTemperature * 9) / 5) + 32, '°F']
    }

    render() {
        // Todo load weather data animation
        const selectLocalizationPack = {
            inputValue: this.state.searchCity,
            apiCitiesData: this.state.apiCitiesData,
            isRunningApiCitiesRequest: this.state.isRunningApiCitiesRequest,
            handleChange: this.handleChange,
            getDataFromApi: this.getDataFromApi,
            cityNameQuery: this.cityNameQuery,
            weatherQuery: this.weatherQuery,
        }

        return (
            <Layout>
                {this.state.isRunningApiWeatherRequest && (
                     <LoadingWeatherData />
                )}

                <StyledAside as='aside'>
                    {this.state.isSelectPlaceActive && (
                        <SelectPlace data={selectLocalizationPack} />
                    )}

                    <CloudIcon size="176px" left1="-5%" top="16%" right2="84%"/>
                    <CloudIcon size="215px" left1="-4%" top="45%" right2="80%"/>
                    <CloudIcon size="176px" left1="25%" top="32%" left2="80%"/>
                    <CloudIcon size="127px" left1="27%" top="62%" left2="84%"/>

                    <FlexRowCenter mb='52px' width='366px'>
                        <SearchGreyButton
                            onClick={() =>
                                this.setState({ isSelectPlaceActive: true })
                            }
                        >
                            Search for places
                        </SearchGreyButton>
                        <LocationButton
                            onClick={this.currentLocationQueryProcedure}
                        />
                    </FlexRowCenter>

                    <TodayWeather
                        data={this.state.apiWeatherData}
                        convertTemperature={this.convertTemperature}
                    />
                </StyledAside>

                <StyledMain>
                    <SwitchTemperatureScale
                        data={{
                            handleChange: this.handleChange,
                            selectedTemperatureScale: this.state
                                .temperatureScale,
                        }}
                    />

                    <WeatherForecastCards
                        data={this.state.apiWeatherData}
                        convertTemperature={this.convertTemperature}
                    />

                    <TodayHighlights data={this.state.apiWeatherData} />

                    <Small style={{ alignSelf: 'center', marginTop: '22px' }}>
                        Created by Packman700
                    </Small>
                </StyledMain>
            </Layout>
        )
    }
}

export default App
