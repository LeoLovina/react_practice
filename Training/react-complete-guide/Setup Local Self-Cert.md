# local Certificate Authority for Local Development
To generate a local Certificate Authority, and an SSL certificate for Local Development. 
1. install chocolatey (windows)
    - choco install mkcert
2. open a powershell
    - create a folder for the generated certs later. For example c:\SelfCert.
    - Create a locally trusted CA with ```mkcert -install```
    - Generate an SSL certificate with ```mkcert localhost```
3. After mkcert localhost, you can see two files on c:\SelfCert. Now create a .var file under the your React App root and add the following environment variables.
``` 
HTTPS=true
SSL_CRT_FILE=C:/SelfCert/localhost.pem
SSL_KEY_FILE=C:/SelfCert/localhost-key.pem
```
4. run ```npm start```


# reference
- https://www.mariokandut.com/how-to-setup-https-ssl-in-localhost-react/
- https://github.com/FiloSottile/mkcert
