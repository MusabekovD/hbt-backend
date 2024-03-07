'use strict';

/**
 * bathroom service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bathroom.bathroom');
