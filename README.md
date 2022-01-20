# cypress-cookie-lax-issue
Code to reproduce the issue with Cypress is not adhering to the same behaviour as Chrome when forwarding cookies with SameSite=Lax

## How to reproduct the issue

1. Start the app by run command `npm run start-app`
2. Navigate to https://localhost:3000 with chrome browser
3. Open the Developer tool box and click on 'network' tab
4. Click on the 'Login' button
5. An login page show the XSRF-TOKEN is present 
6. Inspect the network requests and it headers where the XSDRF-TOKEN is set the https://oauth-simulator.mocklab.io/login request.

7. Now start the cypress with commadn `npm run start-cypress`
8. Run the app.spec.js test
9. The test is failed
10. Inspect the network requests and it headers where the XSDRF-TOKEN is not forward or set the https://oauth-simulator.mocklab.io/login request.
