declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module 'rollup-plugin-typescript' {
  export default function(
    options?: import('typescript').CompilerOptions &
      Partial<{
        include: string[];
        exclude: string[];
        tsconfig: false | string;
        typescript: typeof import('typescript');
        tslib: typeof import('tslib');
      }>
  ): import('rollup').Plugin;
}
declare module 'rollup-plugin-postcss' {
  export default function (options: {
    modules: boolean,
    extensions: string[],
    namedExports: boolean,
    plugins: import('postcss').Plugin<any>[]
  }): import('rollup').Plugin;
}
declare module 'postcss-preset-env' {

  type ImportFrom = {
    customMedia: Record<string, string>,
    customProperties: Record<string, string>,
    customSelectors: Record<string, string>,
    environmentVariables: Record<string, string>
  };

  const plugin: import('postcss').Plugin<{
    stage: 1 | 2 | 3 | 4 | false;
    features: Record<string, true | Record<string, any>>;
    browsers: string;
    insertBefore: string[];
    insertAfter: string[];
    autoprefixer: import('autoprefixer').Options;
    preserve: false;
    importFrom: string[] | ImportFrom | function(): ImportFrom
  }>;

  export default plugin;
}
declare module 'rollup-plugin-node-resolve' { 
  export default function(): import('rollup').Plugin
}
