document.addEventListener("DOMContentLoaded", function() {
    // Load Route Map
    const routeMap = document.getElementById('route-map');
    routeMap.innerHTML = '<p>Interactive map will be loaded here.</p>';

    // Load Schedule Table
    const scheduleTable = document.getElementById('schedule-table');
    scheduleTable.innerHTML = `
        <table border="1">
            <thead>
                <tr>
                    <th>Station</th>
                    <th>Arrival Time</th>
                    <th>Departure Time</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>The LoL City Centre</td>
                    <td>08:00 AM</td>
                    <td>08:10 AM</td>
                </tr>
                <tr>
                    <td>The LoL 2</td>
                    <td>08:30 AM</td>
                    <td>08:40 AM</td>
                </tr>
            </tbody>
        </table>
    `;

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulate sending the data to a server
        console.log('Contact Form Submitted:', { name, email, message });
        alert('Thank you for contacting us!');

        // Reset the form
        contactForm.reset();
    });
});
