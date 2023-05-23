RewriteEngine On
RewriteCond %{download.html} !-f
RewriteRule ^([^\.]+)$ $1.html [NC,L]
