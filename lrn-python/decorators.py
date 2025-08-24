def my_decorator(func):
    def wrapper(args):
        print(args)
        print("Before the function runs")
        func()
        print("After the function runs")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello("hh")

