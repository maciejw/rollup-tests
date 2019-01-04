import path from 'path';
import typescript from 'rollup-plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import postCssCssNext from 'postcss-preset-env';

const copyright = `/*
 * Copyright ${new Date().getFullYear()}
 * Copyrights licensed under the MIT License
 * See the accompanying LICENSE file for terms.
 */
`;

const pluginPostcssOptions = {
  modules: true,
  extensions: ['.css'],
  namedExports: true,
  plugins: [postCssCssNext]
};

/**@type {(packageBasePath: string) => import('rollup').RollupOptions[]} */
function rollupConfig(packageBasePath) {
  const pkg = require(path.resolve(packageBasePath, 'package.json'));
  const plugins = [resolve(), postcss(pluginPostcssOptions), typescript()];
  const external = Object.getOwnPropertyNames(pkg.peerDependencies || {});
  const banner = copyright;
  const input = path.resolve(packageBasePath, `index.ts`);
  const outputMain = path.resolve(packageBasePath, pkg.main);
  const outputModule = path.resolve(packageBasePath, pkg.module);

  return [
    {
      input,
      output: {
        file: outputMain,
        format: 'cjs',
        banner
      },
      external,
      plugins
    },
    {
      input,
      output: {
        file: outputModule,
        format: 'esm',
        banner
      },
      external,
      plugins
    }
  ];
}

export default [...rollupConfig('./packages/button'), ...rollupConfig('./packages/checkbox')];
