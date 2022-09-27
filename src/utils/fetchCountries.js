import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function fetchCountries(name) {
    const url = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`;


    return fetch(url).then(r => {
        if (!r.ok) {
            Notify.failure(`На жаль, країни з такою назвою немає`);
            throw Error(`Помилка: ${r.statusText}`);
        }
        return r.json();
    });
}