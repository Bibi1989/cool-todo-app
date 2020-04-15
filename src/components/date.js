export default function date() {
    const date = new Date()
    const month = date.toLocaleDateString("en", { day: "numeric", weekday: "short", month: "short", year: "numeric" })
    const today = date.toLocaleDateString("en", { day: "numeric", weekday: "long", month: "short", year: "numeric" })
    let hour = `0${date.getHours()}`
    let minute = date.getMinutes()
    let session = 'AM'

    if(hour === '012') {
        session = 'PM'
        hour = 12
    }else if(hour > 12) {
        session = 'PM'
        hour = `0${hour - 12}`
    }
    if(minute < 10) {
        minute = `0${minute}`
    }
    let myDate = `${month}, ${hour} : ${minute} ${session}`
    return [myDate, today]
}
