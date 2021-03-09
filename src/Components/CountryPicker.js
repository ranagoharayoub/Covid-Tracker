import { FormControl, NativeSelect } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import {useStateValue} from '../API/ContextApi'
import './CountryPicker.css'
import {GetCountry} from '../API/ContextReducer'


function CountryPicker() {

    const [{country}, dispatch] = useStateValue()

    const [state, setstate] = useState('Global')
    useEffect(() => {
        dispatch({
            type: GetCountry.type,
            chosenCountry: state
        })
    }, [state,dispatch])

    // console.log(state)
    return (
        <div className='country-cont'>
            <FormControl >
                <NativeSelect value={state} onChange={e => setstate(e.target.value)}>
                    <option value='Global'>Global</option>
                    {country.map(({name},i) => <option key={i} value={name}>{name}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
