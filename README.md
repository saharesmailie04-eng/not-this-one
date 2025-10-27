# hostkiit.com Backend

Backend API configuration and integration for hostkiit.com

## API Integrations

This project integrates with the following APIs:
- **Pricelab**: [Add description]
- **Maptier**: [Add description]

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure API keys:
   ```bash
   cp .env.example .env
   # Edit .env and add your actual API keys
   ```

3. Validate configuration:
   ```bash
   npm run validate-keys
   ```

## Security

⚠️ **IMPORTANT**: Never commit `.env` files or API keys to version control!

See [API_KEYS_SECURITY.md](./API_KEYS_SECURITY.md) for detailed security guidelines.

## Project Structure

```
.
├── backend/
│   └── config/
│       └── api-keys.js       # API key configuration module
├── .env.example               # Example environment variables
├── .gitignore                 # Git ignore rules (includes .env)
├── API_KEYS_SECURITY.md       # Security guidelines
└── README.md                  # This file
```

## API Keys Required

- `PRICELAB_API_KEY` - Your Pricelab API key
- `MAPTIER_API_KEY` - Your Maptier API key

See `.env.example` for all available environment variables.