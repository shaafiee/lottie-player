import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

import pkg from "./package.json";

export default {
  treeshake: true,
  input: "src/lottie-player.ts",
  output: [
    {
      file: pkg.main,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: "**/__tests__/**",
      clean: true
    }),
    commonjs({
      include: ["node_modules/**"],
    })
  ]
};
