import { getUrl } from '../ajaxHelper/ajaxHelper';
import { getRecipeS3ToolsUrl, NAME_SPACE } from '../constants';

export const getS3Objects = async () => {
  const url = getRecipeS3ToolsUrl({
    subPath: 's3ListObjects?path='
  });
  const result = await getUrl(url);
  return result.data;
};

export const getS3ObjectContent = async (path) => {
  const resolvePath = path.replace(new RegExp(`${NAME_SPACE}/`, 'g'), '');
  const url = getRecipeS3ToolsUrl({
    subPath: `s3Object?path=${resolvePath}`
  });
  const result = await getUrl(url);
  return result.data;
};
