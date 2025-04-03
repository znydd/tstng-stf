fn main(){
    let mut vctr: Vec<i32> = vec![1,2,6];
    func(&mut vctr);
    println!("{:?}",vctr);
}
fn func(vctr: &mut Vec<i32>){
    for elem in vctr{
        *elem = *elem * 2;
    }
}