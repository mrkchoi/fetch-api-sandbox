document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getApi);

// Get local text file data
function getText() {
    fetch('../test.txt')
        .then(res => res.text())
        .then(data => {
            // console.log(data);
            document.getElementById('output').innerHTML = `
                <p>${data}</p>
            `;
        })
        .catch(err => console.log(err));
}

// Get local JSON data
function getJson() {
    fetch('../posts.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            let output = '';
            data.forEach(function(post) {
                output += `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <br><br>
                `;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}

// Get API data
function getApi() {
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            let output = '';
            data.forEach(function(user) {
                output += `
                    <h5>Login ID: ${user.login}</h5>
                    <p>ID: ${user.id}<br>Github Profile URL: <a target="_blank" href="${user.html_url}">${user.html_url}</a></p>
                `;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}

