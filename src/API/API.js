import axios from 'axios'
import { useEffect } from 'react'
import {useStateValue} from './ContextApi'
import {Fetched} from './ContextReducer'
import {Failed} from './ContextReducer'
import {FetchingDaily} from './ContextReducer'
import {Countries} from './ContextReducer'

export function API() {

    const url = 'https://covid19.mathdro.id/api'

        const [{selectedCountry}, dispatch] = useStateValue()

        console.log(selectedCountry)
        
        useEffect(() => {
            const FetchAPI = async () =>{
                try {
                    
                const {data: {confirmed,recovered,deaths, lastUpdate}} = await axios.get( selectedCountry === 'Global'? url : `${url}/countries/${selectedCountry}`)
                console.log(lastUpdate)
                dispatch({
                    type: Fetched.type,
                    confirmed: confirmed.value,
                    recovered: recovered.value,   
                    deaths: deaths.value,
                    lastUpdate: lastUpdate
                })
                
                }
                catch (error) {
                    console.log(error)
                    dispatch({
                        type: Failed,
                        Error: Error
                    })
                }
            }
        FetchAPI()

            const FetchingDailyData = async () =>{
            
                try {
                    const {data} = await axios.get(`${url}/daily`)
                    // console.log(data)
                    dispatch({
                        type: FetchingDaily.type,
                        DailyData: data
                    })
                } catch (error) {
                    console.log(error)
                    dispatch({
                        type: Failed.type,
                        Error: error
                    })
                }
    
            }
            FetchingDailyData()

            const Fetch_Countries = async () => {
                try {
                    const {data: {countries}} = await axios.get(`${url}/countries`)
                    // console.log(countries)
                    dispatch({
                        type: Countries.type,
                        Countries: countries
                    })
                } catch (error) {
                    dispatch({
                        type: Failed.type,
                        Error: error
                    })
                }
            }
            Fetch_Countries()

        },[dispatch, selectedCountry])

}



    



    
            



         