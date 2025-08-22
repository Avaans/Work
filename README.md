# AI Archive

This is an early scaffold for an automatic analytical archive built with Next.js.

## Setup
1. Ensure outbound access to the npm registry. If your environment injects proxy variables, clear them:
   ```bash
   unset http_proxy https_proxy HTTP_PROXY HTTPS_PROXY npm_config_http_proxy npm_config_https_proxy
   npm config set registry https://registry.npmjs.org/
   npm install
   ```
2. Run `npm run dev` to start the development server.

## Available Scripts

- `npm run dev` – start development server
- `npm run build` – build the app
- `npm start` – run the built app
- `npm test` – run basic node tests
- `npm run lint` – placeholder lint check

## Pages

- **Home** – AI search bar with filters
- **Our Mission** – project description
- **Add to the Archive** – upload chatbot and metadata form
- **Auth** – login and registration placeholders
- **Favorites** – create shareable folders of saved manuscripts
- **404** – friendly not-found page

## Components

- `SearchBar` – query input with smart search toggle
- `Filters` – region/language/script/time filtering
- `UploadForm` – file uploads and metadata fields
- `CookieConsent` – simple cookie banner
- `ModelToggle` – switch between local and cloud AI models (editor only)
- `FavoritesContext` – local-storage powered favorites folders

Further development will integrate OCR, translation, and semantic search services.
