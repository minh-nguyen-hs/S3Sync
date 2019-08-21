import envConfig from '../env';

export const ENV = envConfig.env;
export const NAME_SPACE = envConfig.nameSpace;
export const TOKEN = envConfig.token;

export const RECIPE_URL = envConfig.recipeUrl;
export const INVENTORY_URL = envConfig.inventoryUrl;
export const INVPROC_URL = envConfig.invProcUrl;
export const CASH_URL = envConfig.cashUrl;

export const getUrl = ({ url, subPath, nameSpace = NAME_SPACE, env = ENV }) => {
  let retUrl = url.replace(/\${env}/g, env);
  if (nameSpace) {
    retUrl += '/' + nameSpace
  }
  if (subPath) {
    retUrl += '/' + subPath
  }
  return retUrl;
};

export const getRecipeS3ToolsUrl = (options) => getUrl({
  ...options,
  url: RECIPE_URL,
  subPath: 'tools/s3/' + options.subPath
});

export const getInventoryS3ToolsUrl = (options) => getUrl({
  ...options,
  url: INVENTORY_URL,
  subPath: options.subPath
});

export const getInvProcS3ToolsUrl = (options) => getUrl({
  ...options,
  url: INVPROC_URL,
  subPath: 'tools/invproc/query?url=s3/view?path=' + options.subPath
})

export const getCashS3ToolsUrl = (options) => getUrl({
  ...options,
  url: CASH_URL,
  subPath: 'tools/s3/' + options.subPath
});

export const getCashRedisToolsUrl = (options) => getUrl({
  ...options,
  url: CASH_URL,
  subPath: 'tools/cache/' + options.subPath
});
