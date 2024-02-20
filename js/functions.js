const time_p = document.querySelector('p')
const start_button = document.querySelector('button#start')
const stop_button = document.querySelector('button#stop')
const reset_button = document.querySelector('button#reset')

let seconds = 0
let timer_id = 0


const formatSecondsIntoTime = () => {
    const hrs = String(Math.floor(seconds/3600))
    const mins = String(Math.floor(seconds / 60) % 60)
    const snds = String(seconds % 60)
    return hrs.padStart(2,'0') + ":" + 
    mins.padStart(2,'0') + ":" +
    snds.padStart(2,'0') 
}

const setButtons = (start_disabled,stop_disabled,reset_disabled) => {
    start_button.disabled = start_disabled
    stop_button.disabled = stop_disabled
    reset_button.disabled = reset_disabled
}

setButtons(false,true,true)

start_button.addEventListener('click',() => {
    setButtons(true,false,true)
    timer_id = setInterval(() => {
        seconds++
        time_p.innerHTML = formatSecondsIntoTime()
    },1000)
})

stop_button.addEventListener('click',() => {
    setButtons(true,true,false)
    clearInterval(timer_id)
})

reset_button.addEventListener('click',() => {
    setButtons(false,true,true)
    seconds = 0
    time_p.innerHTML = formatSecondsIntoTime()
})
