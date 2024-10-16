sequenceDiagram
A[PageOpened] -->|GET| B(Server)
Server -->[Browser] --> [HTMLdocument]
activate server
server -->browser: the HTML file
deactivate server

    browser -->[server] -->|GET| the css file
    activate server
    server -->browser: the CSS file
    deactivate server

    browser -->[server] -->|GET| the JS file
    activate server
    server -->browser: the JS file
    deactivate server

    browser -->[server] -->|GET| JSON
    activate server
    server -->browser: [{"content": "The JSON content", "date": "2024-10-17"}, ...]
    deactivate server

end

Create a diagram depicting the situation where the user goes to the single-page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

sequenceDiagram
[*] --> User Opens SPA
User Opens Spa --> Browser Sends GET Request
Browser Sends GET Request --> 200 Header
end

sequenceDiagram
[*] --> User Submits Form
User Submits Form --> Browser
User Submits Form --> Content Reloaded
Content Reloader --> [fin]
Browser --> Post
Post --> Server
Server --> Responce
Response --> 201 Header
201 Header --> [fin]
end
