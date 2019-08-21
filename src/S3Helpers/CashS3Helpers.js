import { getUrl } from '../ajaxHelper/ajaxHelper';
import { getCashS3ToolsUrl, NAME_SPACE } from '../constants';

export const getS3Objects = async () => {
  const url = getCashS3ToolsUrl({
    subPath: 's3ListObjects?path='
  });
  console.log('url', url);
  const result = await getUrl(url);
  return result.data;
};

export const getS3ObjectContent = async (path) => {
  // const resolvePath = path.replace(new RegExp(`${NAME_SPACE}/`, 'g'), '');
  const url = getCashS3ToolsUrl({
    subPath: `s3Object?path=${path}`
  });
  const result = await getUrl(url);
  return result.data;
};
