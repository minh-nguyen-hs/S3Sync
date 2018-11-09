import { getS3ObjectContent, getS3Objects } from '../S3Helpers/InventoryS3Helpers';
import { putInventoryObject } from '../S3Helpers/AwsS3Helper';
import { ENV, NAME_SPACE } from '../constants';

const syncInventoryObject = async (contentKey, logKey) => {
  try {
    console.log(`Getting Content ${logKey} ${contentKey}`);
    const content = await getS3ObjectContent(contentKey);

    console.log(`Putting content ${logKey} ${contentKey} to S3 bucket`);
    await putInventoryObject({ Key: contentKey, Body: JSON.stringify(content) });

    console.log(`Sync success ${logKey} ${contentKey}`);
  } catch (e) {
    console.log(`Error while sync ${logKey} ${contentKey}`);
    console.log(e);
  }
};

export const syncInventoryData = async () => {
  try {
    console.log('=======================================');
    console.log(`Env: ${ENV} - Name Space: ${NAME_SPACE}`);
    console.log('Getting Inventory object');

    const s3Objects = await getS3Objects();
    const contents = s3Objects.Contents || [];
    console.log(`There are ${contents.length} Inventory objects`);

    await Promise.all(contents.map((content) => syncInventoryObject(content.Key, '')));
    console.log('Sync Completed');
    console.log('=======================================');
  } catch (e) {
    console.log(e);
  }
};

