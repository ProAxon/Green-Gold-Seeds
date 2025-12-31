/**
 * product controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::product.product', ({ strapi }) => ({
  async getCategories(ctx) {
    try {
      const { locale } = ctx.query;
      
      if (!locale) {
        return ctx.badRequest('Locale is required');
      }

      // Extract unique Group_Name values
      const categoriesSet = new Set<string>();
      let page = 1;
      let hasMore = true;
      const pageSize = 1000; // Reasonable page size

      // Fetch all products by paginating through all pages
      while (hasMore) {
        const result = await strapi.entityService.findPage('api::product.product', {
          locale,
          fields: ['Group_Name'],
          pagination: {
            page,
            pageSize,
          },
          publicationState: 'live', // Only published products
        });

        // Extract categories from current page
        if (result.data && Array.isArray(result.data)) {
          result.data.forEach((product: any) => {
            if (product.Group_Name && typeof product.Group_Name === 'string') {
              categoriesSet.add(product.Group_Name.trim());
            }
          });
        }

        // Check if there are more pages
        hasMore = page < result.pagination.pageCount;
        page++;
      }

      // Convert to sorted array
      const categories = Array.from(categoriesSet).sort();

      return ctx.send({ data: categories });
    } catch (error) {
      strapi.log.error('Error fetching categories:', error);
      return ctx.internalServerError('Failed to fetch categories');
    }
  },
  async getSubCategories(ctx) {
    try {
      const { locale, category } = ctx.query;
      
      if (!locale) {
        return ctx.badRequest('Locale is required');
      }

      if (!category) {
        return ctx.badRequest('Category is required');
      }

      // Extract unique Name values for the given category
      const subCategoriesSet = new Set<string>();
      let page = 1;
      let hasMore = true;
      const pageSize = 1000; // Reasonable page size

      // Fetch all products with the given Group_Name by paginating through all pages
      while (hasMore) {
        const result = await strapi.entityService.findPage('api::product.product', {
          locale,
          fields: ['Name', 'Group_Name'],
          filters: {
            Group_Name: {
              $eq: category,
            },
          },
          pagination: {
            page,
            pageSize,
          },
          publicationState: 'live', // Only published products
        });

        // Extract sub-categories from current page
        if (result.data && Array.isArray(result.data)) {
          result.data.forEach((product: any) => {
            if (product.Name && typeof product.Name === 'string') {
              subCategoriesSet.add(product.Name.trim());
            }
          });
        }

        // Check if there are more pages
        hasMore = page < result.pagination.pageCount;
        page++;
      }

      // Convert to sorted array
      const subCategories = Array.from(subCategoriesSet).sort();

      return ctx.send({ data: subCategories });
    } catch (error) {
      strapi.log.error('Error fetching sub-categories:', error);
      return ctx.internalServerError('Failed to fetch sub-categories');
    }
  },
}));
