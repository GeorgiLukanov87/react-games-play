import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/games';

export const getAll = () => request.get(baseUrl);
    

