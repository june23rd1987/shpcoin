const coins = require("../packages/coins");
const account = require("../packages/account");
const logger = require("../utils/logger");
const {
  userAgent,
  shopee_app_version,
  shopee_rn_version,
} = require("../config");
require("dotenv").config();

(async () => {
  try {
    const userId = process.env.USER_ID;
    const language = process.env.LANGUAGE;
    const shopeeToken = process.env.SHOPEE_TOKEN;
    const name = process.env.NAME;
    console.log(name);

    const token = await account.getFeatureToggles({
      shopeeToken,
      userAgent,
      userId,
      language,
      shopee_app_version,
      shopee_rn_version,
    });
	
    const checkin = await coins.checkin({ token });

    if (checkin.code === 0 && checkin.data.success) {
      logger.info(`${name} get ${checkin.data.increase_coins} coin`);
    } else {
      logger.error(`failed`);
    }
	
	
	/**
	const autohelp = await coins.getHelp({ token });
	
	console.log(autohelp);
    if (autohelp.code === 0 && autohelp.msg == "success") {
      logger.info(`${name} short_url: ${autohelp.data.short_url} original_url: ${autohelp.data.original_url} coin`);
	  console.log(`${name} short_url: ${autohelp.data.short_url} original_url: ${autohelp.data.original_url} coin`);
    } else {
      logger.error(`failed`);
	  console.log(`failed`);
    }
	**/
	
	
  } catch (err) {
    console.log(err);
  }
})();

