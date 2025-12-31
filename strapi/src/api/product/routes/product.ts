/**
 * product router
 */

import { factories } from '@strapi/strapi';

const defaultRouter = factories.createCoreRouter('api::product.product');

const customRoutes = {
  routes: [
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
  ],
};

export default {
  ...defaultRouter,
  routes: [
    ...defaultRouter.routes,
    ...customRoutes.routes,
  ],
};
