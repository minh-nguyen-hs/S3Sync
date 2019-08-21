import { NAME_SPACE, getUrl } from '../constants';
import { postUrl } from '../ajaxHelper/ajaxHelper';

const RECIPE_URL = 'http://localhost:4100';
const INV_URL = 'http://localhost:4000';
const recipeSQSPublisher = 'tools/testPublishSNSMessage';
const invSQSPublisher = 'tools/sqs/replay';

const publishMessage = (publisher, { type, action, data }) => {
  const msg = {
    data,
    type,
    action,
    namespace: NAME_SPACE
  };
  console.log('publisher', publisher);
  return postUrl(publisher, msg);
};


export const publishItemUpdateToRecipe = () => {
  return publishMessage(getUrl({
    url: RECIPE_URL,
    subPath: recipeSQSPublisher
  }), {
    type: 'ITEM',
    action: 'update',
    data: [
      {
        id: 'item_01',
        name: 'test_item'
      }
    ]
  });
};


export const publishRecipeDefinitionUpdateToInventory = () => {
  return publishMessage(getUrl({
    url: INV_URL,
    subPath: invSQSPublisher
  }), {
    type: 'RECIPE_ASSIGNMENT', // 'RECIPE_STORE_ITEM_COST',
    action: 'update',
    data: {
      id: 'item_01',
      name: 'test_item',
      store_key: 'store_test'
    }
  });
};

