export const timeDifference = (current, previous) => {
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        return 'Hace ' + Math.round(elapsed/1000) + ' segundos';   
    }
    else if (elapsed < msPerHour) {
        return 'Hace ' + Math.round(elapsed/msPerMinute) + ' minutos';   
    }
    else if (elapsed < msPerDay ) {
        return 'Hace ' + Math.round(elapsed/msPerHour ) + ' horas';   
    }
    else if (elapsed < msPerMonth) {
        return 'Hace' + Math.round(elapsed/msPerDay) + ' días';   
    }
    else if (elapsed < msPerYear) {
        return 'Hace' + Math.round(elapsed/msPerMonth) + ' mes';   
    }
    else {
        return 'Hace aproximadamente ' + Math.round(elapsed/msPerYear ) + ' años';   
    }
};

export const DisplayTime12Hour = (date) =>  {
    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var am_pm = date.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    // var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    var time = hours + ":" + minutes + " " + am_pm;
    return time
}