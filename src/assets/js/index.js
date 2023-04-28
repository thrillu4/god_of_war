import { timer } from './components/timer';
import { links } from './components/links';
import '../styles/styles.scss';
import { videoPlayer } from './components/videoPlayer';
import { checkbox } from './components/checkbox';
import { swiper } from './components/slider';
import { faq } from './components/faq';
import { scrollAnimations } from './components/scrollAnimations';

timer("May 30, 2023 05:00:00");
links('.header_menu-item');
videoPlayer('.video_info-btn', '.video_info', 'videoPlayer', '.video_wrapper');
checkbox('.checkbox');
swiper();
faq('.faq_item');
scrollAnimations('.section');