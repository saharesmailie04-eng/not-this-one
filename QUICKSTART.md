# Quick Start Guide - API Keys Setup

## 🚀 Quick Setup (5 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure API Keys
```bash
# Copy the example file
cp .env.example .env

# Edit with your favorite editor
nano .env
# or
vim .env
# or
code .env
```

### Step 3: Add Your Keys
Edit `.env` and replace the placeholder values:
```bash
PRICELAB_API_KEY=your_pricelab_api_key_here
MAPTIER_API_KEY=your_maptier_api_key_here
```

Change them to your actual API keys:
```bash
PRICELAB_API_KEY=pk_live_abc123...
MAPTIER_API_KEY=mt_prod_xyz789...
```

### Step 4: Validate Configuration
```bash
npm run validate-keys
```

You should see: `✓ All API configurations validated successfully`

## ✅ Verification Checklist

- [ ] Copied `.env.example` to `.env`
- [ ] Added actual API keys (not placeholders)
- [ ] Ran `npm install`
- [ ] Validated with `npm run validate-keys`
- [ ] Verified `.env` is NOT tracked by git (`git status` should not show it)

## 📝 Where to Get API Keys

### Pricelab API Key
1. Log in to your Pricelab account
2. Navigate to Settings → API Keys
3. Generate a new API key
4. Copy the key to your `.env` file

### Maptier API Key
1. Log in to your Maptier account
2. Navigate to API Settings
3. Create a new API key
4. Copy the key to your `.env` file

## ⚠️ Important Security Notes

- ✅ **NEVER** commit the `.env` file to git
- ✅ Keep your API keys secret
- ✅ Use different keys for development/production
- ✅ Rotate keys regularly

## 🔧 Usage in Code

```javascript
// Import the configuration
const apiConfig = require('./backend/config/api-keys');

// Access Pricelab configuration
console.log(apiConfig.pricelab.apiUrl);
// Use: apiConfig.pricelab.apiKey

// Access Maptier configuration  
console.log(apiConfig.maptier.apiUrl);
// Use: apiConfig.maptier.apiKey

// Validate all configs
apiConfig.validateConfigs();
```

## 🆘 Troubleshooting

### Error: "Missing required environment variable: PRICELAB_API_KEY"
- Make sure you created the `.env` file (copy from `.env.example`)
- Check that you added actual values (not placeholders)

### Error: "Invalid or placeholder Pricelab API key detected"
- Replace `your_pricelab_api_key_here` with your actual API key

### The `.env` file appears in git status
- Check that `.gitignore` exists and contains `.env`
- Run: `git rm --cached .env` if it was already tracked

## 📚 More Information

- **Security Guidelines**: See [API_KEYS_SECURITY.md](./API_KEYS_SECURITY.md)
- **Audit Report**: See [SECURITY_AUDIT_REPORT.md](./SECURITY_AUDIT_REPORT.md)
- **Full Documentation**: See [README.md](./README.md)

## 🎯 Summary

**What was checked:**
- ✅ No API keys in repository
- ✅ No secrets in commit history
- ✅ Secure configuration structure created
- ✅ .gitignore prevents key leaks
- ✅ CodeQL security scan passed

**What you need to do:**
1. Copy `.env.example` to `.env`
2. Add your actual API keys
3. Run `npm install && npm run validate-keys`
4. Start using the API configuration in your code

---

**All set!** Your backend API keys for Pricelab and Maptier are now securely configured. 🎉
