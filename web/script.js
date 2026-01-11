document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');
    const newBtn = document.getElementById('newBtn');
    const openBtn = document.getElementById('openBtn');
    const saveBtn = document.getElementById('saveBtn');
    const fileInput = document.getElementById('fileInput');
    const status = document.getElementById('status');
    
    let currentFileName = 'Untitled';
    
    function showStatus(message, isError = false) {
        status.textContent = message;
        status.className = isError ? 'error' : '';
        setTimeout(() => {
            status.textContent = '';
            status.className = '';
        }, 3000);
    }
    
    // New button
    newBtn.addEventListener('click', function() {
        editor.value = '';
        currentFileName = 'Untitled';
        document.title = 'Text Editor Web - Untitled';
        showStatus('New file created');
    });
    
    // Open button
    openBtn.addEventListener('click', function() {
        fileInput.click();
    });
    
    // File input change
    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            currentFileName = file.name;
            document.title = 'Text Editor Web - ' + file.name;
            
            const reader = new FileReader();
            reader.onload = function(event) {
                editor.value = event.target.result;
                showStatus('File loaded: ' + file.name);
            };
            reader.onerror = function() {
                showStatus('Error loading file', true);
            };
            reader.readAsText(file);
        }
        fileInput.value = '';
    });
    
    // Save button
    saveBtn.addEventListener('click', function() {
        const text = editor.value;
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = currentFileName !== 'Untitled' ? currentFileName : 'document.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showStatus('File saved: ' + a.download);
    });
    
    // Auto-save filename update
    editor.addEventListener('input', function() {
        if (currentFileName === 'Untitled') {
            // Optional: Could implement auto-naming
        }
    });
});
