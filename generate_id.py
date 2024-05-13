person = {
    "name": "John Doe",
    "age": 30,
    "occupation": "Software Engineer",
    "address": "123 Main Street, City, Country",
    "contact": "john.doe@example.com",
    "about": "A passionate programmer and tech enthusiast."
}

with open("index.html", "w") as f:
    f.write(f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kartu Identitas</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="idCard">
    <div id="photo"></div>
    <div id="details">
      <h2 id="name">{person['name']}</h2>
      <p id="age">Age: {person['age']}</p>
      <p id="occupation">Occupation: {person['occupation']}</p>
      <p id="address">Address: {person['address']}</p>
      <p id="contact">Contact: {person['contact']}</p>
      <p id="about">{person['about']}</p>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>''')

print("Kartu identitas berhasil dibuat dalam file 'index.html'.")
