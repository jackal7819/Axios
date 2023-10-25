# Axios Tutorial

## Table of Contents

- [Axios Documentation](#docs)
- [Installation](#install)
- [First Request](#first-request)
- [Headers](#headers)
- [POST Request](#post-request)
- [Global Defaults](#global-defaults)
- [Custom Instance](#custom-instance)
- [Interceptors](#interceptors)

## Axios Documentation

You can find detailed documentation for Axios [here](https://axios-http.com/docs/intro).

## Installation

To install Axios, use npm:

```
npm install axios
```

Alternatively, add the following script to your HTML file:

```
<script src='https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'></script>
```

## First Request

Making a GET request using Axios:

- Import Axios.
- axios.get(url)
- axios.post(url)
- axios.patch/put(url)
- axios.delete(url)
- Returns a Promise.
- Response data is located in the "data" property.
- Errors are found in "error.response".

## Headers

Adding headers to your request:

- The second argument: `axios.get(url, {})`.
- The third argument for requests with data: `axios.post(url, {data}, {})`.

## POST Request

Sending data to the server:

- `axios.post(url, {data})`.
- Additional options (authentication header): `axios.post(url, {data}, {})`.

## Global Defaults

Global Axios settings:

- Setting headers and a base URL.
- `axios.defaults.headers['Accept'] = 'application/json'`.
- `axios.defaults.baseURL = 'https://api.example.com'`.
- `axios.defaults.headers['Authorization'] = AUTH_TOKEN`.
- `axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'`.

## Custom Instance

Creating a custom Axios instance:

- `axios.create({baseURL, headers})`.

## Interceptors

Using interceptors to intercept requests and responses:

- Global and custom interceptors.
- Handling request and response.
- Handling errors and actions for specific status codes.

## Update

In recent Axios versions, the "common" property for settings is no longer used. The following lines:

- `axios.defaults.headers['Accept'] = 'application/json'`.
- `axios.defaults.headers['Authorization'] = AUTH_TOKEN`.

Should be replaced with:

- `request.headers['Accept'] = 'application/json'`.

This brief README covers the basic aspects of working with Axios. For more details and additional configurations, refer to the [Axios documentation](https://axios-http.com/docs/intro).
