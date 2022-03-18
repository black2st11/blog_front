import { parseISO, format } from "date-fns";
import * as S from "./style";

export default function Date({ dateString }) {
  const date = parseISO(dateString);

  return <S.Date dateTime={dateString}>{format(date, "LLLL d, yyyy")}</S.Date>;
}
