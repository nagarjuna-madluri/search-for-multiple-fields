let obbj = [
  {
    name: 'Arjun',
    id: 112233,
    address: 'shdhsd sh dhsad sad sajdas ',
  },
  {
    name: 'Suresh2',
    id: 242343,
    address: 'sdsadsf ',
  },
  {
    name: 'Rajesh',
    id: 4535435,
    address: 'utyuyttgntyn trnrt ',
  },
  {
    name: 'Ram2',
    id: 87669789,
    address: 'sggfdgfhhgfhgff greges ',
  },
  {
    name: 'Salesh',
    id: 8779,
    address: 'hyrtyggre errgee',
  },
];

let search = (key) => {
  let nameFilter = obbj.filter((el) => {
    return el.name.toLowerCase().includes(key.toLowerCase());
  });
  let idFilter = obbj.filter((el) => {
    return el.id.toString().toLowerCase().includes(key.toLowerCase());
  });

  let mergeData = [...nameFilter, ...idFilter];
  return [...new Set(mergeData)];
};

console.log(search('2'));
