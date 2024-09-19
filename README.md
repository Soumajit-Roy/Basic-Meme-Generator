Basic Meme Generator
====================

This is a **Basic Meme Generator** built using **React** and **Vite** with the **Imgflip API**. The application allows users to select meme templates from the Imgflip API and customize them with their own text.

Demo
----

[Live Link](https://basic-meme-gen.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/edea5a42-dfa2-4c4a-b0f2-97a93c193c8a/deploy-status)](https://app.netlify.com/sites/basic-meme-gen/deploys)

<img src="https://d33wubrfki0l68.cloudfront.net/66ec48bf185f470ed720c382/screenshot_2024-09-19-15-53-06-0000.webp"></img>

Features
--------

-   Fetch popular meme templates using the **Imgflip API**.
-   Customize meme templates with **top** and **bottom** text.
-   Generate and display custom memes in real-time.
-   **Responsive Design**: Works on mobile, tablet, and desktop devices.

Tech Stack
----------

-   **React**: Frontend framework used to build the user interface.
-   **Vite**: For fast development and building.
-   **Imgflip API**: Used to fetch meme templates and create custom memes.

Installation and Setup
----------------------

1.  **Clone the repository**:

    bash

    Copy code

    `git clone https://github.com/Soumajit-Roy/Basic-Meme-Generator.git
    cd Basic-Meme-Generator`

2.  **Install dependencies**:

    bash

    Copy code

    `npm install`

3.  **Start the development server**:

    bash

    Copy code

    `npm run dev`

4.  Open the app in your browser at `http://localhost:3000`.

Usage
-----

1.  Select a meme template from the gallery.
2.  Enter your desired **top text** and **bottom text**.
3.  Click on the **Generate Meme** button to create your custom meme.
4.  Your meme will be generated and displayed below.

Imgflip API
-----------

This project uses the Imgflip API to fetch meme templates and generate memes. Please note that you may need an **Imgflip account** for generating memes.

To modify the API usage:

-   Navigate to `src/utils/api.js` and update the API-related configurations as needed.

Future Improvements
-------------------

-   Add the option to download the generated meme.
-   Improve UI and design.
-   Add more meme customization options (font size, color, etc.).
-   Support for multiple lines of text or more text positions.

Contributing
------------

Feel free to contribute to this project by opening issues or submitting pull requests. For major changes, please open an issue to discuss the proposed changes.

License
-------

This project is licensed under the MIT License.