%% Diagram depicting the situation where the user opens a webapp
%% at https://studies.cs.helsinki.fi/exampleapp/spa.
sequenceDiagram
participant Browser
participant Server

    Browser ->> Server: GET / (HTML document)
    activate Server
    Server -->> Browser: HTML file
    deactivate Server

    Browser ->> Server: GET /style.css (CSS file)
    activate Server
    Server -->> Browser: CSS file
    deactivate Server

    Browser ->> Server: GET /main.js (JavaScript file)
    activate Server
    Server -->> Browser: JavaScript file
    deactivate Server

    Browser ->> Server: GET /data.json
    activate Server
    Server -->> Browser: [{"content": "The JSON content", "date": "2024-10-17"}, ...]
    deactivate Server

    Browser -->> [*]: User Opens SPA

%% Diagram depicting the flow when a user opens the single-page app (SPA)
sequenceDiagram
participant User
participant Browser
participant Server

    [*] --> User: Opens SPA
    User ->> Browser: Sends GET request for the SPA
    Browser ->> Server: GET / (HTML document)
    activate Server
    Server -->> Browser: 200 OK (HTML file)
    deactivate Server
    Browser -->> User: SPA loaded

%% Diagram depicting the flow when a user submits a form
sequenceDiagram
participant User
participant Browser
participant Server

    [*] --> User: Submits form
    User ->> Browser: Form submission
    Browser ->> Server: POST /submit
    activate Server
    Server -->> Browser: Response (201 Created)
    deactivate Server
    Browser -->> User: Content reloaded
    [*] --> [fin]: End of process
