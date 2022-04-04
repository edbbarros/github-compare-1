import { formatDistanceStrict } from 'date-fns';

export function formatTime(date) {
  return formatDistanceStrict(new Date(date), new Date(), { addSuffix: true });
}
