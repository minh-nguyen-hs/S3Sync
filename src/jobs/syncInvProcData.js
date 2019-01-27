import { getS3ObjectContent, getS3Objects } from '../S3Helpers/InvProcS3Helpers';
import { putInvProcObject } from '../S3Helpers/AwsS3Helper';
import { ENV, NAME_SPACE } from '../constants';

const syncInvProcObject = async (contentKey, logKey) => {
  try {
    console.log(`Getting Content ${logKey} ${contentKey}`);
    const content = await getS3ObjectContent(contentKey);

    console.log(`Putting content ${logKey} ${contentKey} to S3 bucket`);
    await putInvProcObject({ Key: contentKey, Body: JSON.stringify(content) });

    console.log(`Sync success ${logKey} ${contentKey}`);
  } catch (e) {
    console.log(`Error while sync ${logKey} ${contentKey}`);
    console.log(e);
  }
};

export const syncInvProcData = async () => {
  try {
    console.log('=======================================');
    console.log(`Env: ${ENV} - Name Space: ${NAME_SPACE}`);
    console.log('Getting Inventory object');

    const s3Objects = await getS3Objects();
    const contents = s3Objects || [];
    console.log(`There are ${contents.length} InvProc objects`);

    await Promise.all(contents.map((content) => syncInvProcObject(content, '')));
    console.log('Sync Completed');
    console.log('=======================================');
  } catch (e) {
    console.log(e);
  }
};

