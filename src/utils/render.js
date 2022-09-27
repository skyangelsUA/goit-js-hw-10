import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { reset } from './reset';





const countryList = document.querySelector('.country_list');
const countryInfo = document.querySelector('.country_info');


export function render(data) {
    reset();
    if (data.length > 10) {
        Notify.info(`Знайдено забагато збігів! Будь-ласка, введіть більш конкретне ім'я!`);
        reset();
    } else if (data.length <= 10 && data.length > 2) {
        const markup = data.map(d =>
            `<li class="country-item"><p><img  src="${d.flags.svg}" alt="flag" class="country-flag" width="40" height="25">${d.name}</p></li>`).join(``);
        console.log(markup);

        countryList.insertAdjacentHTML(`beforeend`, markup);
    } else if (data.length === 1) {
        const markup = data.map(
            d =>
                `<ul class="country_description">
                    <li class="country_item country_item_name">
                        <p>
                            <img
                                src="${d.flags.svg}"
                                alt="flag"
                                class="country-flag"
                                width="40"
                                height="25"
                            />${d.name}
                        </p>
                    </li>
                    <li>
                        <p class="country_description_title">
                            Capital: <span class="country_description_data">${d.capital}</span>
                        </p>
                    </li>
                    <li>
                        <p class="country_description_title">
                            Population: <span class="country_description_data">${d.population}</span>
                        </p>
                    </li>
                    <li>
                        <p class="country_description_title">
                            Languages:
                                <span class="country_description_data">${d.languages[0].name}</span>
                        </p>
                    </li>
                </ul>`,
        ).join(``);
        countryInfo.insertAdjacentHTML(`beforeend`, markup);
    }
}

