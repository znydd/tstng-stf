
enum Days{
    Saturday,
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Firday
}

fn day_type(day: Days){
    match day {
        Days::Saturday | Days::Firday => println!("Weekend!"),
        Days::Sunday | Days::Monday | Days::Tuesday | Days::Wednesday | Days::Thursday => println!("Weekdays!!")
    }
}


fn main(){
    let day = Days::Monday;
    day_type(day);
}
