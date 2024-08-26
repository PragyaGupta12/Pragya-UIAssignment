export const calculatePoints = (amount) => {
    let rewardpoints = 0;
    if (amount > 100) {
      rewardpoints += (amount - 100) * 2; //any $ over 100 will get 2 points
      rewardpoints += 50;
    }
    else if (amount > 50) {
      rewardpoints += (amount - 50) * 1; //this will make sure that the minimum val is considered for 1 point
    }
    return rewardpoints;
  };
  