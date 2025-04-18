function findLongestPalindrome(str) {
    if (!str || str.length < 1) return "";
  
    let start = 0, end = 0;
  
    for (let i = 0; i < str.length; i++) {
      const len1 = expandAroundCenter(str, i, i);
      const len2 = expandAroundCenter(str, i, i + 1);
      const len = Math.max(len1, len2);
  
      if (len > end - start) {
        start = i - Math.floor((len - 1) / 2);
        end = i + Math.floor(len / 2);
      }
    }
  
    return str.substring(start, end + 1);
  }
  
  function expandAroundCenter(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }
  