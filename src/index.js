import { syncRecipeData } from './jobs/syncRecipeData';

const main = async () => {
  return await syncRecipeData();
};

main();
