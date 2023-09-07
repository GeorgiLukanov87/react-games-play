import * as request from "./requester";

const baseUrl = 'http://localhost:3030';

export const login = (email, password) =>
    request.post(`${baseUrl}/users/login`, { email, password })
