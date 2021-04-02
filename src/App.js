import React from 'react';
// COMPONENTS
import SelectPlace from "components/SelectPlace";
import TodayWeather from "components/TodayWeather";
import WeatherForecastCards from "components/WeatherForecastCards";
import SwitchTemperatureScale from "components/SwitchTemperatureScale";
import TodayHighlights from "components/TodayHighlights";
// FUNCTIONS
import stringToBool from "helpers/stringToBool";
// STYLED COMPONENTS
import Layout from "layout/Layout";
import StyledAside from "styled-components/StyledAside";
import StyledMain from "styled-components/StyledMain";
import SearchGreyButton from "styled-components/buttons/SearchGreyButton";
import LocationButton from "styled-components/buttons/LocationButton";
import FlexRowCenter from "styled-components/position/FlexRowCenter";

class App extends React.Component{
    constructor() {
        super()
        this.getDataFromApi = this.getDataFromApi.bind(this)
        this.cityNameQuery = this.cityNameQuery.bind(this)
        this.weatherQuery = this.weatherQuery.bind(this)
        // this.latLongQuery = this.latLongQuery.bind(this)
    }

    state = {
        apiAddress: '/api/location/',
        apiWeatherData : [],
        isRunningApiWeatherRequest: false,

        apiCitiesData : [],
        isRunningApiCitiesRequest: false,
        searchCity : '',

        temperatureScale: 'c',
        isSelectPlaceActive: true
    }

    // async componentDidMount() {
    //     if ("geolocation" in navigator) {
    //         navigator.geolocation.getCurrentPosition(function(position) {
    //             const {latitude:lat, longitude:long} = position.coords
    //             console.log(lat, long)
    //         })
    //         await this.getDataFromApi(this.latLongQuery)
    //     } else {
    //         console.log("Not Available");
    //     }
    // }


    ///////// GET DATA FROM API /////////
    async getDataFromApi (queryFunction, event){ // 'query', 'lattlong'
        // Api request
        const [response, storeLocalization] = await queryFunction(event)

        // Save data to state
        try {
            if (response.status === 200 && response.ok === true){
                const apiData = await response.json()
                this.setState({[storeLocalization] : apiData})
                console.log('Success get data')
            } else
                return Error(`Failed connect to API: ${response.status} ${response.statusText}`)
        } catch (error) {
            console.error(error)
        }

    }

    async cityNameQuery(){
        const {apiAddress, searchCity} = this.state

        this.setState({isRunningApiCitiesRequest:true})
        const apiResponse = await fetch(`${apiAddress}search/?query=${searchCity.trim()}`)
        this.setState({isRunningApiCitiesRequest:false})

        return [apiResponse, 'apiCitiesData']
    }

    async weatherQuery(event){
        // Restart search engine data
        this.setState({searchCity:'', apiCitiesData:''})

        const key = event.target.dataset.key
        const apiAddress = this.state.apiAddress

        this.setState({isRunningApiWeatherRequest:true})
        const apiResponse = await fetch(`${apiAddress}${key}/`)
        this.setState({isRunningApiWeatherRequest:false})

        return [apiResponse, 'apiWeatherData']
    }

    // async latLongQuery(lat, long){
    //     const {apiAddress} = this.state
    //
    //     this.setState({isRunningApiCitiesRequest:true})
    //     const apiLatLongResponse = await fetch(`${apiAddress}search/?lattlong=51.919438,19.145136`)
    //     this.setState({isRunningApiCitiesRequest:false})
    //     const woeid = await apiLatLongResponse.json()[0].woeid
    //
    //     await this.getDataFromApi()
    //     console.log(jsonResponse)
    //     return [apiResponse, 'apiCitiesData']
    // }

    /////////////////////////////////////

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: stringToBool(value)})
    }

    //////////// TEMPERATURE ////////////

    convertTemperature = (centigradeTemperature) => {
        // Output => [TemperatureInSelectedScale, SelectedScaleMark]
        if (this?.state?.temperatureScale === undefined) return Error("No data in temperatureScale stata")
        if (centigradeTemperature === undefined) return Error("convertTemperature don't get any parameter")

        centigradeTemperature = parseFloat(centigradeTemperature)
        if (this.state.temperatureScale === "c") return [Math.round(centigradeTemperature), '°C']
        if (this.state.temperatureScale === "f") return [Math.round(centigradeTemperature * 9/5) + 32, '°F']
    }

    render(){
        // Todo load weather data animation
        const selectLocalizationPack = {
            inputValue : this.state.searchCity,
            apiCitiesData: this.state.apiCitiesData,
            isRunningApiCitiesRequest: this.state.isRunningApiCitiesRequest,
            handleChange: this.handleChange,
            getDataFromApi: this.getDataFromApi,
            cityNameQuery: this.cityNameQuery,
            weatherQuery: this.weatherQuery,
        }

        return (
            <Layout>
                {/*<span className="material-icons">face</span>*/}

                <StyledAside as="aside">
                    {this.state.isSelectPlaceActive
                    && <SelectPlace data={selectLocalizationPack}/>
                    }

                    <FlexRowCenter mt="13px" mb="52px" width="366px">
                        <SearchGreyButton onClick={() => this.setState({isSelectPlaceActive: true})}>
                            Search for places
                        </SearchGreyButton>
                        <LocationButton/> {/* Add onclick here */}
                    </FlexRowCenter>

                    <TodayWeather
                        data={this.state.apiWeatherData}
                        convertTemperature={this.convertTemperature}/>
                </StyledAside>
                <StyledMain>
                    <SwitchTemperatureScale
                        data={{
                            handleChange: this.handleChange,
                            selectedTemperatureScale: this.state.temperatureScale
                        }}/>
                    <WeatherForecastCards
                        data={this.state.apiWeatherData}
                        convertTemperature={this.convertTemperature}/>

                    <TodayHighlights data={this.state.apiWeatherData}/>
                </StyledMain>
            </Layout>
        );
    }
}

export default App;
