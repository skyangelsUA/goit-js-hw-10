import { click } from "./utils/click";
import debounce from "lodash.debounce";
import './css/styles.css';
// import 'material-icons/iconfont/material-icons.css';


const debounceDelay = 300;
const textInput = document.querySelector(`#search_box`);

textInput.addEventListener('input', debounce(click, debounceDelay));
