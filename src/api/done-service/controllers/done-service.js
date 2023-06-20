'use strict';

/**
 * done-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::done-service.done-service');
