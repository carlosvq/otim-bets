import { useState } from "react";

export const useAlertState = () => {
  const [isAlertOpen, setAlertOpen] = useState(true);
  return { isAlertOpen, setAlertOpen };
};
