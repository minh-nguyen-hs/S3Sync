import { syncRecipeData } from './jobs/syncRecipeData';
import { syncInventoryData } from './jobs/syncInventoryData';

const main = async () => {
  const args = process.argv;
  const res = args[2];
  switch (res) {
    case 'recipe':
      return await syncRecipeData();
    case 'inventory':
      return await syncInventoryData();
  }
};

main();
