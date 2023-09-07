import * as request from "../components/register/requester";

const baseUrl = 'http://localhost:3030/data/games';

export const getAll = () => request.get(baseUrl);
    

