import { isString } from 'lodash';
import { getUrl } from '../ajaxHelper/ajaxHelper';
import { getInvProcS3ToolsUrl, NAME_SPACE } from '../constants';

const IGNORE_PATHS = [
  '/BackUp/',
  '/InventoryForecastQuantity/',
  '/InventoryForecastSale/'
];

export const getS3Objects = async (path = '/') => {
  const isIgnore = IGNORE_PATHS.some((it) => path.startsWith(it));
  if (isIgnore) return [];

  const url = getInvProcS3ToolsUrl({
    subPath: path
  });
  console.log('Retrieve Objects in path: ', path);
  const result = await getUrl(url);
  const data = result.data;
  const objects = [];
  for(let i=0; i<data.length; i+=1) {
    const it = data[i];
    if (isString(it)) {
      // this is folder -> query s3Files in side it
      const subObjects = await getS3Objects(it);
      objects.push(...subObjects);
    } else {
      objects.push(it.location);
    }
  }

  return objects;
};

export const getS3ObjectContent = async (path) => {
  if (path.indexOf(NAME_SPACE) < 0) return;
  const resolvePath = path
    .replace(new RegExp(`${NAME_SPACE}/`, 'g'), '/');

  const url = getInvProcS3ToolsUrl({
    subPath: resolvePath
  });
  const result = await getUrl(url);
  return result.data;
};
