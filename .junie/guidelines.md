# Gatsby Personal Blog Development Guidelines

This document provides essential information for developers working on this Gatsby personal blog project.

## Build/Configuration Instructions

### Prerequisites
- Node.js and npm
- Contentful account (for content management)
- Google Analytics account (optional)

### Initial Setup

1. **Clone the repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Contentful**
   
   This project uses Contentful as its CMS. You need to set up Contentful credentials:

   a. Run the setup script:
   ```bash
   npm run setup
   ```
   
   b. The script will prompt you for:
      - Contentful Space ID
      - Content Delivery API token
      - Content Preview API token
      - Content Management API token
   
   c. These credentials will be saved in `.contentful.json` file with the following structure:
   ```json
   {
     "development": {
       "host": "preview.contentful.com",
       "spaceId": "your-space-id",
       "accessToken": "your-preview-token"
     },
     "production": {
       "spaceId": "your-space-id",
       "accessToken": "your-delivery-token"
     }
   }
   ```

   d. Alternatively, you can set these values as environment variables:
      - SPACE_ID
      - ACCESS_TOKEN

4. **Configure Google Analytics (Optional)**
   
   Create a `google-analytics.json` file in the project root with the following structure:
   ```json
   {
     "production": {
       "trackingId": "your-ga-tracking-id",
       "head": false
     }
   }
   ```
   
   Alternatively, set the GOOGLE_ANALYTICS environment variable.

### Development

1. **Start the development server**
   ```bash
   npm run develop
   ```
   or
   ```bash
   npm run dev
   ```

2. **Build for production**
   ```bash
   npm run build
   ```

3. **Serve the production build locally**
   ```bash
   npm run serve-local
   ```

## Testing Information

### Current Testing Setup

The project uses a combination of linting tools for code quality:

1. **ESLint** for JavaScript linting
   - Configuration in `.eslintrc.json`
   - Extends `gatsby-standard` configuration

2. **Stylelint** for styled-components linting
   - Configuration in `.stylelintrc`
   - Uses `stylelint-processor-styled-components`

3. **Prettier** for code formatting
   - Configuration in `.prettierrc` and `.prettierignore`

### Running Tests

```bash
npm run test
```

This runs three commands in sequence:
- `npm run lint:css` - Runs stylelint on styled-components
- `npm run lint:js` - Runs ESLint on JavaScript files
- `npm run check-pretty` - Checks code formatting with Prettier

### Known Issues with Testing Setup

The current testing setup has dependency conflicts:

1. **Stylelint**: The project uses stylelint v15.x, but some dependencies require earlier versions. The configuration also needs updating to use the `customSyntax` option for styled-components.

2. **ESLint**: The eslint-config-gatsby-standard package requires ESLint v9.x, but the project uses v8.x.

### Adding New Tests

To add new tests to the project:

1. **Component Tests**: Create test files with the naming convention `ComponentName.test.js` in the same directory as the component.

2. **Update Dependencies**: Before implementing comprehensive testing, update the testing dependencies to resolve conflicts.

3. **Consider Adding Jest**: For unit and integration testing, consider adding Jest to the project.

## Code Style and Development Guidelines

1. **Component Structure**
   - React functional components with hooks
   - Styled-components for styling
   - Props destructuring pattern

2. **Styling Approach**
   - Uses styled-components for CSS-in-JS styling
   - Global styles in `src/styles/global.js`
   - Theme configuration in `src/styles/theme.js`

3. **Content Management**
   - Content is sourced from Contentful
   - Content models are defined in Contentful
   - GraphQL is used to query content

4. **Project Structure**
   - `src/components/` - React components
   - `src/templates/` - Page templates for different content types
   - `src/pages/` - Static pages
   - `src/styles/` - Global styles and theme
   - `src/utils/` - Utility functions
   - `bin/` - Setup and utility scripts

5. **Gatsby Configuration**
   - Main configuration in `gatsby-config.js`
   - Build-time logic in `gatsby-node.js`

## Debugging Tips

1. **GraphQL Queries**
   - Use Gatsby's GraphQL explorer at `http://localhost:8000/___graphql` during development
   - Check Contentful data structure when queries fail

2. **Build Issues**
   - Clear the cache with `gatsby clean` if you encounter build problems
   - Check Contentful content models if content queries are failing

3. **Deployment**
   - The site is configured for Netlify deployment
   - Ensure environment variables are set in your deployment platform