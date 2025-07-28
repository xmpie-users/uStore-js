# Docker configuration for uStore NG Theme Development
I have made this docker configuration to allow for easier theme development with a consistent development environment, or making it easier to develop "on the go" with changing hardware.<br />

I have set up the development environment locally on a lot of machines, and there are always different problems I have to solve. Using Docker saves me a lot of time and frustration. 

<b>Note: The configuration is set up for uStore V14 or later.</b>

## Installation

Be sure to make a user at <a href="https://www.docker.com/">Docker.com</a>, and install Docker Desktop or the CLI.

Put all of the Docker-files in this directory in the root of the theme-project. It should look something like the structure below:
```bash
AquaBlue
├── skin (folder)
├── src (folder)
├── .dockerignore
├── config.json
├── docker-compose.yml
├── Dockerfile
└── thumbnail.png
```

Inside `Dockerfile` at line 19, insert your IP or domain to your uStore server at the placeholder `{YOUR_SERVER_IP_OR_DOMAIN}`.<br />
Do the same inside `docker-compose.yml`.

Open a terminal in the root of the project, and run:
```bash
docker compose up --build
```
In the browser, insert the standard URL as <a href="https://github.com/XMPieLab/uStore-NG/wiki/Getting-started">described by XMPie</a>:
```bash
http://localhost:5000/ustore?storeid={storeID}&devmode=true&devthemename={themeName}
```

## Thank you
I hope anybody else find this configuration useful!<br />
For any questions, or suggestions for improvements, feel free to <a href="mailto:magnus.e.b@hotmail.com">contact me</a>.