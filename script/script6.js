let mediaRecorder;
let audioChunks = [];

        document.getElementById("recordButton").addEventListener("click", async function() {
            const button = this;
            
            if (!mediaRecorder || mediaRecorder.state === "inactive") {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                    mediaRecorder = new MediaRecorder(stream);

                    mediaRecorder.ondataavailable = event => {
                        audioChunks.push(event.data);
                    };

                    mediaRecorder.onstop = () => {
                        const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
                        const audioUrl = URL.createObjectURL(audioBlob);
                        document.getElementById("audioPlayback").src = audioUrl;
                        audioChunks = [];
                    };

                    mediaRecorder.start();
                    button.classList.add("recording");
                } catch (error) {
                    console.error("Lỗi khi truy cập micro:", error);
                }
            } else {
                mediaRecorder.stop();
                button.classList.remove("recording");
            }
        });
        
        
// THU BUTTON
document.getElementById("thuButton").addEventListener("click", function() {
    let icons = document.querySelectorAll(".icon-box:not(#thuButton)");
    
    icons.forEach(icon => {
        icon.classList.toggle("hidden");
    });
});