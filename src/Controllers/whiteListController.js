import axios from "axios";
let whiteListController = {};
import request from "request";
let whiteLister = () => {
  let body = {
    VirtualNumber: "08030474229",
    Number: "9422919865",
    Language: "en"
  };
  let bodyString = "VirtualNumber=08030474229&Number=9422919865&Language=en";
  body = JSON.stringify(body);
  return axios({
    method: "post",
    url: `https://mountblue3:a1cbbb045ffee8f25bccb8b4411f5ec7e4112749@api.exotel.com/v1/Accounts/mountblue3/CustomerWhitelist?${bodyString}`,
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

whiteListController.post = async (req, res) => {
  let data = await whiteLister();
};

export default whiteListController;
