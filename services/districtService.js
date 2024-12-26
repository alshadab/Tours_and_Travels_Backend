const districts = require("../assets/District");

exports.getDistricts = async () => {
  const data = districts.districts.map((district) => ({
    ...district,
    id: Number(district.id),
    division_id: Number(district.division_id),
  }));
  return data;
};
