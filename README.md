## 📨 Messages Board App 

Open https://messages-board.netlify.app/ to view it in the browser.

## 📨 Description:
- The app starts with a pre-defined list of messages which are stored in the local storage of the browser.
- Fill an email address and a message, hit Submit for a new message to be rendered to the screen and added to local storage data.
- Email validation - using a regex expression.<br> Invalid email renders a message to the screen. Empty email input hides the message. 
- Submit button is disabled - if the email is invalid or empty, or if no message was entered.
###
- A random avatar image is fetched from am API when new message is created. <br>Submit button shows a loader while the image is being fetched.
- Checks if a user with the same email had already posted a message. If so, the same image is used, no additional API calls. 
- Filter the messages by term - <br> only the messages which include the entered term (email or content) will be rendered.
- Responsive- the app is responsive to various resolutions, <br> including small mobile devices and landscape mode.📲
- The app utilizes semantic UI elements. Some components made with styled components library. 💅