# React E-commerce Website

This project is a React-based e-commerce website built with TypeScript and Vite. It includes various features and components to provide a seamless shopping experience.

## Table of Contents

-   [Getting Started](#getting-started)
-   [Project Structure](#project-structure)
-   [Available Scripts](#available-scripts)
-   [ESLint Configuration](#eslint-configuration)
-   Dependencies
-   DevDependencies

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone <[repository-url](https://github.com/joaomoreirastudio/EDIT---React-Final-Exercise.git)>
    ```
2. Navigate to the project directory:
    ```sh
    cd react-ecommerce-website-final
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Start the development server:
    ```sh
    npm run dev
    ```

## Project Structure

The project has the following structure:

```
.eslintrc.cjs
.gitignore
index.html
package.json
public/
    api/
        product-category.json
        seating-products.json
        shared-images.json
    assets/
        product-category/
        products/
        sharedimages/
README.md
src/
    App.css
    App.tsx
    assets/
        banners/
        deliveries/
        products-advantages/
        socials/
        video/
    components/
        CategoryProductPage/
        Home/
        ProductDetailPage/
        Shared/
    context/
    index.css
    main.tsx
    Pages/
    products/
    reset.css
    styles/
    vite-env.d.ts
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## Available Scripts

In the project directory, you can run:

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the project for production.
-   `npm run lint`: Runs ESLint to check for linting errors.
-   `npm run preview`: Previews the production build.

## ESLint Configuration

The project uses ESLint for linting. The configuration is defined in the [.eslintrc.cjs](.eslintrc.cjs) file. It extends recommended rules from ESLint, TypeScript, and React Hooks.

To expand the ESLint configuration for a production application, you can:

-   Configure the top-level `parserOptions` property:
    ```js
    export default {
        // other rules...
        parserOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            project: ["./tsconfig.json", "./tsconfig.node.json"],
            tsconfigRootDir: __dirname,
        },
    };
    ```
-   Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`.
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list.

## Dependencies

-   `@types/react-router-dom`: ^5.3.3
-   `@types/styled-components`: ^5.1.34
-   `hamburger-react`: ^2.5.1
-   `react`: ^18.3.1
-   `react-dom`: ^18.3.1
-   `react-icons`: ^5.2.1
-   `react-router-dom`: ^6.26.2
-   `sass-export`: ^2.1.2
-   `styled-components`: ^6.1.12

## DevDependencies

-   `@types/react`: ^18.3.3
-   `@types/react-dom`: ^18.3.0
-   `@typescript-eslint/eslint-plugin`: ^7.13.1
-   `@typescript-eslint/parser`: ^7.13.1
-   `@vitejs/plugin-react`: ^4.3.1
-   `eslint`: ^8.57.0
-   `eslint-plugin-react-hooks`: ^4.6.2
-   `eslint-plugin-react-refresh`: ^0.4.7
-   `sass`: ^1.77.8
-   `typescript`: ^5.2.2
-   `vite`: ^5.3.4
