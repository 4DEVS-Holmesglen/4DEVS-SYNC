import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import url from "rollup-plugin-url"; // This plugin used for import our Fonts

export default {
  input: "src/index.js", // Entry point
  output: [
    {
      file: "dist/index.js", // CommonJS format
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js", // ES Module format
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: [".js", ".jsx"], // Add .jsx to the resolvable extensions
    }),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"],
    }),
    postcss({
      extensions: [".css", ".scss"],
      extract: true,
    }),
    url({
      include: ["**/*.ttf"], // Import Font Files
      limit: 10 * 1024,
    }),
  ],
  external: ["react", "react-dom"],
};
