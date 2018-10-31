import AWS from 'aws-sdk';
import path from 'path';
import awsConfig from '../../aws.json';

AWS.config.loadFromPath(path.resolve(__dirname, '../../aws.json'));

export const S3 = new AWS.S3();

export const putObject = async ({Bucket, Key, Body}) => {
  return new Promise((resolve, reject) => {
    const params = {
      Bucket,
      ContentType: 'application/json',
      Key,
      Body
    };
    S3.putObject(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  });
};

export const putRecipeObject = async ({Key, Body}) => {
  return putObject({
    Bucket: awsConfig.recipeBucket,
    Key,
    Body
  });
};
