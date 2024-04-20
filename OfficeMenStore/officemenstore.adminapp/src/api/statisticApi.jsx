import API from './API';
const statisticApi = {
  GetStatisticDetail: () => {
    return API.get("/Statistic/StatisticDetails");
  },
};
export default statisticApi;