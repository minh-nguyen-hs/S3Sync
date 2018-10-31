import envConfig from '../env';

export const ENV = envConfig.env;
export const NAME_SPACE = envConfig.nameSpace;
export const TOKEN = envConfig.token;

const RECIPE_URL = envConfig.recipeUrl;

const getUrl = ({ url, nameSpace, subPath, env }) => {
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
  env: ENV,
  nameSpace: NAME_SPACE,
  url: RECIPE_URL,
  subPath: 'tools/s3/' + options.subPath
});
