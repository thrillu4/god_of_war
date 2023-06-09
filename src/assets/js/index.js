import { timer } from './components/timer';
import { links } from './components/links';
import '../styles/styles.scss';
import { videoPlayer } from './components/videoPlayer';
import { checkbox } from './components/checkbox';
import { swiper } from './components/slider';
import { faq } from './components/faq';
import { scrollAnimations } from './components/scrollAnimations';
import { language } from './components/language';
import { modal } from './components/modal';
import { form } from './components/form';
import { formValidation } from './components/formValidation';

let modalState = {};

timer("May 30, 2023 05:00:00");
links('.link', '.header_hamburger', '.header');
videoPlayer('.video_info-btn', '.video_info', 'videoPlayer', '.video_wrapper');
checkbox('.checkbox');
swiper();
faq('.faq_item');
scrollAnimations('.section');
language('.language');
modal('.buy_button', '.modal', '.modal_subtitle', '.form_sum-price', '.modal_close', '.overlay');
form('.form', 'input', modalState);
formValidation('card', 'expire', 'ccv');