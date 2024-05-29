1. create react app using vite from : https://vitejs.dev/guide/
> npm create vite@latest

2. 
√ Project name: ... docs
√ Select a framework: » React
√ Select a variant: » JavaScript

3. 
cd docs
npm install
npm run dev

4. install tailwind css from : https://tailwindcss.com/docs/guides/vite
~ Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

> npm install -D tailwindcss postcss autoprefixer
> npx tailwindcss init -p

5. Configure your template paths
~ Add the paths to all of your template files in your tailwind.config.js file.

   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

6. Add the Tailwind directives to your CSS
~ Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

@tailwind base;
@tailwind components;
@tailwind utilities;

7. clear App.jsx file and type rfce and press enter.

8. here we have two type of components.
~Background 
    -create "@Docs" first in h1 tag with tailwind css effect.
    -create "document" text.
~Foreground
    -Card
        --icon
            install react icons from : https://react-icons.github.io/react-icons/
               > npm install react-icons --save
        --text
        --footer
            ---data
            ---tag

9. in bakground 
~create "@Docs" first in h1 tag with tailwind css effect and document text.

  // const data = [
    //      decs, filesize, closeOrDownload, tagdetails
    // ];



for moveable cards in this "@docs" :
    I use framer motion. 
        from : https://www.framer.com/motion/introduction/
    install Install framer-motion from npm.
        > npm install framer-motion
    and import in to the Foreground.jsx file.