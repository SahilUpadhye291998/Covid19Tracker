import axios from "axios";

export const fetchData = async () => {
    try {
        const { data } = await axios.get("https://covid19.mathdro.id/api");
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        };
        return modifiedData;
    } catch (error) {
        console.error(error);
        return {
            message: "Some error in fetching Data"
        };
    }
};
