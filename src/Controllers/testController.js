let testController = {};

testController.get = (req, res) => {
  res.json({
    message: "Routing successful"
  });
};

export default testController;
