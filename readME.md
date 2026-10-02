# Catstagram

Catstagram is a frontend web application that displays cat breeds, images, and descriptions using The Cat API. Built with HTML5, CSS3, and vanilla JavaScript, this project demonstrates REST API integration, asynchronous programming, and dynamic DOM manipulation.

## View the Live Demo

Explore the project in your browser: [Open the Catstagram live demo](https://chia20-1.github.io/Catstagram/).

1. Open the link above. No installation or local setup is required.
2. Allow the breed data and images to load, then scroll through the cat cards to read their names and descriptions.
3. Resize your browser or open the demo on a mobile device to see how the Flexbox layout adapts to the screen width.

For recruiters, the demo provides a quick look at the API-driven interface. The sections below explain the technologies and implementation behind it.

## Features

- Fetches cat breed data from a REST API and parses JSON responses.
- Generates breed cards dynamically with an image, breed name, and description.
- Uses CSS Flexbox and wrapping to arrange cards across available screen widths.
- Displays a local placeholder image when a breed image fails to load.
- Logs fetch errors to the browser console for troubleshooting.

## Technologies and Skills

- **HTML5:** Semantic page structure with header and main elements.
- **CSS3:** Flexbox layouts, card styling, and image sizing with `object-fit`.
- **JavaScript:** Fetch API, `async`/`await`, array iteration, and DOM element creation.
- **REST APIs and JSON:** Retrieves breed information from The Cat API and maps response fields to the interface.
- **Error handling:** Uses `try`/`catch` for fetch errors and an image fallback for unavailable photos.

## How It Works

1. When the page loads, `fetchData()` requests breed data from `https://api.thecatapi.com/v1/breeds`.
2. The response is converted to JSON.
3. Each breed is passed to `printData()`, which creates and appends a card to the page.
4. Images use the breed's `reference_image_id`; failed image requests display `missingcat.png`.

## Run Locally

**Requirements:** A modern web browser, Python 3 for the local server, and an internet connection to load API data and images.

From the project directory, start a local server:

```sh
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your browser. Keep the terminal running while using the application, and press `Ctrl+C` to stop the server.

### API Authentication

The checked-in `app.js` requests the breeds endpoint without an API key. If authentication is needed for your account, add an `x-api-key` header to the existing fetch call for local testing:

```js
const response = await fetch(ENDPOINT, {
    headers: {
        "x-api-key": "YOUR_API_KEY"
    }
});
```

Do not commit a real API key. Browser JavaScript exposes keys to visitors; a public deployment should send authenticated requests through a backend that stores the key securely.

See [The Cat API authentication documentation](https://docs.thecatapi.com/docs/authorization) for details.

## Project Structure

```text
Catstagram/
├── index.html      # Page structure and script entry point
├── style.css       # Layout and card styles
├── app.js          # API requests and dynamic card rendering
├── missingcat.png  # Fallback for unavailable images
└── readME.md       # Project overview and setup instructions
```

## Manual Verification

- Start the local server and confirm that breed cards load.
- Check that cards display breed names, descriptions, and images.
- Resize the browser to check how the card layout wraps.
- Use browser developer tools to block a breed image request and confirm the placeholder appears.
- Inspect the Network and Console panels if API data fails to load.

## Current Limitations

- Fetch errors are logged to the console; there is no on-page loading or error message.
- The fetch handler does not currently check HTTP status codes before parsing the response.
- Search, filtering, and pagination are not implemented.

## Project Focus

This project was built to practice turning external API data into a browser interface without a frontend framework. It demonstrates foundational frontend development skills: asynchronous data fetching, JSON processing, DOM manipulation, CSS layout, and image failure handling.
