import { publishItemUpdateToRecipe, publishRecipeDefinitionUpdateToInventory } from './sqs';

async function main() {
  console.log('==== START SENDING MESSAGE ====');
  console.log('publishItemUpdateToRecipe');
  await publishItemUpdateToRecipe();
  // await  publishRecipeDefinitionUpdateToInventory();
  console.log('==== DONE PUBLISHING MESSAGE ====');
}

main();
