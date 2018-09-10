let smsController = {};
import axios from "axios";
import FormData from "form-data";
import userCreator from "../userFunctions/userCreator";
let body =
  "From=08030474229&To=09422919865&Body=This is a test message being sent using Exotel with a (hi) and (3455). If this is being abused, report to 0808891988!";
let exotelSms = (toBeSent, otp) => {
  let params = {
    From: "08030474229",
    To: "09422919865",
    Body:
      "This is a test message being sent using Exotel with a (hi) and (3455). If this is being abused, report to 08088919888"
  };
  return axios({
    method: "post",
    url: `https://mountblue3:a1cbbb045ffee8f25bccb8b4411f5ec7e4112749@api.exotel.com/v1/Accounts/mountblue3/Sms/send.json?From=08030474229&To=${toBeSent}&Body=This is a test message being sent using Exotel with a (ddd) and (${otp}). If this is being abused, report to 08088919888`
  })
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
      return err;
    });
};
smsController.post = async (req, res) => {
  let otp = Math.floor(1000 + Math.random(otp) * 9000);
  let dbInsertion = await userCreator.createUser(
    req.body.username,
    req.body.mobilenumber,
    otp
  );
  if (dbInsertion === "success") {
    let smsInfo = await exotelSms(req.body.mobilenumber, otp);

    if (smsInfo.status == 200) {
      res.send({
        status: 200,
        message: "Succesfuly sent"
      });
    } else {
      res.send({
        status: 400,
        message: "Something went wrong"
      });
    }
  } else {
    res.send({
      status: 500,
      message: "Duplicate entry"
    });
  }
  console.log("Done");
};

export default smsController;
