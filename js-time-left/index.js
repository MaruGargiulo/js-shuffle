let msg = 'Tenemos un deploy para hoy dentro de {{hours}} y no se podrá bla bla'
const hour = '2020-07-15 20:33:00'

const deploy = new Date(hour).getTime()

const getTimeLeft = (time) => {
    const now = new Date().getTime()
    const diff = time - now

    const hoursLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    return { hoursLeft, minutesLeft }
}

const timeLeftMessage = (hoursLeft, minutesLeft) => {
    let msg = ''

    if(hoursLeft) {
        msg += `${hoursLeft}${hoursLeft == 1 ? 'h' : 'hs'} `
    }

    if(minutesLeft) {
        msg += `${minutesLeft}${minutesLeft == 1 ? 'min' : 'mins'}`
    }

    return msg
}

const getFullMessage = () => {
    const { hoursLeft, minutesLeft } = getTimeLeft(deploy)
    const timeLeftMsg = timeLeftMessage(hoursLeft, minutesLeft)
    // msg = msg.replace('{{hours}}', timeLeftMsg)
    console.log(msg.replace('{{hours}}', timeLeftMsg));
}

// const interval = setInterval(getFullMessage, 1000 * 60)

// setTimeout(clearInterval(interval), 1000 * 60 * 5)

// if(closeClicked) clearInterval(interval)
getFullMessage()
console.log(getTimeLeft(deploy));

// render(
//     <p>{msg}</p>
// )



