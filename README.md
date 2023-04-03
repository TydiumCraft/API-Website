# TydiumCraft API Website
The main website where all API Documentation is held.

### Pull Request
Feel free to make any PRs to the repository. I am always looking to improve this page and it would always be nice to have the communities back. Feel free to reach out inside of the [Discord](https://discord.tydiumcraft.net/) for any questions.

### Note
The source code is meant to be ran with NGINX. It utilizes three main features.
- Includes (SSI)
- Removes .html from the request links.
- Uses error page configurations.

Example Nginx Config Setup:
```nginx
    server {
        listen       80;
        server_name  localhost;

        root html;
        index api.html;
        error_page 403 /403.html;
        error_page 404 /404.html;

    location / {
        ssi on;
        if ($request_uri ~ ^/(.*)\.html$) {
            return 301 /$1;
        }
        try_files $uri $uri.html $uri/ =404;
        }
    }
 ```