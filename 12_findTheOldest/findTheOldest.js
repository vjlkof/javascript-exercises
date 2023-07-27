const findTheOldest = function (people) {
  return people.reduce((oldPerson, person) => {
    const yearOfDeath = getDeathYear(person.yearOfDeath);
    const oldYearOfDeath = getDeathYear(oldPerson.yearOfDeath);
    if (
      oldYearOfDeath - oldPerson.yearOfBirth <
      yearOfDeath - person.yearOfBirth
    ) {
      return person;
    }
    return oldPerson;
  }, people[0]);
};

function getDeathYear(deathYear) {
  return deathYear ? deathYear : new Date().getFullYear();
}

// Do not edit below this line
module.exports = findTheOldest;
