'use strict';

/**
 * tower service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tower.tower');
