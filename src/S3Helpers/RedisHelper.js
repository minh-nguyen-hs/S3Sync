import redis from 'redis';

export const putObject = async ({RedisKey, Body}) => {
  const client = redis.createClient();
  if(typeof (Body) === 'string') {
    return client.set(RedisKey, Body);
  } else {
    const tasks = Object.keys(Body).reduce((acc, key) => {
      acc.push(client.hset(RedisKey, key, Body[key]));
      return acc;
    }, []);
    return Promise.all(tasks);
  }
};
