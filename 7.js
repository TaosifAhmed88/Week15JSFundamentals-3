const newMap = new Map();

function addUser(name, age, email) {
  const userInfo = { age, email };
  newMap.set(name, userInfo);
}

function updateUser(name, age, email) {
  if (newMap.has(name)) {
    const userInfo = newMap.get(name);
    userInfo.age = age;
    userInfo.email = email;
  }
}

function deleteUser(name) {
  newMap.delete(name);
}

addUser("Taosif", 21, "taosif@example.com");
addUser("Ahmed", 25, "Ahmed@example.com");
console.log(newMap);

updateUser("Taosif", 22, "Ahmedtaosif@example.com");
console.log(newMap);

deleteUser("Ahmed");
console.log(newMap);
