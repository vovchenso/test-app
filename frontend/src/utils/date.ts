import { format } from "date-fns";

export const getFormattedDate = (date: string | null) => {
  if (!date) {
    return '';
  };

  try {
    return format(date, 'MM.dd.yyyy');
  } catch {
    return date;
  }
}