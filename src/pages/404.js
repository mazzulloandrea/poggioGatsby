import { routes, removeTrailingSlash } from '../utils';

const NotFoundPage = () => {
  if (typeof window !== 'undefined') {
    const { pathname } = window.location;
    if (!Object.values(routes).includes(removeTrailingSlash(pathname))) {
      window.location.pathname = '/';
    }
  }
};

export default NotFoundPage;
