import { format, isToday, isYesterday, isTomorrow } from 'date-fns';

export function formatDueDate(datestring: string) {
  const date = datestring;

  let prefix = format(date, 'dd/MM/yyyy');

  if (isToday(date)) {
    prefix = 'Hoje';
  } else if (isYesterday(date)) {
    prefix = 'Ontem';
  } else if (isTomorrow(date)) {
    prefix = 'Amanhã';
  }

  const hour = format(date, 'HH:mm');
  return `${prefix} at ${hour}`;
}