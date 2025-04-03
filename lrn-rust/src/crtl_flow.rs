use std::io::{self, Write};
use std::thread;
use std::time::Duration;

fn main() {
    for i in (0..=10).rev(){
        print!("\r\x1b[K{}", i); // Clear line, then print
        io::stdout().flush().unwrap();
        thread::sleep(Duration::from_millis(500));
    }
    print!("\r\x1b[KHappy New Year!!\n")

}