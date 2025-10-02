const userContainer = document.getElementById("userContainer");
const errorMsg = document.getElementById("errorMsg");
const reloadBtn = document.getElementById("reloadBtn");


function fetchUsers() {
  userContainer.innerHTML = ""; 
  errorMsg.textContent = "";  

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(users => {
      users.forEach(user => {
        const card = document.createElement("div");
        card.className = "user-card";

        card.innerHTML = `
          <h2>${user.name}</h2>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
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


fetchUsers();

