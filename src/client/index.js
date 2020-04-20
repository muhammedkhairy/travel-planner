import './styles/resets.scss';
import './styles/header.scss';
import './styles/video.scss';
import './styles/search.scss';
import './styles/results.scss';
import './styles/info-about.scss';
import './styles/footer.scss';
import './media/favicon.ico';

import { slidingNavBar } from './js/nav_animation';
import { scrollPage } from './js/scroll_to_section';
import { main } from './js/main';

slidingNavBar();
scrollPage();
main();
