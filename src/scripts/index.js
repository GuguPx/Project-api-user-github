import { getUser } from "./services/user.js";
import { getRepositories } from "./services/repositories.js";
import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";

const userName = document.getElementById("user-name");
const btnSearch = document.getElementById("btn-search");

async function getUserData() {
  const username = userName.value;
  if (!username){
    screen.renderNoUser()
    return
  };
  const userData = await getUser(username);
  if(userData.message === 'Not Found'){
    return alert('Usuario invalido')}
  const userRepos = await getRepositories(username);
  user.setInfo(userData);
  user.setRepositories(userRepos);
  screen.renderUser(user);
}
btnSearch.addEventListener("click", getUserData);
userName.addEventListener('keyup', (e) => {
  if(e.key === 'Enter'){
    getUserData()
  }
})