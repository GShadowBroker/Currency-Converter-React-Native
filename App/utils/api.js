import axios from "axios";

const url = "https://free.currconv.com/api/v7";
const key = "753a571d1dff6459148d";

const getListOfCurrencies = async () => {
  const list = await axios.get(`${url}/currencies?apiKey=${key}`);
  return list.data;
};

const getConversionRate = async (base, quote) => {
  const rate = await axios.get(
    `${url}/convert?q=${base}_${quote}&compact=ultra&apiKey=${key}`
  );
  return rate.data[`${base}_${quote}`];
};

export default {
  getListOfCurrencies,
  getConversionRate,
};
