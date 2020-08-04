import Header from '../template/header';
import Home from '../pages/home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import resolveRoutes from '../utils/resolveRoutes';
import getHas from '../utils/getHash';

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();

    let hash = getHas();
    let route = await resolveRoutes(hash);

    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
};

export default router;