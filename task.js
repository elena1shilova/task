<!DOCTYPE html>
<html>
<head>
    <title>Ваше имя</title>
</head>
<body>
    <h1>Привет, как Вас зовут?</h1>
    <input type="text" id="nameInput">
    <button id="submitButton">Отправить</button>
    <p id="output"></p>

    <script>
        document.getElementById("submitButton").addEventListener("click", function() {
            var name = document.getElementById("nameInput").value;
            var output = document.getElementById("output");
            output.textContent = "Ваше имя: " + name;
        });
    </script>
</body>
</html>
