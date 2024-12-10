// Async/Await Implementation
document.getElementById('async-btn').addEventListener('click', async () => {
    const output = document.getElementById('async-output');
    output.textContent = "Loading...";

    const fetchData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/posts'); // Correct endpoint
            const data = await response.json();
            return data.posts.map(post => post.title).join('<br>');
        } catch {
            throw new Error("Failed to fetch data");
        }
    };

    try {
        const data = await fetchData();
        output.innerHTML = data;
    } catch (err) {
        output.textContent = err.message;
    }
});