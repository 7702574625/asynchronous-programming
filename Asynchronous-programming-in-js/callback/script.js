// Callback Implementation
document.getElementById('callback-btn').addEventListener('click', () => {
    const output = document.getElementById('callback-output');
    output.textContent = "Processing...";
    
    function fetchData(callback) {
        setTimeout(() => {
            fetch('https://dummyjson.com/posts')  // Use correct API endpoint
                .then(response => response.json())
                .then(data => callback(data.posts.map(post => post.title).join('<br>')));
        }, 5000);
    }

    fetchData((data) => {
        output.innerHTML = data;
    });
});