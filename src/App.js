import React from 'react';
import './App.css';
import SelectForPlaces from "./components/SelectForPlaces";
import {falseAndTrueStringToBool} from './helpers'

class App extends React.Component{
    constructor() {
        super()
        this.getDataFromApi = this.getDataFromApi.bind(this)
    }

    state = {
        apiAddress: '/api/location/search/?',
        apiData : {},
        searchCity : 's',
    }

    async getDataFromApi (event){ // 'query', 'lattlong'
        const {apiAddress, searchCity} = this.state
        const isLattlongQuery = falseAndTrueStringToBool(event.target.dataset.isLattlongQuery)

        let response
        if (!isLattlongQuery)
            response = await fetch(`${apiAddress}query=${searchCity}`)
        if (isLattlongQuery)
            console.log('.....')
            // Fill this later

        try {
            if (response.status === 200 && response.ok === true){
                const apiData = await response.json()
                this.setState(apiData)
                console.log('Succes get data')
            } else
                return Error(`Failed connect to API: ${response.status} ${response.statusText}`)
        } catch (error) {
            console.error(error)
        }

    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render(){
        const SelectLocalizationPack = {
            inputValue : this.state.searchCity,
            handleChange: this.handleChange,
            getDataFromApi: this.getDataFromApi
        }
        return (
            <div className="App">
                <SelectForPlaces data={SelectLocalizationPack}/>

            </div>
        )
    }
}

export default App;
