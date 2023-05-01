export function sortAddressDescription(add) {
  if (add) {
    const sortAdd = `${add.slice(0, 30)}...${add.slice(add.length - 30)}`;
    return sortAdd;
  } else {
    return add;
  }
}

export const calculateTimeLeft = (endDate) => {
  if (endDate) {
    let difference = endDate * 1000 - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  } else {
    return false;
  }
};






