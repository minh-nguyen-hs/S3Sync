import { ENV, NAME_SPACE } from '../constants';
import { getRedisObjectContent, getRedisObjects } from '../RedisHelpers/CashRedisHelpers';
import { putObject } from '../S3Helpers/RedisHelper';

const syncCashObject = async (contentKey, logKey) => {
  try {
    console.log(`Getting Content ${logKey} ${contentKey}`);
    const content = await getRedisObjectContent(contentKey);

    console.log(`Putting content ${logKey} ${contentKey} to local redis`);
    await putObject({ RedisKey: contentKey, Body: content });

    console.log(`Sync success ${logKey} ${contentKey}`);
  } catch (e) {
    console.log(`Error while sync ${logKey} ${contentKey}`);
    console.log(e);
  }
};

export const syncCashRedis = async () => {
  try {
    console.log('=======================================');
    console.log(`Env: ${ENV} - Name Space: ${NAME_SPACE}`);
    console.log('Getting Cash redis');

    const redisObjects = await getRedisObjects();
    const contents = redisObjects || [];
    console.log(`There are ${contents.length} Redis objects`);

    await Promise.all(contents.map((content) => syncCashObject(content, '')));
    console.log('Sync Completed');
    console.log('=======================================');
  } catch (e) {
    console.log(e);
  }
};

