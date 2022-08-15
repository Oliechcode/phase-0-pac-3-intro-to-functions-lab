function shout (string) {
    return string.toUpperCase()
}
function whisper(string){
    return string.toLowerCase()
}
function logShout (string) {
    console.log (string.toUpperCase(string));
}
function logWhisper (string) {
    console.log (string.toLowerCase(string))
}
function sayHiToHeadphonedRoommate (string) {
    let no="I can't hear you!"
    let yes="YES INDEED!"
    let maybe="I would love to!"
    if (string.toLowerCase(string)===string) {
       return no
    }
    else if (string.toUpperCase(string)===string) {
        return yes
    }
    else if ("Let's have dinner together!"===string) {
        return maybe
    }
    }