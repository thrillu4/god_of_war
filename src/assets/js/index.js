import { timer } from './components/timer';
import { links } from './components/links';
import '../styles/styles.scss';
import { videoPlayer } from './components/videoPlayer';


timer("May 30, 2023 05:00:00");
links('.header_menu-item');
videoPlayer('.video_info-btn', '.video_info', 'videoPlayer', '.video_wrapper');