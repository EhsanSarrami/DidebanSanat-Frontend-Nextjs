import * as moment from "jalali-moment";

const funcConvertDate = (date, lang, format) =>
  moment(date).locale(lang).format(format);

export default funcConvertDate;
