const userName = document.getElementById('user-name');
const btnSearch = document.getElementById('btn-search');
const result = document.querySelector('.result');

async function user(username) {
    try{
    const response = await fetch(`https://api.github.com/users/${username}`);
    if(!response.ok) {
        throw new Error('Usuario não encontrado');
    }
    return await response.json()
    }catch(err){
        console.error('Erro:', err)
        throw err;
    }
}
async function repos(username) {
    try{
        const response = await fetch(`https://api.github.com/users/${username}/repos`)
        if(!response.ok){
            throw new Error('Repositorios não encontrados')
        }
        return await response.json()
    }catch(err){
        console.error('Error:', err)
        throw err;
    }
}
async function getUserProfile(){
    const username = userName.value;
    if (!username) return

    const userData = await user(username);
    const userRepos = await repos(username);
    let userInfo = `<div class="user-data-result flex-center">
                        <img src="${userData.avatar_url}" alt="Avatar user" class="user-avatar" />
                        <div class="user-info flex-col-center">
                          <h2 class="user-name">${userData.name || 'Usuario não possuei nome😢'}</h2>
                          <p class="user-bio">${userData.bio || 'Usuario não possue bio😢'}</p>
                        </div>
                    </div>`
    let userRepositories = ''
    userRepos.forEach(repos => {
        userRepositories += `<li class="repos"><a href="${repos.html_url}"target="_blank" class="repos-link">${repos.name}</a></li>`
    });
    const reposResult = `<div class="result-repos flex-align-center"><h2 class="repos-title">Repositorios</h2><ul class="result-repos-list">${userRepositories}</ul></div>`

    result.innerHTML = userInfo;
    result.innerHTML += reposResult;

}
btnSearch.addEventListener('click', getUserProfile)

