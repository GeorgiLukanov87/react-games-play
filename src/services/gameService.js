const baseUrl = 'http://localhost:3030';

export const getAll = async () => {
    const res = await fetch(`${baseUrl}/data/games/`);
    return await res.json();
};
