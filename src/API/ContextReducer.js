
export const initialState = {
    country: [],
    confirmed: '',
    recovered: '',   
    deaths: '',
    lastupdate: '',
    DailyData: [],
    selectedCountry: '',
    Error: '',

}

const FetchingDaily_Api = 'FetchingDaily_Api'
const Api_Fetched = 'Api_Fetched'
const Fetching_Failed = 'Fetching_Failed'
const Fetch_Countries = 'Fetch_Countries'
const Selected_Country = 'Selected_Country'

export const FetchingDaily = {
    type : FetchingDaily_Api,
}

export const Fetched = {
    type: Api_Fetched
}

export const Countries = {
    type: Fetch_Countries
}

export const GetCountry = {
    type: Selected_Country
}

export const Failed = {
    type: Fetching_Failed
}



const reducer = (state, action) => {
    switch (action.type) {
        case FetchingDaily.type:
            return { ...state, DailyData: action.DailyData}

        case Fetched.type:
            return {...state, confirmed: action.confirmed, recovered: action.recovered, deaths: action.deaths, lastupdate: action.lastUpdate}

        case Countries.type:
                return{...state, country: action.Countries}

        case GetCountry.type:
            return{...state, selectedCountry: action.chosenCountry }         
            
        case Failed.type:{
            return {...state, Error: action.Error}
        }

        default:
            return state;
    }
}

export default reducer