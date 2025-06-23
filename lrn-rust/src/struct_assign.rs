
struct Book{
    title: String,
    author: String,
    pages: u16
}

impl Book{
    fn details(&self){
        println!("Book Title: {}\nAuthor Name: {}\nNumber of Pages: {}",self.title, self.author, self.pages)
    }

}

fn main(){
    let book1 = Book{
        title: "how to be a GigaChad".to_string(),
        author: "Nabil".to_string(),
        pages: 40
    };
    let name = "Nabil".to_string()
    book1.details()

}
