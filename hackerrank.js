/*// Complete the minimumNumber function below.
function minimumNumber(n, pw) {
    if ( n < 1) return 6;
    if (n < 2) return 5;
    // Return the minimum number of characters to make the password strong
    const numbers = "0123456789"
    const lower_case = "abcdefghijklmnopqrstuvwxyz"
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const special_characters = "!@#$%^&*()-+"

    const numArr = numbers.split('');
    const lowerArr = lower_case.split('');
    const upperArr = upper_case.split('');
    const specialArr = special_characters.split('');

    let count = 0;

    const hasChars = (pw) => {
        let nums = 0;
        let lower = 0;
        let upper = 0;
        let special = 0;

        for (let i = 0; i < pw.length; i++){
          if (numArr.includes(pw[i])) nums++;
          if (lowerArr.includes(pw[i])) lower++;
          if (lowerArr.includes(pw[i])) lower++;
          if (upperArr.includes(pw[i])) upper++;
          if (specialArr.includes(pw[i])) special++;
        }
        nums > 0 ? null : count++;
        lower > 0 ? null : count++;
        upper > 0 ? null : count++;
        special > 0 ? null : count++;
    }

    hasChars(pw);

    if(count > (6 - pw.length)) return count; // if the count (chars needed) is bigger than  how. many characters needed total, then return that number
    if(pw.length < 6) return 6 - pw.length; //else if the string's length is less than how many characters needed total, return the difference of the numbers needed minus the string length given

}
 */
