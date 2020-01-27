import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

class GoogleServices extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            CLIENT_ID : '93120863477-h36ak52pmhukstce7l454fp1sdkb3b21.apps.googleusercontent.com',
            API_KEY: 'AIzaSyBq53_7wsSX4obb0679u3gFKeYjAPi6XDA',
            SCOPES : "https://www.googleapis.com/auth/calendar",
            DISCOVERY_DOCS : ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
        }
        this.authorizeButton = document.getElementById('authorize_button');
        this.signoutButton = document.getElementById('signout_button');
        this.syncButton = document.getElementById('sync_button');

        this.handleClientLoad = this.handleClientLoad.bind(this);
        this.initClient = this.initClient.bind(this);
        this.updateSigninStatus = this.updateSigninStatus.bind(this);
        this.handleAuthClick = this.handleAuthClick.bind(this);
        this.handleSignoutClick = this.handleSignoutClick.bind(this);
        this.appendPre = this.appendPre.bind(this);
        this.createCourseSchedule = this.createCourseSchedule.bind(this);
        this.listUpcomingEvents = this.listUpcomingEvents.bind(this);






    }
       /**
     *  On load, called to load the auth2 library and API client library.
     */
    handleClientLoad() {
      gapi.load('client:auth2', this.initClient);
    }

    /**
     *  Initializes the API client library and sets up sign-in state
     *  listeners.
     */
    initClient() {
      gapi.client.init({
        apiKey: this.state.API_KEY,
        clientId: this.state.CLIENT_ID,
        discoveryDocs: this.state.DISCOVERY_DOCS,
        scope: this.state.SCOPES
      }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);

        // Handle the initial sign-in state.
        this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        this.authorizeButton.onclick = this.handleAuthClick;
        this.signoutButton.onclick = this.handleSignoutClick;
        this.syncButton.onclick = this.createCourseSchedule;
      }, function(error) {
        this.appendPre(JSON.stringify(error, null, 2));
      });
    }

    /**
     *  Called when the signed in status changes, to update the UI
     *  appropriately. After a sign-in, the API is called.
     */
    updateSigninStatus(isSignedIn) {
      if (isSignedIn) {
        this.authorizeButton.style.display = 'none';
        this.signoutButton.style.display = 'block';
        this.syncButton.style.display = 'block';
        this.listUpcomingEvents();
      } else {
        this.authorizeButton.style.display = 'block';
        this.signoutButton.style.display = 'none';
        this.syncButton.style.display = 'none';
      }
    }

    /**
     *  Sign in the user upon button click.
     */
    handleAuthClick(event) {
      gapi.auth2.getAuthInstance().signIn();
    }

    /**
     *  Sign out the user upon button click.
     */
    handleSignoutClick(event) {
      gapi.auth2.getAuthInstance().signOut();
    }

    /**
     * Append a pre element to the body containing the given message
     * as its text node. Used to display the results of the API call.
     *
     * @param {string} message Text to be placed in pre element.
     */
    appendPre(message) {
      var pre = document.getElementById('content');
      var textContent = document.createTextNode(message + '\n');
      pre.appendChild(textContent);
    }
    createCourseSchedule(event){

      let events = [{"summary":"CPSC 353 - Intro to Computer Security","description":"EC 109 - Lecture Room","start":{"dateTime":"2020-01-20T13:00:00","timeZone":"America/Los_Angeles"},"end":{"dateTime":"2020-01-20T14:15:00","timeZone":"America/Los_Angeles"},"recurrence":["RRULE:FREQ=WEEKLY;UNTIL=20200510"]},{"summary":"CPSC 353 - Intro to Computer Security","description":"EC 109 - Lecture Room","start":{"dateTime":"2020-01-22T13:00:00","timeZone":"America/Los_Angeles"},"end":{"dateTime":"2020-01-22T14:15:00","timeZone":"America/Los_Angeles"},"recurrence":["RRULE:FREQ=WEEKLY;UNTIL=20200512"]},{"summary":"CPSC 449 - Web Back-End Engineering","description":"CS 110A - Lecture Room","start":{"dateTime":"2020-01-24T09:00:00","timeZone":"America/Los_Angeles"},"end":{"dateTime":"2020-01-24T11:45:00","timeZone":"America/Los_Angeles"},"recurrence":["RRULE:FREQ=WEEKLY;UNTIL=20200514"]},{"summary":"CPSC 462 - Software Design","description":"CS 101 - Teaching Lab","start":{"dateTime":"2020-01-20T19:00:00","timeZone":"America/Los_Angeles"},"end":{"dateTime":"2020-01-20T20:50:00","timeZone":"America/Los_Angeles"},"recurrence":["RRULE:FREQ=WEEKLY;UNTIL=20200510"]},{"summary":"CPSC 462 - Software Design","description":"CS 101 - Teaching Lab","start":{"dateTime":"2020-01-22T19:00:00","timeZone":"America/Los_Angeles"},"end":{"dateTime":"2020-01-22T20:50:00","timeZone":"America/Los_Angeles"},"recurrence":["RRULE:FREQ=WEEKLY;UNTIL=20200512"]},{"summary":"CPSC 471 - Computer Communications","description":"CS 102B - Lecture Room","start":{"dateTime":"2020-01-20T17:30:00","timeZone":"America/Los_Angeles"},"end":{"dateTime":"2020-01-20T18:45:00","timeZone":"America/Los_Angeles"},"recurrence":["RRULE:FREQ=WEEKLY;UNTIL=20200510"]},{"summary":"CPSC 471 - Computer Communications","description":"CS 102B - Lecture Room","start":{"dateTime":"2020-01-22T17:30:00","timeZone":"America/Los_Angeles"},"end":{"dateTime":"2020-01-22T18:45:00","timeZone":"America/Los_Angeles"},"recurrence":["RRULE:FREQ=WEEKLY;UNTIL=20200512"]}];
      console.log(events);
      for(let course of events){

          console.log(course);
          gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': course,
          }).then(function(response){
              this.appendPre('Event created: '+course["summary"]);
          });
          
      }
      
    }
    /**
     * Print the summary and start datetime/date of the next ten events in
     * the authorized user's calendar. If no events are found an
     * appropriate message is printed.
     */
    listUpcomingEvents() {
      gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
      }).then(function(response) {
        var events = response.result.items;
        this.appendPre('Upcoming events:');

        if (events.length > 0) {
          for (let i = 0; i < events.length; i++) {
            var event = events[i];
            var when = event.start.dateTime;
            if (!when) {
              when = event.start.date;
            }
            this.appendPre(event.summary + ' (' + when + ')')
          }
        } else {
          this.appendPre('No upcoming events found.');
        }
      });
    }

    render(){
        return(
            <div >
                <div>
                <h1 style={{ margin: 0 }}>
                    Google Calendar Service
                </h1>
                    <button id="authorize_button" style="display: none;">Authorize</button>
                    <button id="signout_button" style="display: none;">Sign Out</button>
                    <button id="sync_button" style="display: block;">Sync Classes</button>

                    <pre id="content" style="white-space: pre-wrap;"></pre>
                </div>
                <script async defer src="https://apis.google.com/js/api.js"
                onload="this.onload=function(){};this.handleClientLoad()"
                onreadystatechange="if (this.readyState === 'complete') this.onload()">
                </script>
            </div>
        );
    }
    
}
export default GoogleServices
