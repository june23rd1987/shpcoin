const fs = require("fs");
const purchase = require("../packages/purchase");
const account = require("../packages/account");
const { userAgent, boardGameId, shopid } = require("../config");

const logger = require("../utils/logger");

//TESTING APLHA

(async () => {
  try {
    const raw = fs.readFileSync("credentials.json");
    const credentials = JSON.parse(raw);

    const userId = process.env.USER_ID;
    const deviceId = process.env.DEVICE_ID;
    const shopeeToken = process.env.SHOPEE_TOKEN;
    const name = process.env.NAME;
    const uToken = process.env.USER_ID;

    const token = await account.getFeatureToggles({
      shopeeToken,
      userAgent,
      userId,
    });

    const order = await purchase.orderinfo({
      token,
    });

    const ordersn = order.ordersn;
    const orderid = order.orderid;


    console.log("order id" + orderid);

    const csrftoken = await purchase.getcsrf();

    console.log(csrftoken);

    const cancel = await purchase.cancelorder({
      token,
      orderid,
      userAgent,
      shopid,
      csrftoken,
    });

    console.log(cancel);
  } catch (err) {
    logger.error(err.toString());
  }
})();
