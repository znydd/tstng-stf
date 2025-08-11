// combining multiple types for 1 variable
interface Msg {
    text: string;
    date: number;
}
interface Msg2 {
    id: number;
}
type MsgM = Msg & Msg2
function getData(msg: Msg | Msg2) {
    console.log(msg)
}
const payLoad = {
    text: "Hello",
    date: 25
}
const payLoad2 = {
    text: "Hello",
    date: 25,
}
// getData(payLoad2)
const events = {
    login: "user_login",
    logout: "user_logout",
};
type EventType = keyof typeof events;
const evnt: EventType = "login"