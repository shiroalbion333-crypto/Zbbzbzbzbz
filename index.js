// Updated index.js

// Complete edit modal for the embed
function openEditModal(embedId) {
    // Logic to open the edit modal for the embed
}

// Restrict ping button to only the group creator
const isGroupCreator = (userId) => {
    // Logic to check if the user is the group creator
    return userId === groupCreatorId;
}

// Event listener for ping button
const pingButton = document.getElementById('pingButton');
if (isGroupCreator(currentUser.id)) {
    pingButton.addEventListener('click', () => {
        // Logic for ping action
    });
} else {
    pingButton.disabled = true; // Disable button if not group creator
}