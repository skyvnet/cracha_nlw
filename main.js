const SocialMedia = {
  Github: 'skyvnet',
  Youtube: '/channel/UC0rQAFsetfo5stYJ6pYnSWg',
  Facebook: 'profile.php?id=100003333348825',
  Instagram: 'marcelo_s1lva',
  Twitter: 'MarceloSilva'
}

function ShowSocialMedia() {
  for (let li of Links.children) {
    const Socials = li.getAttribute('class')

    li.children[0].href = `https://${Socials}.com/${SocialMedia[Socials]}`
  }
}
ShowSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${SocialMedia.Github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      UserName.textContent = data.name
      UserBio.textContent = data.bio
      UserLink.href = data.html_url
      ImageUser.src = data.avatar_url
      UserLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
