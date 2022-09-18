---
title: 'Be on the safe side with assert :mask:'
date: 2020-06-10T00:00:00.000Z
tags:
  - assert
  - tips
categories:
  - python
---

We all have faced that situation when there was a bug in someone else's code or a third-party library and as a result your production build failed to deploy. The reasons are endless, it may be due to a non-declared method, class, or even due to the data type of the variable.

Python provides an inbuilt solution for this and it's known as **assert**.

## What is assert ?

Assert is an **inbuilt statement** in python and provides a very convenient way to have debugging tests in the program itself.

Using assert you test a condition and the result of that condition is responsible for immediately throwing an error if the condition returns false which will result in the immediate stopping of execution of the code any further.

## So how do you use it ?

Since assert is a statement it can be simply used as

```py
assert the_condition
```

this test can also be expressed with the help of the following code

```py
if not the_condition:
    raise AssertionError()
```

Let us see what it does, we'll take two code bases for simulating the situations in real life.

* First one is the Library code.
* Second one is your code in which you import and use that library code.

We'll take a basic example just to keep the things simple.

### Library code

```py
# animals.py

class Dog:
    def bark(self):
        return "Bhow Bhow .... Bhow"
```

### Your code

```py
# pug.py

from animals import Dog

assert hasattr(Dog,"barks"), "The library code is broken fix it now"

class Pug(Dog):
    def walk(self):
        return self.barks()

if __name__ == "__main__":
    print("Inside main")
```

### The Result

![Result of assert](/assets/uploads/post_01_assert_example.png)

You can see here we have got the same error that we have provided in the assert statement, also observe that the assert was tested even before the 

```py
if __name__ == "__main__":
    print("Inside main")
```

block got executed. This shows the real advantage of **assert** statement and why should you use it to become a better developer.

See you again (⌐■_■)
