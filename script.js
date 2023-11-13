document.addEventListener('DOMContentLoaded', function() {
    
    const taskForm = document.querySelector('.task-list ul');
    const taskSubmission = document.querySelector('.task-center input');
    const submitBtn = document.getElementById('submit');
    const deleteBtn = document.getElementById('delete');
    
    function listAdd() {
        if (taskSubmission && taskSubmission.value.trim() !== '') {
            taskForm.innerHTML += `<li>${taskSubmission.value}</li>`;
            taskSubmission.value = '';
        }
    }

    submitBtn.addEventListener('click', listAdd);
});


