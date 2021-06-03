---
id: ssl
title: What is SSL
sidebar_label: What is SSL
---

**SSL** is an acronym for **Secure Socket Layer**.
SSL certificates create a foundation of trust by establishing a secure connection. To assure visitors their connection is secure, browsers provide special visual cues that range anything from a green padlock to a branded URL bar.

SSL certificates have a key pair: a **public** and a **private** key. These keys work together to establish an encrypted connection.

## Considerations

Here are the key points to be considered, if you want to configure all the BI Hub components including the BI Platforms for SSL (Self Signed SSL).

It is always recommended to use SSL wherever it is supported & allowed.
It is security recommended practice to use SSL when you are handling logins and credentials so that they would not be transmitted over the networks in plaintext form.

There is no difference in terms of security provided by the Self-Signed certificate versus the Publicly Trusted certificate except for the Certificate Authority (CA) which signs the certificate.
For Self-Signed certificates, the CA’s root certificate should be internally trusted across all systems which will be accessing the website.

## SSL Format and conversion

There are multiple types of encoding supported in SSL and their use cases vary with platform and web servers.
The common ones that are widely supported would be **PEM (Privacy Enhanced Mail)** & **DER (Distinguished Encoding Rules)**.

Here is a simple example for converting a **DER** certificate into **PEM**:

```json
openssl x509 -inform der -in der_certificate.cer -out pem_certificate.crt
```
