/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const context = require('./context');
const constants = require('./constants');
const {CONTEXT_URL_V1} = constants;

const contexts = new Map();
contexts.set(CONTEXT_URL_V1, context);

module.exports = {
  constants,
  contexts,
  CONTEXT_URL_V1,
  CONTEXT_V1: context
};
