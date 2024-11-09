import { DateTime } from "luxon";
import { DATE_LOCALE } from "@model/constants";

export const parseDate = (date: string): string =>
  DateTime.fromISO(date).setLocale(DATE_LOCALE).toLocaleString(DateTime.DATETIME_SHORT);
