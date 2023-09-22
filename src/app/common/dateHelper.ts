export const formatDate = (inputDate: string): string => {
  const dateParts = inputDate.split('/');
  if (dateParts.length === 3) {
    const day = parseInt(dateParts[0], 10);
    const monthIndex = parseInt(dateParts[1], 10) - 1;
    const year = parseInt(dateParts[2], 10);
    
    if (!isNaN(day) && !isNaN(monthIndex) && !isNaN(year)) {
      const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
      ];
      
      const monthName = months[monthIndex];
      
      return `${day} ${monthName} ${year}`;
    }
  }
  
  // If the input date is not in the correct format, return an error message or the original input.
  return 'Invalid Date';
}
