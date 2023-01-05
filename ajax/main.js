document.addEventListener('DOMContentLoaded', () =>{
    const repo =  document.getElementById('repositorios')
    const seguidores = document.getElementById('seguidores')
    const seguindo = document.getElementById('seguindo')

    const avatar = document.getElementById('avatar')
    const name = document.querySelector('.profile-name')
    const username  = document.querySelector('.profile-username')
    const link = document.querySelector('.profile-link')



    fetch('https://api.github.com/users/GustavoFFelipe')
        .then((res) =>{
            return res.json()
        })
        .then((json) =>{
            name.innerText = json.name;
            username.innerText = `@${json.login}`;
            repo.innerText = json.public_repos;

            seguidores.innerText = json.followers;
            seguindo.innerText = json.following;
            avatar.src = json.avatar_url;
            link.href = json.html_url;
        })
})