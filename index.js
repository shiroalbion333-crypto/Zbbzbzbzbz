// edit_group button handler
const editGroupButton = document.getElementById('edit_group');
editGroupButton.addEventListener('click', function() {
    // Open the edit modal
    const modal = document.getElementById('editModal');
    modal.style.display = 'block';
});

// Modal submit handler for interactionCreate event
const modalSubmitButton = document.getElementById('modalSubmit');
modalSubmitButton.addEventListener('click', function() {
    // Gather data from the modal
    const tipo = document.getElementById('tipo').value;
    const jogadores = document.getElementById('jogadores').value;
    const classes = document.getElementById('classes').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;
    const descricao = document.getElementById('descricao').value;

    // Perform editing logic here
    // ...
    console.log('Editing group with:', tipo, jogadores, classes, data, horario, descricao);

    // Close the modal after submission
    const modal = document.getElementById('editModal');
    modal.style.display = 'none';
});

// Restrict ping button to group creator only
const pingButton = document.getElementById('pingButton');
const isGroupCreator = /* logic to check if user is group creator */;
if (!isGroupCreator) {
    pingButton.disabled = true; // Disable button if not creator
}
