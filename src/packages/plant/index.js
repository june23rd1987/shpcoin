const axios = require("axios");
const { baseUrl } = require("../../config");

const waterCrop = ({ token, cropId, resourceId }) => {
  const cookies = [`SPC_EC=${token}`];

  return axios
    .post(
      `${baseUrl.games}/farm/api/orchard/crop/water`,
      {
        cropId,
        resourceId,
      },
      { headers: { Cookie: cookies.join(";") } }
    )
    .then((res) => res.data)
    .catch((err) => err.response.data);
};



const getCrop = ({ token }) => {
  const cookies = [`SPC_EC=${token}`];

  return axios
    .get(`${baseUrl.games}/farm/api/orchard/crop/meta/get`, {
      headers: { Cookie: cookies.join(";") },
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};

const createCrop = ({ id, token }) => {
  const cookies = [`SPC_EC=${token}`];

  return axios
    .post(
      `${baseUrl.games}/farm/api/orchard/crop/create`,
      { metaId: id },
      {
        headers: { Cookie: cookies.join(";") },
      }
    )
    .then((res) => res.data)
    .catch((err) => err.response.data);
};

const getMyCrop = ({ token }) => {
  const cookies = [`SPC_EC=${token}`];

  return axios
    .get(`${baseUrl.games}/farm/api/orchard/context/get`, {
      headers: { Cookie: cookies.join(";") },
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};

const getMyResource = ({ token }) => {
  const cookies = [`SPC_EC=${token}`];

  return axios
    .get(`${baseUrl.games}/farm/api/orchard/resource/get`, {
      headers: { Cookie: cookies.join(";") },
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};

const harvestCrop = ({ token, deviceId, cropId }) => {
  const cookies = [`SPC_EC=${token}`];

  return axios
    .post(
      `${baseUrl.games}/farm/api/orchard/crop/harvest`,
      { deviceId, cropId },
      {
        headers: { Cookie: cookies.join(";") },
      }
    )
    .then((res) => res.data)
    .catch((err) => err.response.data);
};

const helpFriend = ({
  token,
  friendId,
  deviceId,
  friendName,
  cropId,
  channel = "copyLink",
}) => {
  const cookies = [`SPC_EC=${token}`];

  return axios
    .post(
      `${baseUrl.games}/farm/api/friend/help`,
      { friendId, cropId, deviceId, friendName, channel },
      {
        headers: { Cookie: cookies.join(";") },
      }
    )
    .then((res) => res.data)
    .catch((err) => err.response.data);
};

const stealWater = ({ token, friendId, friendName, deviceId }) => {
  const cookies = [`SPC_EC=${token}`];

  return axios
    .post(
      `${baseUrl.games}/farm/api/friend/steal_water`,
      {
        friendId,
        friendName,
        deviceId,
      },
      {
        headers: { Cookie: cookies.join(";") },
      }
    )
    .then((res) => res.data)
    .catch((err) => err.response.data);
};

const canSteal = ({ friendId, token }) => {
  const cookies = [`SPC_EC=${token}`];
  const query = `friendId=${friendId}`;

  return axios
    .get(`${baseUrl.games}/farm/api/friend/collection_countdown?${query}`, {
      headers: { Cookie: cookies.join(";") },
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};

const canHelp = ({ token }) => {
  const cookies = [`SPC_EC=${token}`];
};

const getFriend = ({ friendId, token }) => {
  const query = `friendId=${friendId}`;
  const cookies = [`SPC_EC=${token}`];

  return axios
    .get(`${baseUrl.games}/farm/api/friend/orchard/context/get?${query}`, {
      headers: { Cookie: cookies.join(";") },
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};



const waterBucket = ({ token, cropId, resourceId }) => {
  const cookies = [`SPC_EC=${token}`];
  const query = Math.floor(Date.now() / 1000);

  return axios
    .post(
      `${baseUrl.games}/farm/api/new_user_flow/bucket/check?t=${query}`,
      {
        cropId,
        resourceId,
      },
      { headers: { Cookie: cookies.join(";") } }
    )
    .then((res) => res.data)
    .catch((err) => err.response.data);
};


const claimWater = ({ token, cropId, resourceId }) => {
  const cookies = [`SPC_EC=${token}`];
  const query = Math.floor(Date.now() / 1000);

  return axios
    .post(
      `${baseUrl.games}/farm/api/task/reward/claim?t=${query}`,
      {
        "taskId" : 98,
        "taskFinishNum" : 1,
        "isNewUserTask" : true,
        "forceClaim" : false,
      },
      { headers: { Cookie: cookies.join(";") } }
    )
    .then((res) => res.data)
    .catch((err) => err.response.data);
};

const claimSignInA = ({ token, cropId, resourceId }) => {
  const cookies = [`SPC_EC=${token}`];
  const query = Math.floor(Date.now() / 1000);

  return axios
    .post(
      `${baseUrl.games}/farm/api/sign_in_bundle/claim?t=${query}`,
      {
        "day" : 1,
        "forceClaim" : false,
      },
      { headers: { Cookie: cookies.join(";") } }
    )
    .then((res) => res.data)
    .catch((err) => err.response.data);
};

const claimSignInB = ({ token, cropId, resourceId }) => {
  const cookies = [`SPC_EC=${token}`];
  const query = Math.floor(Date.now() / 1000);

  return axios
    .post(
      `${baseUrl.games}/farm/api/sign_in_bundle/claim?t=${query}`,
      {
        "day" : 2,
        "forceClaim" : false,
      },
      { headers: { Cookie: cookies.join(";") } }
    )
    .then((res) => res.data)
    .catch((err) => err.response.data);
};

const claimSignInC = ({ token, cropId, resourceId }) => {
  const cookies = [`SPC_EC=${token}`];
  const query = Math.floor(Date.now() / 1000);

  return axios
    .post(
      `${baseUrl.games}/farm/api/sign_in_bundle/claim?t=${query}`,
      {
        "day" : 3,
        "forceClaim" : false,
      },
      { headers: { Cookie: cookies.join(";") } }
    )
    .then((res) => res.data)
    .catch((err) => err.response.data);
};

const claimTaskA = ({ token, cropId, resourceId }) => {
  const cookies = [`SPC_EC=${token}`];
  const query = Math.floor(Date.now() / 1000);

  return axios
    .post(
      `${baseUrl.games}/farm/api/task/reward/claim?t=${query}`,
      {
        "taskId" : 125,
        "taskFinishNum" : 1,
        "isNewUserTask" : false,
        "forceClaim" : false,
      },
      { headers: { Cookie: cookies.join(";") } }
    )
    .then((res) => res.data)
    .catch((err) => err.response.data);
};


const claimTaskB = ({ token, cropId, resourceId }) => {
  const cookies = [`SPC_EC=${token}`];
  const query = Math.floor(Date.now() / 1000);

  return axios
    .post(
      `${baseUrl.games}/farm/api/task/reward/claim?t=${query}`,
      {
        "taskId" : 122,
        "taskFinishNum" : 1,
        "isNewUserTask" : false,
        "forceClaim" : false,
      },
      { headers: { Cookie: cookies.join(";") } }
    )
    .then((res) => res.data)
    .catch((err) => err.response.data);
};


const claimTaskC = ({ token, cropId, resourceId }) => {
  const cookies = [`SPC_EC=${token}`];
  const query = Math.floor(Date.now() / 1000);

  return axios
    .post(
      `${baseUrl.games}/farm/api/task/reward/claim?t=${query}`,
      {
        "taskId" : 89,
        "taskFinishNum" : 1,
        "isNewUserTask" : false,
        "forceClaim" : false,
      },
      { headers: { Cookie: cookies.join(";") } }
    )
    .then((res) => res.data)
    .catch((err) => err.response.data);
};


const actCheckIn = ({ token, cropId, resourceId }) => {
  const cookies = [`SPC_EC=${token}`];
  const query = Math.floor(Date.now() / 1000);

  return axios
    .post(
      `${baseUrl.games}/farm/api/task/action?t=${query}`,
      {
        "actionKey" : "act_Check_In"
      },
      { headers: { Cookie: cookies.join(";") } }
    )
    .then((res) => res.data)
    .catch((err) => err.response.data);
};




module.exports = {
  waterCrop,
  getCrop,
  createCrop,
  getMyCrop,
  harvestCrop,
  getMyResource,
  helpFriend,
  stealWater,
  canSteal,
  canHelp,
  getFriend,
  waterBucket,
  claimWater,
  claimSignInA,
  claimSignInB,
  claimSignInC,
  claimTaskA,
  claimTaskB,
  claimTaskC,
  actCheckIn,
};
