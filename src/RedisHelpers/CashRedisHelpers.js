import { getCashRedisToolsUrl, NAME_SPACE } from '../constants';
import { getUrl } from '../ajaxHelper/ajaxHelper';

export const getRedisObjects = async () => {
  const url = getCashRedisToolsUrl({
    subPath: 'all'
  });
  const result = await getUrl(url);
  return result.data;
};

export const getRedisObjectContent = async (path) => {
  const url = getCashRedisToolsUrl({
    subPath: path
  });
  const result = await getUrl(url);
  return result.data;
};
