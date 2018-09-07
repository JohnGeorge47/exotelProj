let smsController = {};
import axios from "axios";
import FormData from "form-data";
import userCreator from "../userFunctions/userCreator";
let otp = Math.floor(1000 + Math.random() * 9000);
let body =
  "From=08030474229&To=09422919865&Body=This is a test message being sent using Exotel with a (hi) and (3455). If this is being abused, report to 0808891988!";
let exotelSms = () => {
  let params = {
    From: "08030474229",
    To: "09422919865",
    Body:
      "This is a test message being sent using Exotel with a (hi) and (3455). If this is being abused, report to 08088919888"
  };
  var bodyFormData = new FormData();
  bodyFormData.append("From", "08030474229");
  bodyFormData.append("To", "9422919865");
  bodyFormData.append("Body", params.Body);
  return axios({
    method: "post",
    url: `https://mountblue3:a1cbbb045ffee8f25bccb8b4411f5ec7e4112749@api.exotel.com/v1/Accounts/mountblue3/Sms/send.json?From=08030474229&To=09422919865&Body=This is a test message being sent using Exotel with a (ddd) and (${otp}). If this is being abused, report to 08088919888`
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
  let smsInfo = await exotelSms();
  console.log(smsInfo);

  if (smsInfo.status == 200) {
    userCreator.createUser("John", "9422919865", otp);
    res.send({
      status: 200,
      message: "Succesfuly sent"
    });
  }
  console.log("Done");
};

export default smsController;
