import { members } from "../consts/members.js";


const params = new URLSearchParams(window.location.search);
const id = params.get('id');


if (members[id]) {
  const{ name, description, img, linkedin, github } = members[id];
  document.querySelector('[data-profile="name"]').textContent = name;
    document.querySelector('[data-profile="description"]').textContent = description;
    document.querySelector('[data-profile="img"]').src = img;
    document.querySelector('[data-profile="linkedin"]').href = linkedin;
    document.querySelector('[data-profile="github"]').href = github;
}