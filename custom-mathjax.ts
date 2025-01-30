// Initialize the MathJax startup code
// import "mathjax-full/ts/components/startup.js";
import "mathjax-full/ts/components/startup.ts";

// Get the loader module and indicate the modules that will be loaded manually below
import { Loader } from "mathjax-full/ts/components/loader.ts";

// mathjax-full/ts/components/loader.ts;
// node_modules / mathjax - full / ts / components / loader.ts;
Loader.preLoad(
  "loader",
  "startup",
  "core",
  "[tex]/ams", // AMS math package for additional LaTeX symbols
  "[tex]/newcommand", // Support for user-defined macros
  "[tex]/configmacros", // Configure macros via configuration
  "input/tex-base", // Core TeX input processor
  "output/chtml", // CHTML output for rendering math
  "output/chtml/fonts/tex", // TeX font support for CHTML
  "a11y/assistive-mml" // Assistive MathML for accessibility
);

// Load the components that we want to combine into one component
// (the ones listed in the preLoad() call above)
import "mathjax-full/components/src/core/core.js";
import "mathjax-full/components/src/input/tex-base/tex-base.js";
import "mathjax-full/components/src/input/tex/extensions/ams/ams.js";
import "mathjax-full/components/src/input/tex/extensions/newcommand/newcommand.js";
import "mathjax-full/components/src/input/tex/extensions/configmacros/configmacros.js";
import "mathjax-full/components/src/output/chtml/chtml.js";
import "mathjax-full/components/src/output/chtml/fonts/tex/tex.js";
import "mathjax-full/components/src/a11y/assistive-mml/assistive-mml.js";

// Update the configuration to include the required options
declare const MathJax: any;
import { insert } from "mathjax-full/ts/util/Options.ts";
insert(MathJax.config, {
  tex: {
    packages: { "[+]": ["ams", "newcommand", "configmacros"] }, // Include required packages
  },
  // chtml: {
  //   fontURL:
  //     "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/fonts/HTML-CSS", // Optional: Use external font to reduce bundle size
  // },
});

// Trigger the startup process
// import "mathjax-full/components/src/startup/startup.js";
import "mathjax-full/ts/components/startup.js";
