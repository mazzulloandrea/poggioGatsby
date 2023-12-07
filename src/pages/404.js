import { routes, removeTrailingSlash } from '../utils';

const NotFoundPage = () => {
  if (typeof window !== 'undefined') {
    if (!Object.values(routes).includes(removeTrailingSlash(window.location.pathname))) {
      window.location.pathname = '/';
    }
  }
};

export default NotFoundPage;
