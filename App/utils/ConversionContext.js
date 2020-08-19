import React, { useEffect, createContext, useState } from "react";
import api from "./api";

export const ConversionContext = createContext();

const DEFAULT_BASE_CURRENCY = "USD";
const DEFAULT_QUOTE_CURRENCY = "BRL";

export const ConversionContextProvider = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState(DEFAULT_BASE_CURRENCY);
  const [quoteCurrency, setQuoteCurrency] = useState(DEFAULT_QUOTE_CURRENCY);
  const [conversionRate, setConversionRate] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .getConversionRate(baseCurrency, quoteCurrency)
      .then((response) => {
        if (response) {
          setConversionRate(parseFloat(response).toFixed(2));
        }
      })
      .catch((err) => {
        alert("There was an error communication with the server.");
      })
      .finally(() => setLoading(false));
  }, [baseCurrency, quoteCurrency]);

  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  const conversion = {
    baseCurrency,
    setBaseCurrency,
    quoteCurrency,
    setQuoteCurrency,
    conversionRate,
    setConversionRate,
    swapCurrencies,
    loading,
  };
  return (
    <ConversionContext.Provider value={conversion}>
      {children}
    </ConversionContext.Provider>
  );
};
