import React from 'react';
import './App.css';
import SelectPlace from "./components/SelectPlace";

class App extends React.Component{
    constructor() {
        super()
        this.getDataFromApi = this.getDataFromApi.bind(this)
        this.cityNameQuery = this.cityNameQuery.bind(this)
        this.weatherQuery = this.weatherQuery.bind(this)
    }

    state = {
        apiAddress: '/api/location/',
        apiWeatherData : [],
        isRunningApiWeatherRequest: false,

        apiCitiesData : [],
        isRunningApiCitiesRequest: false,
        searchCity : '',
    }

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
    /////////////////////////////////////

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render(){
        // Todo load weather data animation
        const SelectLocalizationPack = {
            inputValue : this.state.searchCity,
            apiCitiesData: this.state.apiCitiesData,
            isRunningApiCitiesRequest: this.state.isRunningApiCitiesRequest,
            handleChange: this.handleChange,
            getDataFromApi: this.getDataFromApi,
            cityNameQuery: this.cityNameQuery,
            weatherQuery: this.weatherQuery,
        }

        return (
            <div className="App">
                <SelectPlace data={SelectLocalizationPack}/>

            </div>
        )
    }
}

export default App;
