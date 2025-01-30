// //
// //  Initialize the MathJax startup code
// //
// require("mathjax-full/components/src/startup/lib/startup.js");

// //
// //  Get the loader module and indicate the modules that
// //  will be loaded by hand below
// //
// const { Loader } = require("mathjax-full/js/components/loader.js");
// Loader.preLoad(
//   "loader",
//   "startup",
//   "core",
//   "[tex]/ams",
//   "input/tex-base",
//   "output/chtml",
//   "output/chtml/fonts/tex",
//   "ally/assistive-mml"
// );

// //
// // Load the components that we want to combine into one component
// //   (the ones listed in the preLoad() call above)
// //

// require("mathjax-full/components/src/core/core.js");

// require("mathjax-full/components/src/input/tex-base/tex-base.js");

// require("mathjax-full/components/src/input/tex/extensions/ams/ams.js");
// require("mathjax-full/components/src/output/chtml/chtml.js");
// require("mathjax-full/components/src/output/chtml/fonts/tex/tex.js");
// require("mathjax-full/components/src/a11y/assistive-mml/assistive-mml.js");
// // mathjax-full/components/src/a11y/assistive-mml/assistive-mml.js

// //
// // Update the configuration to include any updated values
// //
// const { insert } = require("mathjax-full/js/util/Options.js");
// insert(MathJax.config, {
//   tex: {
//     packages: { "[+]": ["ams", "newcommand", "configmacros"] },
//   },
// });

// //
// // Loading this component will cause all the normal startup
// //   operations to be performed
// //
// require("mathjax-full/components/src/startup/startup.js");

// --------------------

//
//  Initialize the MathJax startup code
//
require("mathjax-full/components/src/startup/lib/startup.js");

//
//  Get the loader module and indicate the modules that
//  will be loaded manually below
//
const { Loader } = require("mathjax-full/js/components/loader.js");
Loader.preLoad(
  "loader",
  "startup",
  "core",
  "[tex]/ams", // AMS math package for additional LaTeX symbols
  "[tex]/newcommand", // Support for user-defined macros
  "[tex]/configmacros", // Configure macros via configuration
  "input/tex-base", // Core TeX input processor
  "output/chtml", // CHTML output for rendering math
  "output/chtml/fonts/tex" // TeX font support for CHTML
);

//
// Load the components that we want to combine into one component
// (the ones listed in the preLoad() call above)
//
require("mathjax-full/components/src/core/core.js");
require("mathjax-full/components/src/input/tex-base/tex-base.js");
require("mathjax-full/components/src/input/tex/extensions/ams/ams.js");
require("mathjax-full/components/src/input/tex/extensions/newcommand/newcommand.js");
require("mathjax-full/components/src/input/tex/extensions/configmacros/configmacros.js");
require("mathjax-full/components/src/output/chtml/chtml.js");
require("mathjax-full/components/src/output/chtml/fonts/tex/tex.js");

//
// Update the configuration to include the required options
//
const { insert } = require("mathjax-full/js/util/Options.js");
insert(MathJax.config, {
  tex: {
    packages: { "[+]": ["ams", "newcommand", "configmacros"] }, // Include required packages
  },
  // chtml: {
  //   fontURL:
  //     "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/fonts/HTML-CSS", // Optional: Use external font to reduce bundle size
  // },
});

//
// Trigger the startup process
//
require("mathjax-full/components/src/startup/startup.js");
