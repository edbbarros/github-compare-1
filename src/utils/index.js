import { formatDistanceStrict } from 'date-fns';

// function to format a given date to time distance
export function formatTime(date) {
  return formatDistanceStrict(new Date(date), new Date(), { addSuffix: true });
}
