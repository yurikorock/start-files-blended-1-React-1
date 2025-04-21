import { formatDistanceToNow, format } from 'date-fns';

export function FormatDatetoNow(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function FormatDateToTransaction(date) {
  return format(new Date(date), 'Pp');
}
