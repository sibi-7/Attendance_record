document.addEventListener("DOMContentLoaded", function() {
    const attendanceForm = document.getElementById("attendance-form");

    attendanceForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const date = document.getElementById("date").value;
        const timeSlots = document.querySelectorAll('input[name="time"]:checked');
        const selectedTimes = [];
        timeSlots.forEach(slot => selectedTimes.push(slot.value));

        const attendance = {};
        const studentRows = document.querySelectorAll("#student-table tbody tr");

        studentRows.forEach((row, index) => {
            const studentName = row.querySelector("td:first-child").textContent;
            const isChecked = row.querySelector('input[type="checkbox"]').checked;
            attendance[studentName] = isChecked;
        });

        console.log("Date:", date);
        console.log("Selected Time Slots:", selectedTimes);
        console.log("Attendance:", attendance);


        alert("Attendance has been submitted!");

        attendanceForm.reset();
    });
});
