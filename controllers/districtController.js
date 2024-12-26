const districtService = require("../services/districtService");

exports.getAllDistricts = async (req, res) => {
  try {
    const districts = await districtService.getDistricts();
    res
      .status(200)
      .json({ data: districts, message: "Districts Found Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
