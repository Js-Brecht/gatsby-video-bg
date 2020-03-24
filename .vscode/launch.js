const {createRequire, createRequireFromPath} = require(`module`);
const {resolve} = require(`path`);

const relPnpApiPath = "../.pnp.js";

const absPnpApiPath = resolve(__dirname, relPnpApiPath);
const absRequire = (createRequire || createRequireFromPath)(absPnpApiPath);

// Setup the environment to be able to require typescript/lib/tsc.js
require(absPnpApiPath).setup();

// const app = require.resolve(process.env.VSCODE_LAUNCH_APP);
const app = process.env.VSCODE_LAUNCH_APP;
process.argv[1] = app;
absRequire(app);
