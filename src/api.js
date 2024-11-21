//api key - 9f4052ad87674321a30e712a182b17fa

const api_key = "9f4052ad87674321a30e712a182b17fa";

//Base url

//base url
const base_url = "https://api.rawg.io/api/";

// getting current dates
const getMonth = () => {
    const month  = new Date().getMonth() + 1;
    if(month < 10) return `0${month}`;
    else return month;

};

const getDay = () => {
    const day = new Date().getDate();
    if (day<10) return `0${day}`;
    else return day;
}

const currentYear = new Date().getFullYear();
const currentMonth = getMonth();
const currentDay = getDay();
const currentDate = `${currentYear }-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear -1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear -2}-${currentMonth}-${currentDay}`;

//popular games
const popular_games = `games?key=${api_key}fa&dates=${lastYear},${currentDate}&ordering=rating&page_size`;

export const popularGames = () => {
    return `${base_url}${popular_games}`
}
