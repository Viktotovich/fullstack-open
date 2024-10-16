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
