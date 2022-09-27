const countryList = document.querySelector('.country_list');
const countryInfo = document.querySelector('.country_info');


export function reset() {
    countryList.innerHTML = ``;
    countryInfo.innerHTML = ``;
}