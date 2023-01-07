import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');
const info = document.querySelector('.country-info');

input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
    const dataInput = evt.target.value.trim();
    if (dataInput === '') {
        return
    } else {
        fetchCountries(dataInput)
        .then(data => createMarkup(data))
        .catch(err => console.log(err))

    }
    
}

function createMarkup(obj) {
    const markup = obj.map(({
        flags: {
            svg
        },
        name: {
            official
        },
        capital,
        languages: {
            ukr
        },
        population
    }) => ``)

}