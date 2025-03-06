
document.addEventListener("DOMContentLoaded", () => {
    
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            let row = e.target.closest('tr');
            let cells = row.querySelectorAll('td');
            let id = cells[0].innerText;
            let name = cells[1].innerText;
            let dob = cells[2].innerText;
            let gender = cells[3].innerText;
            let className = cells[4].innerText;
            let phone = cells[5].innerText;
            let place = cells[6].innerText;

            alert(`Editing Row:\nID: ${id}\nName: ${name}\nDOB: ${dob}\nGender: ${gender}\nClass: ${className}\nPhone: ${phone}\nPlace: ${place}`);
        });
    });

    
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            let row = e.target.closest('tr');
            if (confirm("Are you sure you want to delete this row?")) {
                row.remove(); 
            }
        });
    });

   
    window.addNewRow = function() {
        const id = prompt("Enter ID:");
        const name = prompt("Enter Name:");
        const dob = prompt("Enter DOB:");
        const gender = prompt("Enter Gender:");
        const className = prompt("Enter Class:");
        const phone = prompt("Enter Phone:");
        const place = prompt("Enter Place:");

        const table = document.querySelector("table tbody");
        const newRow = table.insertRow();

        newRow.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${dob}</td>
            <td>${gender}</td>
            <td>${className}</td>
            <td>${phone}</td>
            <td>${place}</td>
            <td class="action">
                <button class="edit-btn"><i class="fa-solid fa-user-pen"></i></button>
                <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;

        newRow.querySelector(".edit-btn").addEventListener('click', (e) => {
            let row = e.target.closest('tr');
            let cells = row.querySelectorAll('td');
            let id = cells[0].innerText;
            let name = cells[1].innerText;
            let dob = cells[2].innerText;
            let gender = cells[3].innerText;
            let className = cells[4].innerText;
            let phone = cells[5].innerText;
            let place = cells[6].innerText;

            alert(`Editing Row:\nID: ${id}\nName: ${name}\nDOB: ${dob}\nGender: ${gender}\nClass: ${className}\nPhone: ${phone}\nPlace: ${place}`);
        });

        newRow.querySelector(".delete-btn").addEventListener('click', (e) => {
            let row = e.target.closest('tr');
            if (confirm("Are you sure you want to delete this row?")) {
                row.remove(); 
            }
        });
    }
});
=======
>>>>>>> 30374f41304c8f5374f7ebf0ee2de20f24bc4de8

