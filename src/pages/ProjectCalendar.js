import React from "react"
import * as Cheerio from "cheerio"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import GooggleService from "../components/Services/GoogleAPI"
import SEO from "../components/seo"
// API_KEY = AIzaSyBq53_7wsSX4obb0679u3gFKeYjAPi6XDA
class CalendarPage extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.SyncClasses = this.SyncClasses.bind(this);
        this.getDateString = this.getDateString.bind(this);
        this.getTimeString = this.getTimeString.bind(this);
        this.parseDateEvent = this.parseDateEvent.bind(this);
        this.fileInput = React.createRef();
        this.state = {
            courseCSUF: []
        }

    }
    SyncClasses(){
        let classEvents=[];
        for(let course of this.state.courseCSUF){
            for(let day of course["days"]){
            var event={
                "summary":course["name"],
                "description":course["location"],

                "start":{
                    "dateTime":this.parseDateEvent(course["startDate"],course["startTime"],day),
                    "timeZone":"America/Los_Angeles"
                },
                "end":{
                    "dateTime":this.parseDateEvent(course["startDate"],course["endTime"],day),
                    "timeZone":"America/Los_Angeles"
                },
                "recurrence":[
                    "RRULE:FREQ=WEEKLY;UNTIL="+this.getDateString(course["endDate"],day).replace(/-/g,"")
                ],
            }
            
            classEvents.push(event);
            }
        }
        console.log(JSON.stringify(classEvents));






    }
    async handleSubmit(event) {
        event.preventDefault();
        console.log(this.fileInput.current.files[0]);
        let fileData = new FileReader();
        
        let courseData;
        const scope = this;
        fileData.onloadend = function(e) {
            var rawLog = fileData.result.replace(/(\$)+/g,"_");
            

            // Retrieve all class Names
            let courses = [];
            let htmlObj = Cheerio.load(rawLog);
            let sessions = [];
            let courseCounter = 0;
            let rowCounter = 1;



            while(htmlObj("#trCLASS_MTG_VW_"+courseCounter+"_row"+rowCounter).length != 0){
                sessions.push(htmlObj("#trCLASS_MTG_VW_"+courseCounter+"_row"+rowCounter));

                while(htmlObj("#trCLASS_MTG_VW_"+courseCounter+"_row"+(++rowCounter)).length != 0){
                    sessions.push(htmlObj("#trCLASS_MTG_VW_"+courseCounter+"_row"+rowCounter));
                }

                rowCounter = 1;
                courseCounter++;
                
            };
            for(let i in sessions){
                let elem = sessions[i];
                courses[i] ={};
                courses[i]["name"] = elem.closest("table.PSGROUPBOXWBO").find("td.PAGROUPDIVIDER").text();
                courses[i]["instructor"] = elem.find("#DERIVED_CLS_DTL_SSR_INSTR_LONG_"+i).text();
                courses[i]["location"] = elem.find("#MTG_LOC_"+i).text();


                //  "MoWe 1:00PM - 2:15PM"
                let courseTimes = elem.find("#MTG_SCHED_"+i).text();
                let courseTimeData = courseTimes.split(/ /g);
                courses[i]["days"] = courseTimeData[0].match(/.{2}/g);
                courses[i]["startTime"] = courseTimeData[1];
                courses[i]["endTime"] = courseTimeData[3];

                //  01/18/2020 - 05/08/2020
                let coursePeriod = elem.find("#MTG_DATES_"+i).text();
                let coursePeriodData = coursePeriod.split(/ /g);
                courses[i]["startDate"] = coursePeriodData[0];
                courses[i]["endDate"] = coursePeriodData[2];

            }
            scope.setState({courseCSUF:courses});

        };
        fileData.readAsText(this.fileInput.current.files[0],"UTF-8");
        
    }
    //Summary
    //Location
    //Description
    //Start : dateTime: 2015-08-28T09:00:00-07:00
    //		  timeZone: America/Los_Angeles
    //End : dateTime: 2015-08-28T09:00:00-07:00
    //		  timeZone: America/Los_Angeles
    //recurrence :["RRULE:FREQ=WEEKLY;UNTIL=20110617T065959Z"]
    //
    //
    //Format Information into Parameters


    /* getTimeString(timepoint)
        Input Pararmeters: 		"8:45PM"
                Output: 		"20:45:00"
                    -24 hour scheme
    */

    getTimeString(timePoint)
    {	
        var timeString="";
        var pHour = parseInt(timePoint.split(":")[0]);
        var pMin  = timePoint.split(":")[1].substring(0,2);
        
        if(timePoint.search("PM") != -1)
        {
            if(pHour!=12)
                pHour+=12;
            
            timeString+=(pHour).toString();
        }
        else
        {	if(pHour<10)
                timeString+="0" + (pHour).toString();
            else
                timeString+=(pHour).toString();
        }

        timeString+=":"+pMin+":00";

        return timeString;
    }
    /* getDateString(date,day)
        Input Pararmeters: 		"8/25/2018","Mo"
                Output: 		"2018-08-27"
                    -xxxx-xx-xx format
                    -Add two days to original date pointing to Monday 
    */

    getDateString(date,day)
    {
        var dateString="";
        var incrementDate=0 ;
        switch(day){
            case "Mo":
                incrementDate=2;
                break;
            case "Tu":
                incrementDate=3;
                break;
            case "We":
                incrementDate=4;
                break;
            case "Th":
                incrementDate=5;
                break;
            case "Fr":
                incrementDate=6;
                break;
            case "Sa":
                incrementDate=0;
                break;
            case "Su":
                incrementDate=1;
                break;
        }
        
        var month = date.substring(0,2);
        var dayOfMonth = date.substring(3,5);
        var overfillCheck = parseInt(dayOfMonth)+incrementDate;
        
        if(overfillCheck > 31)
        {
            overfillCheck-=31;
            dayOfMonth ="0"+ (overfillCheck).toString();
            month = "0"+(parseInt(month)+1).toString();
        }
        else
        {
            dayOfMonth =(overfillCheck).toString();
        }

        var year = date.substring(6);

        dateString=year+"-"+month+"-"+dayOfMonth;
        return dateString;
        
    }

    /* parseDateEvent(classDate,classTime,classDay)
        Input Pararmeters: 		"8/25/2018","8:45PM","Mo"
                Output: 		"2018-08-27T20:45-07:00"
                    -Combines two date and time string 
                    -Keep functions organized
    */
    parseDateEvent(classDate,classTime,classDay)
    {
        
        var timeEvent = this.getTimeString(classTime);
        var dateEvent = this.getDateString(classDate,classDay);
        return dateEvent+"T"+timeEvent;
    }
    // packageData(){
    //     var classEvents=[];
    //     for(classEvent of this.state.courseCSUF){
            
    //         var event={
    //             "summary":classEvent["name"],
    //             "description":classEvent["location"],

    //             "start":{
    //                 "dateTime":parseDateEvent(classEvent["startDate"],classEvent["startTime"],classEvent["day"]),
    //                 "timeZone":"America/Los_Angeles"
    //             },
    //             "end":{
    //                 "dateTime":parseDateEvent(classEvent["startDate"],classEvent["endTime"],classEvent["day"]),
    //                 "timeZone":"America/Los_Angeles"
    //             },
    //             "recurrence":[
    //                 "RRULE:FREQ=WEEKLY;UNTIL="+getDateString(classEvent["endDate"],classEvent["day"]).replace(/-/g,"")
    //             ],
    //         }
            
    //         classEvents.push(event);
    //     }
    // };
    render(){

        return(
            <Layout>
                <SEO title="CSUF Schedule Sync" />
                <h1>CSUF Schedule Sync</h1>
                <p>Welcome to the CSUF Schedule Sync interface.</p>
                <div>
                    <h4>Directions</h4>
                    <ol>
                        <li>Save Class Schedule from CSUF portal as HTML file</li>
                        <li>Import file</li>
                    </ol>
                    <form onSubmit={this.handleSubmit}>
                        Select File: <input type="file" ref={this.fileInput}/>
                        <br/>
                        <input type="submit" value="Submit" />
                    </form>
                    
                    
                </div>
                <div>
                    
                        {this.state.courseCSUF.length != 0 ? <GooggleService eventInformation={this.state.courseCSUF}/>:(<div/>)}

                </div>
                <Link to="/">Go to Home</Link>
            </Layout>
        );
    }
}

export default CalendarPage
