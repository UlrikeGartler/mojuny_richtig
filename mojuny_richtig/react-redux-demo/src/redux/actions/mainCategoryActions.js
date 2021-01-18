import { BUY_STRATEGY } from "./mainCategoryTypes";
import { BUY_MOTIVATION } from "./mainCategoryTypes";

export const buyStrategy = () => {
  return {
    type: BUY_STRATEGY,
  };
};
export const buyMotivation = () => {
  return {
    type: BUY_MOTIVATION,
  };
};
