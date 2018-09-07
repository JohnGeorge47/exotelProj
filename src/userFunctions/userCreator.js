const knex = require("knex")(require("../knexfile"));

const createUser = async (name, mobileNumber, otp) => {
  return knex("temp_user").insert({});
};

const userCreator = {
  createUser
};
export default userCreator;
