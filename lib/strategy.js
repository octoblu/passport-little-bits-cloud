'use strict';

var util = require('util');
var OAuth2Strategy = require('passport-oauth2');

function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://littlebits.cc/oauth/authorize';
  options.tokenURL = options.tokenURL || 'https://littlebits.cc/oauth/token';
  options.customHeaders = options.customHeaders || {};

  OAuth2Strategy.call(this, options, verify);
  this.name = 'little-bits-cloud';
  this._oauth2.useAuthorizationHeaderforGET(true);
}


util.inherits(Strategy, OAuth2Strategy);


Strategy.prototype.userProfile = function(accessToken, done) {
  device = {oauth: 'little-bits-cloud'};
  done(error, device);
};

module.exports = Strategy;
