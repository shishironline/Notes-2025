// ==UserScript==
        function toggleReaderMode() {
            const readerMode = document.getElementById('reader-mode');
            const readerContent = document.getElementById('reader-content');
            const body = document.body;

            if (readerMode.style.display === 'block') {
                // Exit reader mode
                readerMode.style.display = 'none';
                body.style.overflow = 'auto';
            } else {
                // Enter reader mode
                readerMode.style.display = 'block';
                body.style.overflow = 'hidden';

                // Clear existing content
                readerContent.innerHTML = '';

                // Clone the main content
                const mainContent = document.querySelector('main'); // Adjust selector as needed
                if (mainContent) {
                    const clonedContent = mainContent.cloneNode(true);

                    // Hide non-essential elements
                    clonedContent.querySelectorAll('header, footer, nav, aside, form').forEach(el => el.style.display = 'none');

                    // Append the cleaned content to the reader mode container
                    readerContent.appendChild(clonedContent);
                }
            }
        }

        document.getElementById('toggle-reader-mode').addEventListener('click', toggleReaderMode);
// ==/UserScript==