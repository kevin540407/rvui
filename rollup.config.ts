import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const config = [
  {
    input: "./packages/react/index.ts",
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      json,
      babel(),
      peerDepsExternal(),
      postcss({
        extract: true,
      }),
    ],
    output: [{ filname: "index.esm.js", dir: "dist/es/", format: "esm" }],
  },
];

export default config;
