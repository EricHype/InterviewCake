class Meeting {
  constructor(start, end) {
    this.start = start
    this.end = end
  }
}


const meetings = [new Meeting(0, 1), new Meeting(3, 5), 
  new Meeting(4, 8), new Meeting(10, 12), new Meeting(9, 10)]


function mergeMeetings(meetings) {

  if(!meetings || meetings.length < 1) {
    return []
  }

  //sort meetings so they are in order n lg n
  meetings.sort((a, b) => a.start - b.start)
  console.log(`sorted meetings are: ${JSON.stringify(meetings)}`)
  
  //check for continuity
  if(meetings.length < 2) {
    return meetings
  }

  let retVal = []
  let currentMeeting = meetings[0]
  for(let i=1; i<= meetings.length; i++) {

    if(i == meetings.length && currentMeeting !== null) {
      retVal.push(currentMeeting);
      break;
    }

    if(meetings[i].start <= currentMeeting.end){
      currentMeeting.end = meetings[i].end
    } else {
      retVal.push(currentMeeting)
      currentMeeting = meetings[i]
    }

  }

  return retVal
}

console.log(`Testing given case: ${JSON.stringify(mergeMeetings(meetings))}`)