/**
 * product router
 */

import { factories } from '@strapi/strapi';

const customRoutes = [
  {
    method: 'GET',
    path: '/categories',
    handler: 'product.getCategories',
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: 'GET',
    path: '/subcategories',
    handler: 'product.getSubCategories',
    config: {
      policies: [],
      middlewares: [],
    },
  },
];

let defaultRoutesCache: any[] | null = null;

function getDefaultRoutes() {
  if (defaultRoutesCache === null) {
    try {
      const defaultRouter = factories.createCoreRouter('api::product.product');
      defaultRoutesCache = typeof defaultRouter.routes === 'function' 
        ? defaultRouter.routes() 
        : (defaultRouter.routes || []);
    } catch (error) {
      // If content type isn't loaded yet, return empty array
      // This should not happen in normal operation, but provides a fallback
      console.warn('Failed to create core router, returning empty routes:', error);
      defaultRoutesCache = [];
    }
  }
  return defaultRoutesCache;
}

export default {
  get routes() {
    return [...getDefaultRoutes(), ...customRoutes];
  },
};
