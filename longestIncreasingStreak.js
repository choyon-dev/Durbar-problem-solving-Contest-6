function longestIncreasingStreak(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let currentStreak = 1;
  let longestStreak = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentStreak++;
    } else {
      currentStreak = 1;
    }

    if (currentStreak > longestStreak) {
      longestStreak = currentStreak;
    }
  }

  return longestStreak;
}



// let test = longestIncreasingStreak([1, 2, 3, 1, 2]);
// let test = longestIncreasingStreak([5, 4, 3, 2, 1]);
let test = longestIncreasingStreak([]);
console.log(test);