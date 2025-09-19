import "./style/style.css";
import { loadHome, loadMenu } from "./modules/pages.js";

const content = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");

loadHome(content);

homeBtn.addEventListener('click', () => loadHome(content));
menuBtn.addEventListener('click', () => loadMenu(content));


