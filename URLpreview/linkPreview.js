document.getElementById('linkPreviewForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    const urlInput = document.getElementById('urlInput');
    const previewContainer = document.getElementById('previewContainer');

    // Clear any previous content in the preview container
    previewContainer.innerHTML = '';

    try {
        const response = await getLinkPreview(urlInput.value, 'f1d241dbd4ea5a5785bee8e2d9e7924b');
        previewContainer.innerHTML = `<pre>${JSON.stringify(response, null, 2)}</pre>`;
    } catch (error) {
        previewContainer.innerHTML = `<p>Error fetching link preview: ${error.message}</p>`;
    }
});

async function getLinkPreview(url, apiKey) {
    const data = { q: url };

    const response = await fetch('https://api.linkpreview.net', {
        method: 'POST',
        headers: {
            'X-Linkpreview-Api-Key': apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}