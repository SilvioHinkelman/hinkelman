import { format, intervalToDuration } from "date-fns";

export function date(initial: Date, finish: Date) {
  const today = new Date();
  const isToday = today.toDateString() === finish.toDateString();
  const initialDate = format(initial, "dd / MM / yyyy");
  const finishDate = format(finish, "dd / MM / yyyy");
  return `${initialDate} até ${isToday ? "hoje" : finishDate}`;
}

export function dateDiference(startDate: Date, endDate: Date) {
    const duration = intervalToDuration({
      start: startDate,
      end: endDate
    });

    let result = "";

    if (duration.years !== undefined && duration.years > 0) {
      result += `${duration.years} ${duration.years === 1 ? "ano" : "anos"}`;
    }

    if (duration.months !== undefined && duration.months > 0) {
      if (result) result += " - ";
      result += `${duration.months} ${duration.months === 1 ? "mês" : "meses"}`;
    }

    if (duration.days !== undefined && duration.days > 0) {
      if (result) result += " - ";
      result += `${duration.days} ${duration.days === 1 ? "dia" : "dias"}`;
    }
  
    return result || "Nenhuma diferença";
  }
