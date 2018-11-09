import { getUrl } from '../ajaxHelper/ajaxHelper';
import { getInventoryS3ToolsUrl, NAME_SPACE } from '../constants';

export const getS3Objects = async () => {
  const url = getInventoryS3ToolsUrl({
    subPath: 'tools/s3Files'
  });
  const result = await getUrl(url);
  return result.data;
};

export const getS3ObjectContent = async (path) => {
  const resolvePath = path.replace(new RegExp(`${NAME_SPACE}/`, 'g'), '');
  const url = getInventoryS3ToolsUrl({
    subPath: `tools/s3Files/${resolvePath}`
  });
  const result = await getUrl(url);
  return result.data;
};
