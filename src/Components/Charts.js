import React from 'react'
import {useStateValue} from '../API/ContextApi'
import 'chart.js'
import 'react-chartjs-2'
import { Bar, Line } from 'react-chartjs-2'
import style from './Charts.module.css'


function Charts() {

    const [{DailyData,confirmed,recovered,deaths,selectedCountry} , dispatch] = useStateValue()



    // const death = (DailyData.map(death => ({
    //     death: DailyData.deaths.total
    // })) )

    const dailydeath = DailyData.map(confirm => confirm.deaths)
    // console.log(dailydeath.map(death => death.total))


    const linechart = DailyData[0]? (<Line 
        data={{
        labels: DailyData.map(date => date.reportDate),
        datasets: [
            {   label: 'Infected',
                data: DailyData.map(confirmed => confirmed.totalConfirmed),
                borderColor: 'darkred',
                // backgroundColor: 'rgba(0,0,255,0.5)',
                fill: true
        },
        {
                label: 'Deaths',
                data:  dailydeath.map(death => death.total) ,
                borderColor: 'dimgray',
                backgroundColor: 'rgba(105, 105 , 105 , 0.5)',
                fill: true
        }],

    }}></Line>) : null

    const bargraph = confirmed? (<Bar

        data={{
            labels: ['infected', 'Recovered', 'Deaths'],
            datasets: [{
                label: 'People',
                data: [confirmed, recovered, deaths],
                backgroundColor: ['darkred', 'darkslateblue', 'gray']
            }]

        }}
        options={{
            legend: {display: false},
            title: {display: true, text: `Current situation in ${selectedCountry}`}
        }}
    ></Bar>)
    :
    null

    return (
        <div className={style.container}>
            {selectedCountry==='Global'?
                linechart
                :
                bargraph  
        }
        </div>
    )
}

export default Charts
