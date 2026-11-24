const tsImportPluginFactory = require('ts-import-plugin')
const { getLoader } = require("react-app-rewired");
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    const tsLoader = getLoader(
        config.module.rules,
        rule =>
            rule.loader &&
            typeof rule.loader === 'string' &&
            rule.loader.includes('ts-loader')
    );

    tsLoader.options = {
        getCustomTransformers: () => ({
            before: [tsImportPluginFactory({
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true,
            })]
        })
    };

    config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#C30D23"

/*
  Notes:
  - Consumed by react-app-rewired so CRA config can be customized without ejecting.
  - ts-import-plugin rewrites antd imports to the es build and loads styles on demand.
  - rewireLess injects the antd theme override (@primary-color) into LESS.
*/
 },
    })(config, env);

    return config;
}
