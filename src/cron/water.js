const plant = require("../packages/plant");
const account = require("../packages/account");
require("dotenv").config();
const logger = require("../utils/logger");
const { userAgent } = require("../config");
const STATES = ["Bibit", "Pohon", "Berbuah"];

const display = ({ state, exp, name, totExp }) => {
  let st = "Panen";
  if (state < 4) {
    st = `${STATES[state - 1]} (${state})`;
  }

  console.table({ Name: name, State: st, "Curr Exp": exp, "Tot. Exp": totExp });
};

(async () => {
  try {
    const userId = process.env.USER_ID;
    const deviceId = process.env.DEVICE_ID;
    const shopeeToken = process.env.SHOPEE_TOKEN;
    const name = process.env.NAME;

    const token = await account.getFeatureToggles({
      userId,
      shopeeToken,
      userAgent,
    });
    const myCrop = await plant.getMyCrop({ token });

    if (myCrop.code === 0) {
      const currResource = myCrop.data.resources[0];
      const currCrop = myCrop.data.crops[0];

      if (currResource.number > 0) {
        // Water crop
        const water = await plant.waterCrop({
          token,
          cropId: currCrop.id,
          resourceId: currResource.id,
        });
        if (water.code === 0) {
          logger.info(`${name} pour ${water.data.useNumber} water`);
        }
		
		// bucket crop
        const waterBucket = await plant.waterBucket({
          token,
          cropId: currCrop.id,
          resourceId: currResource.id,
        });
		//logger.info(waterBucket.msg);
        if (waterBucket.code === 0) {
          logger.info(`waterBucket: ${waterBucket.msg}`);
        }

		// claim water
        const claimWater = await plant.claimWater({
          token,
          cropId: currCrop.id,
          resourceId: currResource.id,
        });
		//logger.info(claimWater.msg);
        if (claimWater.code === 0) {
			logger.info(`claimWater: ${claimWater.msg}`);
        }
		else
		{
			logger.info(`claimWater: ${claimWater.msg}`);
		}
		


      }

		// signInA
        const claimSignInA = await plant.claimSignInA({
          token,
          cropId: currCrop.id,
          resourceId: currResource.id,
        });
		//logger.info(claimSignInA.msg);
        if (claimSignInA.code === 0) {
          logger.info(`claimSignInA: ${claimSignInA.msg}`);
        }
		else
		{
			logger.info(`claimSignInA: ${claimSignInA.msg}`);
		}

		// signInB
        const claimSignInB = await plant.claimSignInB({
          token,
          cropId: currCrop.id,
          resourceId: currResource.id,
        });
		//logger.info(claimSignInB.msg);
        if (claimSignInB.code === 0) {
          logger.info(`claimSignInB: ${claimSignInB.msg}`);
        }
		else
		{
			logger.info(`claimSignInB: ${claimSignInB.msg}`);
		}
		
		// signInC
        const claimSignInC = await plant.claimSignInC({
          token,
          cropId: currCrop.id,
          resourceId: currResource.id,
        });
		//logger.info(claimSignInC.msg);
        if (claimSignInC.code === 0) {
          logger.info(`claimSignInC: ${claimSignInC.msg}`);
        }
		else
		{
			logger.info(`claimSignInC: ${claimSignInC.msg}`);
		}
		


		// taskA
        const claimTaskA = await plant.claimTaskA({
          token,
          cropId: currCrop.id,
          resourceId: currResource.id,
        });
		//logger.info(claimTaskA.msg);
        if (claimTaskA.code === 0) {
          logger.info(`claimTaskA: ${claimTaskA.msg}`);
        }
		else
		{
			logger.info(`claimTaskA: ${claimTaskA.msg}`);
		}
		
		
		// taskB
        const claimTaskB = await plant.claimTaskB({
          token,
          cropId: currCrop.id,
          resourceId: currResource.id,
        });
		//logger.info(claimTaskB.msg);
        if (claimTaskB.code === 0) {
          logger.info(`claimTaskB: ${claimTaskB.msg}`);
        }
		else
		{
			logger.info(`claimTaskB: ${claimTaskB.msg}`);
		}
		

		// taskB
        const claimTaskC = await plant.claimTaskC({
          token,
          cropId: currCrop.id,
          resourceId: currResource.id,
        });
		//logger.info(claimTaskC.msg);
        if (claimTaskC.code === 0) {
          logger.info(`claimTaskC: ${claimTaskC.msg}`);
        }
		else
		{
			logger.info(`claimTaskC: ${claimTaskC.msg}`);
		}
		

		// actCheckin
        const actCheckin = await plant.actCheckin({
          token,
          cropId: currCrop.id,
          resourceId: currResource.id,
        });
		logger.info(actCheckin);
        if (actCheckin.code === 0) {
          logger.info(`actCheckin: ${actCheckin.msg}`);
        }
		else
		{
			logger.info(`actCheckin: ${actCheckin.msg}`);
		}
		







      const myNewCrop = await plant.getMyCrop({ token });

      if (myNewCrop.code === 0) {
        const currCrop = myNewCrop.data.crops[0];

        if (
          currCrop.state === 100 ||
          currCrop.state === 101 ||
          currCrop.state === 2
        ) {
          // Harvest crop
          const harvest = await plant.harvestCrop({
            token,
            deviceId,
            cropId: currCrop.id,
          });

          if (harvest.code === 0) {
            const reward = harvest.data.reward.rewardItems[0].num;

            logger.info(`${name} gets ${reward} coin`);
          }
          const crops = await plant.getCrop({ token });

          const nCrop = crops.data.cropMetas[0];

          const plants = await plant.createCrop({ id: nCrop.id, token });

          if (plants.code === 0) {
            logger.info(`${name} plants ${nCrop.name}`);
          }
        }

        display({
          state: currCrop.state,
          exp: currCrop.exp,
          name: currCrop.meta.name,
          totExp: currCrop.meta.config.totalExp,
        });
      }
    }
  } catch (err) {
    logger.error(err);
  }
})();
