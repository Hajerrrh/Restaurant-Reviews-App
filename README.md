# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, I was supposed to convert a static webpage to a mobile-ready web application. 
In **Stage One**, I took a static design that lacks accessibility and converted it to be responsive on different sized displays and accessible for screen reader use. I have also added a service worker to begin the process of creating a seamless offline experience for the web application's users.

### Specification

I have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. My job was to update the code to resolve these issues while still maintaining the included functionality. 

### How to run the application?

In order to run the application you have some options:


* Download as .zip file or clone this project:

    ```
    $ git clone https://github.com/Hajerrrh/Restaurant-Reviews-App.git
    ```

* In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 

* In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

* With your server running, visit the site: `http://localhost:8000`.



### Code depencies

* [leafletjs](https://leafletjs.com/)
* [Mapbox](https://www.mapbox.com/)
* [Google Fonts](https://fonts.google.com/)
* [TabIndex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)
* [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)




