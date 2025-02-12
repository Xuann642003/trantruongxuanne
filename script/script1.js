    // Lấy các phần tử từ DOM
    const playBtn = document.getElementById("play-btn");
    const audio = document.getElementById("audio");
    const progressBar = document.getElementById("progress-bar");
    const currentTimeElem = document.getElementById("current-time");
    const durationElem = document.getElementById("duration");
    
    // Thay đổi trạng thái phát/dừng
    playBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            playBtn.textContent = "⏸"; // Đổi nút thành pause
        } else {
            audio.pause();
            playBtn.textContent = "▶"; // Đổi nút thành play
        }
    });
    
    // Cập nhật thời gian phát hiện tại và thanh tiến trình
    audio.addEventListener("timeupdate", () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
    
        progressBar.value = (currentTime / duration) * 100;
    
        // Hiển thị thời gian phát hiện tại và tổng thời gian
        currentTimeElem.textContent = formatTime(currentTime);
        durationElem.textContent = formatTime(duration);
    });
    
    // Cập nhật vị trí phát khi kéo thanh tiến trình
    progressBar.addEventListener("input", () => {
        const duration = audio.duration;
        audio.currentTime = (progressBar.value / 100) * duration;
    });
    
    // Hàm định dạng thời gian (từ giây -> mm:ss)
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }
    
    // Đặt tổng thời gian khi tải xong audio
    audio.addEventListener("loadedmetadata", () => {
        durationElem.textContent = formatTime(audio.duration);
    });