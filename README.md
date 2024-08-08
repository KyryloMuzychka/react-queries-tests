# React + Vite
Vite: https://vitejs.dev/guide/

React Tests:

1. Vitest
Link: https://v0.vitest.dev/guide/
In package.json in “scripts”:
  "test": "vitest",
  "test:ui": "vitest --ui"


2. Vitest snippets plugin in vscode
iv (Tab)
d  (Tab)
i  (Tab)
To run test in terminal:
  npm t
Or
  npm run test:ui


3. Libraries
- https://www.npmjs.com/package/@testing-library/react
- https://www.npmjs.com/package/jsdom/v/1.0.0
- https://www.npmjs.com/package/@testing-library/jest-dom


4. In root create file (vitest.config.ts): 
    import { defineConfig } from "vitest/config";

	  export default defineConfig({
	    test: {
	      environment: 'jsdom'
	    }
  	});