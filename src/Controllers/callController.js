import axios from "axios";

let callController = {};
let CallUser = number => {
  let dataBody =
    "CallerId=08030474229&Url=http://my.exotel.com/Exotel/exoml/start_voice/188975&From=9422919865";
  return axios({
    method: "post",
    url: `https://mountblue3:a1cbbb045ffee8f25bccb8b4411f5ec7e4112749@api.exotel.com/v1/Accounts/mountblue3/Calls/connect.json?${dataBody}`
  })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
};

callController.post = async (req, res) => {
  let data = await CallUser();
  if (data.status == "200") {
    res.send({
      status: 200,
      message: data.data.Call
    });
  } else {
    res.send({
      status: 400,
      message: "error"
    });
  }
};

export default callController;
