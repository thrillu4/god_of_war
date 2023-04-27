export const videoPlayer = (videoBtn, videoInfo, videoPlayer, Wrapper) => {
    const btn = document.querySelector(videoBtn),
          info = document.querySelector(videoInfo),
          video = document.getElementById(videoPlayer),
          player = document.querySelectorAll(Wrapper);

    let isPlay = false;

    player.forEach(item => {
        item.addEventListener('mouseleave', () => {
            video.style.opacity = '1'
        })
        item.addEventListener('mouseenter', () => {
            video.style.opacity = '0.3'
        })
        item.addEventListener('click', () => {
            video.style.opacity = '1'
            isPlay = !isPlay;
            info.classList.toggle('hidden', isPlay);
            btn.innerText = isPlay ? 'Pause' : 'Play';
            isPlay ? video.play() : video.pause();
            if(!isPlay) {
                video.style.opacity = '0.3'
            }
        })
    })

    if(!isPlay) {
        info.addEventListener('mouseenter', () => {
            video.style.opacity = '0.3'
        })
        info.addEventListener('mouseleave', () => {
            video.style.opacity = '1'
        })
    }
}