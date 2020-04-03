export const people = [
  {
    id: "1",
    name: "Nicolas",
    age: 18,
    gender: "female"
  },
  {
    id: "2",
    name: "hawawa",
    age: 18,
    gender: "female"
  },
  {
    id: "3",
    name: "mico",
    age: 18,
    gender: "female"
  },
  {
    id: "4",
    name: "wawawa",
    age: 18,
    gender: "female"
  }
];

export const getById = id => {
  const filteredPeople = people.filetr(person => people.id === id);
  return filteredPeople[0];
};
