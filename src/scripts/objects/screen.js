const screen = {
    userProfile: document.querySelector('.result'),
    renderUser(user){
    this.userProfile.innerHTML = `
    <div class="user-data-result flex-center">
        <img src="${user.avatarUrl}" alt="Avatar user" class="user-avatar" />
        <div class="user-info flex-col-center">
            <h2 class="user-name">${user.name || 'Usuario não possuei nome😢'}</h2>
            <p class="user-bio">${user.bio || 'Usuario não possue bio😢'}</p>
            <div class="num-follow flex-center">
                <span>Followers: ${user.followers}</span> <span>Following: ${user.following}</span>
            </div>
        </div>
    </div>`

    let RepositoriesItens = '';
    user.repositories.forEach(repo => RepositoriesItens += `<li class="repos"><a href="${repo.html_url}"target="_blank" class="repos-link">${repo.name}</a></li>`)

    if(user.repositories.length > 0){
        this.userProfile.innerHTML += `<div class="result-repos flex-align-center"><h2 class="repos-title">Repositorios</h2><ul class="result-repos-list">${RepositoriesItens}</ul></div>`
    }
},
    renderNoUser(){
        this.userProfile.innerHTML ='<h1>Digite o nome de um usuario valido🥲</h1>';
    }
}

export{ screen }