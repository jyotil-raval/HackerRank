// 30_Days_Code > Day_06_Lets_Review

const processData = input => {
  let [N, ...strings] = input.split('\n');
  strings.forEach(string => {
    let firstHalf = [];
    let secondHalf = [];
    let str_arry = string.split('');
    str_arry.forEach((el, idx) => {
      if (idx % 2 == 0) {
        firstHalf.push(el);
      } else {
        secondHalf.push(el);
      }
    });
    console.log(`${firstHalf.join('')} ${secondHalf.join('')}`);
  });
};

processData(`2
Hacker
Rank`);
