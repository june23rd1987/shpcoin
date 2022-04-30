const axios = require("axios");
const { userAgent } = require("../../config");


const checkin = ({ token }) => {
  const cookies = [`SPC_EC=${token}`];

  return axios({
    method: "POST",
    url: "https://shopee.ph/mkt/coins/api/v2/checkin",
    headers: {
      Cookie: cookies.join(";"),
    },
  })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};


const getHelp = ({ token, shopeeToken}) => {
  const cookies = [
  `SPC_EC=${token}`, 
  `shopee_token=${shopeeToken}`,
  `UA=${userAgent}`
  ];

  return axios({
    method: "POST",
    url: "https://games.shopee.ph/gameplatform/api/v1/share/genShortUrl?appid=9h2sd3LQjZ2AcYDTZW",
	data: {
		'real_url' : 'https://games.shopee.ph/shareplatform?title=Shopee%20Farm&desc=Help%20water%20my%20plant%20on%20Shopee%20Farm!%20Plant%20your%20free%20seed%20to%20win%20rewards%20too!&universal=0&img=https%3A%2F%2Fcf.shopee.ph%2Ffile%2F2aa199f15e37c606c5610e598189311f&disableDeepLinkOnFacebook=1&link=https%3A%2F%2Fgames.shopee.ph%2Ffarm%2Fshare.html%3Fskey%3D5bffdd1ca9cc0edc06b58f7805e0c40e%26schannel%3DcopyLink'
	},
    headers: {
      "Cookie": cookies.join(";"),
	  "Referer": "https://games.shopee.ph/farm/index.html?_shp_egret_=true",
	  "Content-Type": "multipart/form-data"
    },
  })
    .then((res) => console.log(res))
    .catch((err) => err.response.data);
};



const getUserCoins = ({ token, userAgent }) => {
  const cookies = [`SPC_EC=${token}`, `UA=${userAgent}`];

  return axios
    .get(`https://mall.shopee.ph/api/v2/coin/get_user_coins`, {
      headers: {
        Cookie: cookies.join(";"),
      },
    })
    .then((res) => res.data.data)
    .then((data) => data.available_amount)
    .catch((err) => err.response.data);
};

module.exports = { checkin, getUserCoins, getHelp };


