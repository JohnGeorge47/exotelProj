const knex = require("knex")(require("../knexfile"));

const createUser = async (username, mobilenumber, otp) => {
  console.log(mobilenumber);
  return knex("otp_verification")
    .insert({
      username,
      otp,
      mobilenumber
    })
    .then(res => {
      return "success";
    })
    .catch(err => {
      if (err.errno == 1062) {
        return knex("otp_verification")
          .where("mobilenumber", mobilenumber)
          .update({ username, otp })
          .then(res => {
            return "success";
          })
          .catch(err => {
            console.log(err);
            return "error";
          });
      } else {
        return "error";
      }
    });
};

const userCreator = {
  createUser
};
export default userCreator;
