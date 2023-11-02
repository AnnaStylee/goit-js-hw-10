// задаю URL і ключ API для отримання даних про котів
const URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_vuLPD0wam9IoReV0AO9i68cJFKZexpUUPIYdOLVZJ2sum9Lb84q2wnOPI6ph0ur4';

// функція для отримання списку порід котів
export function fetchBreeds() {
    return fetch(`${URL}/breeds?api_key=${API_KEY}`).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return responsey.json();
    });
}
    
// функція для отримання випадкового кота за обраною породою
export function fetchCatByBreed(breedId) {
    return fetch(
        `${URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
    ).then(response => {
        if (!response.ok) {
            throw new Error(response.status);  
        }
        return response.json();
    });
}