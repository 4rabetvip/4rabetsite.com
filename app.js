function storeUserInfo() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (email && password) {
        const userData = {
            email: email,
            password: password, // Consider hashing this for security
            timestamp: Date.now()
        };
        
        let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        storedUsers.push(userData);
        localStorage.setItem("users", JSON.stringify(storedUsers));
        
        console.log("User data stored successfully.");
    }
}

function cleanOldData() {
    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const twoDays = 2 * 24 * 60 * 60 * 1000;
    const now = Date.now();
    
    storedUsers = storedUsers.filter(user => now - user.timestamp < twoDays);
    localStorage.setItem("users", JSON.stringify(storedUsers));
}

function retrieveStoredUsers() {
    console.log("Stored Users:", JSON.parse(localStorage.getItem("users")) || []);
}

// Attach store function to login button
document.getElementById("sign-in-btn").addEventListener("click", function() {
    storeUserInfo();
});

// Cleanup old data on page load
cleanOldData();
