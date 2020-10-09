// 30 Days Code > Day 08 Dictionaries and Maps

const processData = input => {
  const [N, ...dataString] = input.split('\n');
  let phoneBook = dataString.splice(0, N);
  let contact_list = phoneBook.reduce((result, el, idx) => {
    contact_person = el.split(' ');
    result[contact_person[0]] = contact_person[1];
    return result;
  }, {});
  dataString.forEach(element => {
    if (contact_list[element]) {
      console.log(`${element}=${contact_list[element]}`);
    } else {
      console.log(`Not found`);
    }
  });
};

processData(`3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`);
