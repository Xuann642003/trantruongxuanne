async function fetchInstagramStats() {
    const accessToken = 'YOUR_ACCESS_TOKEN';
    const response = await fetch(`https://graph.instagram.com/me?fields=id,username,followers_count,media_count&access_token=${accessToken}`);
    const data = await response.json();
    
    document.getElementById('posts').innerText = data.media_count;
    document.getElementById('followers').innerText = data.followers_count;
}

window.onload = fetchInstagramStats;