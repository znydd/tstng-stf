fn main(){
    let val: Option<i32> = None; 
    match val {
        Some(val) => println!("{}", val),
        None => println!("Nothing found")
    }
}