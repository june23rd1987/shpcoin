const fs = require("fs");
const { userAgent } = require("../config");
const coins = require("../packages/coins");
const account = require("../packages/account");
const logger = require("../utils/logger");
require("dotenv").config();

(async () => {
  try {
    const userId = process.env.USER_ID;
    const shopeeToken = process.env.SHOPEE_TOKEN;
    const name = process.env.NAME;


    const arr = [];

    const token = await account.getFeatureToggles({
      userId,
      shopeeToken,
      userAgent,
    });

	
    const getHelp = await coins.getHelp({ token, userAgent, shopeeToken});
	
	const myarray = Object.values(getHelp);
    //arr.push({ name, getHelp });
    console.log(`${myarray}`);

    //console.table(arr, ["name", "getHelp"]);
    //console.table({ Total: getHelp.data });
	
	
	
  } catch (err) {
    console.log(err);
    logger.error(err);
  }
})();
