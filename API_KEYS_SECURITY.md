# API Keys Security Guidelines

## Overview
This document outlines the security practices for managing backend API keys for Pricelab and Maptier services.

## Current API Integrations

### 1. Pricelab API
- **Purpose**: [Add description of what Pricelab is used for]
- **Environment Variables**:
  - `PRICELAB_API_KEY`: Your Pricelab API key
  - `PRICELAB_API_URL`: API endpoint (default: https://api.pricelab.com)
  - `PRICELAB_ENVIRONMENT`: Environment (production/staging/development)

### 2. Maptier API
- **Purpose**: [Add description of what Maptier is used for]
- **Environment Variables**:
  - `MAPTIER_API_KEY`: Your Maptier API key
  - `MAPTIER_API_URL`: API endpoint (default: https://api.maptier.com)
  - `MAPTIER_ENVIRONMENT`: Environment (production/staging/development)

## Security Checklist

### ✅ Best Practices Implemented

- [x] API keys stored in environment variables (not hardcoded)
- [x] `.env` file added to `.gitignore`
- [x] `.env.example` file provided for reference
- [x] Configuration validation in place
- [x] Separate configuration module for API keys

### ⚠️ Security Recommendations

1. **Never commit API keys to version control**
   - Always use environment variables
   - Double-check before committing changes

2. **Rotate keys regularly**
   - Change API keys periodically
   - Immediately rotate if a key is exposed

3. **Use different keys for different environments**
   - Production keys should never be used in development
   - Use separate keys for testing

4. **Monitor API key usage**
   - Set up alerts for unusual activity
   - Review API logs regularly

5. **Restrict API key permissions**
   - Use least-privilege principle
   - Only grant necessary permissions

## Setup Instructions

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your actual API keys:
   ```bash
   # Never commit this file!
   PRICELAB_API_KEY=your_actual_pricelab_key
   MAPTIER_API_KEY=your_actual_maptier_key
   ```

3. Verify configuration:
   ```bash
   node -e "require('./backend/config/api-keys').validateConfigs()"
   ```

## What to Do If Keys Are Exposed

If API keys are accidentally committed or exposed:

1. **Immediately revoke the exposed keys** in the respective service dashboards
2. **Generate new API keys**
3. **Update the `.env` file** with new keys
4. **Remove the keys from git history** if committed:
   ```bash
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch .env" \
     --prune-empty --tag-name-filter cat -- --all
   ```
5. **Force push** (be careful with this on shared branches):
   ```bash
   git push origin --force --all
   ```
6. **Notify your team** about the incident

## Audit Log

| Date | Action | Performed By | Notes |
|------|--------|--------------|-------|
| [Current Date] | Initial setup | System | Created secure API key management structure |

## Contact

For questions about API key management, contact: [Add contact information]
