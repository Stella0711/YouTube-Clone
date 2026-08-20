export const API_KEY = 'AIzaSyCYSVW4rXX9KyjVZ3X5Nb3LHKiT3bYXDsE';

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
