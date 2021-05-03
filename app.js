const bent        = require('bent');
const getJSON     = bent('json');
const eltroblocks = "https://api.catarse.me/user_details?id=eq.1533481"

async function eletrocount() {
  let retorno = await getJSON(eltroblocks);
  return retorno[0].total_contributed_projects;
}

async function main() {
  console.log(await eletrocount());
};

main();