import { routes, removeTrailingSlash } from '../utils';

const NotFoundPage = () => {
  if (!Object.values(routes).includes(removeTrailingSlash(window.location.pathname))) {
    window.location.pathname = '/';
    return;
  }
};

export default NotFoundPage;
