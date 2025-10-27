/**
 * Backend API Keys Configuration
 * 
 * This module safely loads API keys from environment variables.
 * Ensure all required environment variables are set before running the application.
 */

require('dotenv').config();

/**
 * Validates that required environment variables are set
 * @param {string} key - Environment variable name
 * @throws {Error} If the environment variable is not set
 */
function requireEnv(key) {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

/**
 * Pricelab API Configuration
 */
const pricelabConfig = {
  apiKey: requireEnv('PRICELAB_API_KEY'),
  apiUrl: process.env.PRICELAB_API_URL || 'https://api.pricelab.com',
  environment: process.env.PRICELAB_ENVIRONMENT || 'production',
};

/**
 * Maptier API Configuration
 */
const maptierConfig = {
  apiKey: requireEnv('MAPTIER_API_KEY'),
  apiUrl: process.env.MAPTIER_API_URL || 'https://api.maptier.com',
  environment: process.env.MAPTIER_ENVIRONMENT || 'production',
};

/**
 * Validates all API configurations
 * @throws {Error} If any configuration is invalid
 */
function validateConfigs() {
  // Validate Pricelab
  if (!pricelabConfig.apiKey || pricelabConfig.apiKey === 'your_pricelab_api_key_here') {
    throw new Error('Invalid or placeholder Pricelab API key detected');
  }
  
  // Validate Maptier
  if (!maptierConfig.apiKey || maptierConfig.apiKey === 'your_maptier_api_key_here') {
    throw new Error('Invalid or placeholder Maptier API key detected');
  }
  
  console.log('✓ All API configurations validated successfully');
}

module.exports = {
  pricelab: pricelabConfig,
  maptier: maptierConfig,
  validateConfigs,
};
