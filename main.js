const SocialMedia = {
  github: 'skyvnet',
  youtube: 'UC0rQAFsetfo5stYJ6pYnSWg',
  facebook: 'profile.php?id=100003333348825',
  instagram: 'marcelo_s1lva',
  twitter: 'MarceloSilva'
}

function ShowSocialMedia() {
  for (let li of Links.children) {
    const Socials = li.getAttribute('class')

    li.children[0].href = `https://${Socials}.com/${SocialMedia[Socials]}`
  }
}
ShowSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${SocialMedia}`

  fetch(url)
    .then(response => response.json())
    .then(data => alert(data.bio))
}
getGitHubProfileInfos()
