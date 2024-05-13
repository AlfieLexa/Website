const person = {
  name: "Alfie Lexandra",
  age: 15,
  occupation: "CEO of Machaa Corporation",
  hobby: "Coding, Reading",
  contact: "alfie.alexandra@example.com",
  about: "A passionate programmer and tech enthusiast."
};

function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

document.getElementById("name").textContent = person.name;
document.getElementById("age").textContent = `Age: ${calculateAge(person.birthDate)}`;
document.getElementById("occupation").textContent = `Occupation: ${person.occupation}`;
document.getElementById("address").textContent = `Address: ${person.address}`;
document.getElementById("contact").textContent = `Contact: ${person.contact}`;
document.getElementById("about").textContent = person.about;

var idCard = document.getElementById('idCard');
    idCard.addEventListener('copy', function(event) {
      event.preventDefault();
      var copiedText = window.getSelection().toString();
      event.clipboardData.setData('text/plain', copiedText);
    });

    idCard.addEventListener('paste', function(event) {
      event.preventDefault();
    });