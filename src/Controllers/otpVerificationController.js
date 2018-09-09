import userCreator from "../userFunctions/userCreator";
let otpVerificationController = {};

otpVerificationController.post = async (req, res) => {
  let dataFromDb = await userCreator.verifyOtp(
    req.body.mobilenumber,
    req.body.otp
  );

  if (dataFromDb === "error") {
    res.send({
      status: 500,
      message: "Internal server error"
    });
  } else {
    if (dataFromDb == req.body.otp) {
      res.send({
        status: 200,
        message: "success"
      });
    } else {
      res.send({
        status: 200,
        message: "otp seems to be wrong"
      });
    }
  }
};
export default otpVerificationController;
