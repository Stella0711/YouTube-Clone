export const API_KEY = 'AIzaSyCYSVW4rXX9KyjVZ3X5Nb3LHKiT3bYXDsE';

const value_converter = (value) =>{
    if(value>=1000000)
        {
        return Math.floor(value/1000000)
        }
    else if(value=1000)

        return Math.floor(value/1000)+"K";
    };
