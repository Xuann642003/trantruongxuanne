async function fetchInstagramStats() {
    const accessToken = 'EAAJGh6DKtgIBOzmjyFZAQe7Sr0YEBkNApbSBGYXnxcUt5emKWG0rrpHumbteN0PsmRpoa66uHZCjiZAEM7KY45G0TIv1ZC6e0BK8erJKKlYSbU1KSbZA0XYA01sJLVFHYdeoZChaBye8ZAWJYEwXokmLAei8TJMtMfwLtXzbe5QQyw7hQUt4sV3xj90';
    try {
        const response = await fetch(`https://graph.instagram.com/me?fields=id,username,followers_count,media_count&access_token=${accessToken}`);
        const data = await response.json();

        if (data.error) {
            console.error('Instagram API Error:', data.error.message);
            return;
        }

        document.getElementById('posts').innerText = data.media_count || 'N/A';
        document.getElementById('followers').innerText = data.followers_count || 'N/A';
    } catch (error) {
        console.error('Fetch Error:', error);
    }
}

window.onload = fetchInstagramStats;


async function fetchWeather() {
    try {
        let response = await fetch("https://wttr.in/Hanoi?format=%t");
        let temperature = await response.text();
        document.querySelector("h778").textContent = `Hà Nội: ${temperature}`;
    } catch (error) {
        document.querySelector("h778").textContent = "Không thể lấy dữ liệu thời tiết.";
    }
}

fetchWeather();