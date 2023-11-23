#1 - choco install mkcert

#2 - mkcert -key-file key.pem -cert-file cert.pem localhost

#3 - "start": "set HTTPS=true&&set SSL_CRT_FILE=cert.pem&&set SSL_KEY_FILE=key.pem&&react-scripts start" in package.json



....................

"@babel/plugin-proposal-private-property-in-object": "^7.21.11"