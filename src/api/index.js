import axios from "axios";

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(
            "https://covid19.mathdro.id/api/daily"
        );
        const modifiedData = data.map(dailyData => {
            return {
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate
            };
        });
        return modifiedData;
    } catch (error) {
        console.error(error);
        return {
            message: "Some error in fetching Data"
        };
    }
};
export const fetchCountry = async () => {
    try {
        const {
            data: { countries }
        } = await axios.get("https://covid19.mathdro.id/api/countries");
        const fetchedCountries = countries.map(country => country.name);
        return fetchedCountries;
    } catch (error) {
        console.error(error);
        return {
            message: "Some error in fetching Data"
        };
    }
};
export const fetchData = async country => {
    let url = "https://covid19.mathdro.id/api/";
    let changeableUrl = url;

    if (country) {
        changeableUrl = `${changeableUrl}countries/${country}`;
    }

    try {
        const {
            data: { confirmed, recovered, deaths, lastUpdate }
        } = await axios.get(changeableUrl);

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        return error;
    }
};
