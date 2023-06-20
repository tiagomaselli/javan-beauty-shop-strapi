'use strict';

/**
 * done-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::done-service.done-service');
