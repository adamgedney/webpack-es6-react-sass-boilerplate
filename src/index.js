/**
 * This file is teh main entry point for all clientside javascript.
 *
 * If you need page/widget. or component specific scripts, create a new file (see the example page-about.js file)
 * in the src directory and import it below. THis file will serve as a map for what modules have been imported
 * into the project.
 */
import utils from './utils.js';
import pageAbout from './page-about.js';

console.log(utils.getTest());
console.log(pageAbout.getTest());