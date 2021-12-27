import { format } from "date-fns";

export const formatDate = (date: string) => {
  try {
    const splitedDate = date.split("/");
    const formattedDate = format(
      new Date(
        Number(splitedDate[2]),
        Number(splitedDate[1]),
        Number(splitedDate[0])
      ),
      "yyyy/MM/dd"
    );
    return formattedDate;
  } catch (err) {}
};
