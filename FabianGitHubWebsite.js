<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Website</title>
</head>
<body>
    <header>
        <h1>Welcome to My Personal Website</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#" onclick="loadPage('introduction')">Introduction</a></li>
            <li><a href="#" onclick="loadPage('projects')">Projects</a></li>
        </ul>
    </nav>
    <main id="mainContent">
        <!-- Content will be loaded dynamically here -->
    </main>
    <footer>
        <p>&copy; 2024 My Personal Website</p>
    </footer>

    <script>
        function loadPage(page) {
            const mainContent = document.getElementById('mainContent');
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    mainContent.innerHTML = this.responseText;
                }
            };
            xhttp.open("GET", page + ".html", true);
            xhttp.send();
        }

        // Load the introduction page by default
        loadPage('introduction');
    </script>
</body>
</html>
