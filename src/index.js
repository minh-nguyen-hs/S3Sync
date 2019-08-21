import { syncRecipeData } from './jobs/syncRecipeData';
import { syncInventoryData } from './jobs/syncInventoryData';
import { syncInvProcData } from './jobs/syncInvProcData';
import { syncCashData } from './jobs/syncCashData';
import { syncCashRedis } from './jobs/syncCashRedis';

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
    case 'cash':
      return await syncCashData();
    case 'cashRedis':
      return await syncCashRedis();
  }
};

main();
