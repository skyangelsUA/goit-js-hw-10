import { fetchCountries } from "./fetchCountries";
import { render } from "./render";

import { Notify } from "notiflix/build/notiflix-notify-aio";



const textInput = document.querySelector('#search_box');



export function click() {
    const name = textInput.value.trim();

    if (!name) return Notify.warning(`Будь ласка, введіть назву країни!`);


    fetchCountries(name).then(data => render(data)).catch(error => {
        console.error(error);
    });
}



