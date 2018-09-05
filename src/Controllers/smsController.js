let smsController = {};
import axios from "axios";
import FormData from "form-data";
let body = "From=080-304-74229&To=09422919865&Body=Hello its John!";
let exotelSms = () => {
  let params = {
    From: "",
    To: "09422919865",
    Body: "Hello its me"
  };
  var bodyFormData = new FormData();
  bodyFormData.append("From", "08030474229");
  bodyFormData.append("To", "9422919865");
  bodyFormData.append("Body", "Hey its You");
  return axios({
    method: "post",
    url:
      "https://mountblue3:a1cbbb045ffee8f25bccb8b4411f5ec7e4112749@api.exotel.com/v1/Accounts/mounblue3/Sms/send",
    data: bodyFormData
  })
    .then(res => {
      console.log(response.body);
      return response.body;
    })
    .catch(err => {
      return err;
    });
};
smsController.post = async (req, res) => {
  let data = await exotelSms();
  console.log(data);
  console.log("Done");
};

export default smsController;
