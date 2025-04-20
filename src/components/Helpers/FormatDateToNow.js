import { formatDistanceToNow } from 'date-fns';

export function FormatDatetoNow(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
