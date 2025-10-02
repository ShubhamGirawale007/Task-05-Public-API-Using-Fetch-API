const userContainer = document.getElementById("userContainer");
const errorMsg = document.getElementById("errorMsg");
const reloadBtn = document.getElementById("reloadBtn");


function fetchUsers() {
  userContainer.innerHTML = ""; 
  errorMsg.textContent = "Loading data... ⏳"; 

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(users => {
      errorMsg.textContent = ""; 
      users.forEach(user => {
        const card = document.createElement("div");
        card.className = "user-card";

        card.innerHTML = `
          <h2>${user.name}</h2>
          <p><strong>Username:</strong> ${user.username}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
          <p><strong>Company:</strong> ${user.company.name}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city} - ${user.address.zipcode}</p>
        `;

        userContainer.appendChild(card);
      });
    })
    .catch(error => {
      errorMsg.textContent = "⚠️ Failed to fetch data. Check internet connection!";
      console.error("Error:", error);
    });
}


reloadBtn.addEventListener("click", fetchUsers);
