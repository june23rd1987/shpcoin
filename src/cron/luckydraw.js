const luckyDraw = require("../packages/luckydraw");
const account = require("../packages/account");
const logger = require("../utils/logger");
require("dotenv").config();
const { userAgent } = require("../config");

(async () => {
  try {
    const userId = process.env.USER_ID;
    const shopeeToken = process.env.SHOPEE_TOKEN;
    const name = process.env.NAME;

    const token = await account.getFeatureToggles({
      userId,
      userAgent,
      shopeeToken,
    });
    // Cek token
    const activityId = await luckyDraw.getDailyPrize(token);
    const appId = await luckyDraw.getAppID(token);

    const activity = await luckyDraw.getActivity({
      appId,
      activityId,
      token,
    });

    const access = await luckyDraw.access({ activityId, token });

    const eventId = activity.data.basic.event_code;
    const chanceId = activity.data.modules[0].module_id;

    const requestId = `${userId}62422112`;

    const chances = await luckydraw.chances({
      token,
      eventId,
      chanceId,
      appId,
    });

    const claim = await luckyDraw.claim({
      token,
      eventId,
      appId,
      activityId,
      requestId,
    });

    if (claim.data && claim.data.prize_type === 2) {
      logger.info(`${name} gets ${claim.data.package_name}`);
    }
  } catch (err) {
    console.log(err);
  }
})();
