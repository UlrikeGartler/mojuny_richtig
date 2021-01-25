case clickASK:
    return {
      ...state,
      subCategoryDecision: 1,
    };
  case clickCODE:
    return {
      ...state,
      subCategoryDecision: 2,
    };
  case clickCONCEPT:
    return {
      ...state,
      subCategoryDecision: 3,
    };
  case clickERROR:
    return {
      ...state,
      subCategoryDecision: 4,
    };
  case clickGENERAL:
    return {
      ...state,
      subCategoryDecision: 5,
    };
  case clickLEARN:
    return {
      ...state,
      subCategoryDecision: 6,
    };

    export const clickASK = "clickASK";
    export const clickCODE = "clickCODE";
    export const clickERROR = "clickCONCEPT";
    export const clickERROR = "clickERROR"
    export const clickGENERAL = "clickGENERAL"
    export const clickLEARN = "clickLEARN"