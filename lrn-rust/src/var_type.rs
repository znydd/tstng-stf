fn person_info((name, age, height):(&str, u8, f32))-> String {
return format!("Name: {}\nAge: {}\nHeight: {}", name, age, height);
}
fn main(){
    let person: (&str, u8, f32) = ("Znyd", 22, 5.6);
    println!("{}",person_info(person));

}