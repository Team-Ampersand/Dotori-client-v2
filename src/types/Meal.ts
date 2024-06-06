export type MealInfo = {
  ATPT_OFCDC_SC_CODE: string;
  ATPT_OFCDC_SC_NM: string;
  SD_SCHUL_CODE: string;
  SCHUL_NM: string;
  MMEAL_SC_CODE: string;
  MMEAL_SC_NM: string;
  MLSV_YMD: string;
  MLSV_FGR: number;
  DDISH_NM: string;
  ORPLC_INFO: string;
  CAL_INFO: string;
  NTR_INFO: string;
  MLSV_FROM_YMD: string;
  MLSV_TO_YMD: string;
  LOAD_DTM: string;
};

export type MealResponse = {
  mealServiceDietInfo: [
    {
      head: Array<
        | { list_total_count: number }
        | { RESULT: { CODE: string; MESSAGE: string } }
      >;
    },
    {
      row: MealInfo[];
    }
  ];
};
