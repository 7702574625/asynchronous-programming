// Promise Implementation
document.getElementById('promise-btn').addEventListener('click', () => {
    const output = document.getElementById('promise-output');
    output.textContent = "Loading..."; // Show "Loading..." while waiting

    // Create a Promise to fetch data
    const fetchPromise = new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject("Operation timed out"); // Reject if it takes longer than 5 seconds
        }, 5000);

        fetch('https://jsonplaceholder.typicode.com/posts')  // Corrected endpoint
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                clearTimeout(timeout); // Clear timeout if the response is successful
                return response.json();
            })
            .then(data => resolve(data.map(post => post.title).join('<br>'))) // Corrected the structure for the map
            .catch(err => reject(`Error: ${err.message}`));
    });

    fetchPromise
        .then(data => {
            output.innerHTML = data; // Display fetched data
        })
        .catch(err => {
            output.textContent = err; // Display error messages
        });
});
