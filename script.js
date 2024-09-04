document.getElementById("attendance-form").addEventListener("submit", function(event){
    event.preventDefault();

    // Collect data
    const date = document.getElementById("date").value;
    const course = document.getElementById("course").value;
    const attendance = Array.from(document.querySelectorAll("input[name='attendance']:checked"))
                            .map(input => input.closest('tr').querySelector('td').innerText);

    console.log("Date:", date);
    console.log("Course:", course);
    console.log("Attendance for students:", attendance);

    // Here, you can send this data to your backend server via an AJAX request (using fetch or axios)
    alert("Attendance submitted successfully!");
});


