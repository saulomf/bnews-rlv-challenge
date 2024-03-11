import axios from "axios";

const API = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v3/",
});

export type APIParams = {
    qtd: number;
    page: number;
    de?: string;
    ate?: string;
    busca?: string;
}

export async function getNewsFromAPI(params: APIParams) {

    try {
        const { data } = await API.get('noticias/', { params });

        return data;
        
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
}

export async function getNewsByProductFromAPI(idproduto: number) {

    try {
        const { data } = await API.get(`noticias/${idproduto ? 'idproduto=' + idproduto : ''}`, {
            params: {
                introsize: 2040
            }
        });

        return data.items;

    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
}