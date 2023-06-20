'use strict';

/**
 * done-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::done-service.done-service');
