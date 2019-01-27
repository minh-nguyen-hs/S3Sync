import { syncRecipeData } from './jobs/syncRecipeData';
import { syncInventoryData } from './jobs/syncInventoryData';
import { syncInvProcData } from './jobs/syncInvProcData';

const main = async () => {
  const args = process.argv;
  const res = args[2];
  switch (res) {
    case 'recipe':
      return await syncRecipeData();
    case 'inventory':
      return await syncInventoryData();
    case 'invproc':
      return await syncInvProcData();
  }
};

main();
