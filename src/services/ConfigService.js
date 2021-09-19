import axios from "axios";

export const getConfigs = async () => {

    const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/configuration`, {
        params: {
            api_key: process.env.REACT_APP_API_KEY
        }
    });

    return data;

}
