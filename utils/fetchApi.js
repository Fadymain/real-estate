import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'




export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-rapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'f48c528713msh141932373d9a49bp12584ajsn069b857e9f09'
        }
    });

    return data;
}