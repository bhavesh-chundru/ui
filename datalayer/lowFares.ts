import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();
import moment from "moment";
import axios from "axios";
import { getToken } from "../helper/token";


export async function fecthData(origin: string, destination: string,presentDate:Date) {

  var currentDate = moment(presentDate);
  var futureMonth = moment(currentDate).add(1, 'M');
  var futureMonthEnd = moment(futureMonth).endOf('month');
 
if(currentDate.date() != futureMonth.date() && futureMonth.isSame(futureMonthEnd.format('YYYY-MM-DD'))) {
    futureMonth = futureMonth.add(1, 'd');
}

  try {
    let tokenHeaders =await getToken();
    const lowFareCalenderUrl = "http://3.111.225.218:8080/api/nsk/v1/availability/";
    const lowFareApiUrl = `${lowFareCalenderUrl}/lowfare/estimate?origin=${origin}&destination=${destination}&currencyCode=INR&includeTaxesAndFees=true&startDate=${currentDate.format("YYYY-MM-DD")}&endDate=${futureMonth.format("YYYY-MM-DD")}&numberOfPassengers=1`;
    let lowFareData = axios.get(lowFareApiUrl,{headers:tokenHeaders})
      .then((fareDetails) => {
        return fareDetails.data;
      })
      .catch((err) => {
        return null;
      });
    return lowFareData;
  } catch (err) {
    return null;
  }
}
