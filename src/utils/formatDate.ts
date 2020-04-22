import { format } from 'date-fns';

const formatDate = (date: Date): string =>
  new Date(date).toLocaleDateString('pt-br');
export default formatDate;
