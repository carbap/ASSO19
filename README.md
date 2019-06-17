# Kernel Draw

## Requirements:
- Instructions for creating, drawing and performing basic operations on geometric shapes
- User can type instructions in 3 different "cores"
- Instructions run asynchronously between cores
- Cores can wait for each other using the wait and signal instructions
- Instructions have a (fictional) time that they take to execute
- Interpret instructions and check for compilation errors
- Display errors to user
- Run each line of code step by step
- User sees changes each step
- Run all code at once
- Check if user generated figure matches the proposed image
- Check if the time to execute user code did not surpass the problem's time limit
- Advance to the next problem if the previous one was solved sucessfuly

## Dependencies

[Paper.js](http://paperjs.org/) was used to help with the drawing logic of geometric shapes.

## Architecture

### Architectural patterns:

<b>Model View Controller</b> (includes Observer and Mediator)

Used to separate logic, input and rendering.<br>
Observer is used when notifying the View that Model has changed.<br>
The Controller has the role of a Mediator, so the communication between Model and View is not direct.<br>

- Advantages:
    - High coesion inside modules and loose coupling between them.
    - We can render figures in multiple ways (SVG, HTMLCanvas, ...) just by adding more views.
    - We can add more input methods just by adding more controllers.
    - Changes in the model's logic should not affect the way the input (controller) and the rendering (view) works.

- Disadvantages:
    - aaaa

### Design patterns:

#### Command
(for encapsulating user's code as a command)

#### Interpreter
(to interpret user's commands)

#### Iterator
(to find the next instruction that should be run according to the times they take to execute)

#### Strategy
(to draw multiple shapes; facilitates adding more shapes)

#### Factory Method
(create shapes)

#### Composite
(group shapes together; a group is still a shape and has draw method)

#### Null Object
(Null Shape used for signal and wait commands because they dont act on a shape. However, Command base class must always receive a Shape)

## Instructions:

The index.html page itself contains information about all the instructions available to the user, namely the arguments they take and the time associated to them.<br>
In this section we will provide some possible solutions for the presented problems, that could be used for testing:

### Problem 1:
```
create square s1 0 0 50
draw s1
create circle c1 25 25 25
draw c1
```

### Problem 2:

The drawings match, but unable to complete within the time limit (18s/15s):
```
create square s1 100 100 150
create square s2 300 100 150
create circle c1 275 175 25
draw s1
draw s2
draw c1
```

The drawings match and completed within time limit (15s/15s):
```
create square s1 100 100 150
draw s1
translate s1 200 0
draw s1
create circle c1 275 175 25
draw c1
```

Even better execution time using multiple cores (9s/18s):

<b>Core 1</b>
```
create square s1 100 100 150
draw s1
translate s1 200 0
draw s1
```
<b>Core 2</b>
```
create circle c1 275 175 25
draw c1
```

### Problem 3:

### Problem 4:

## Run
Just open `/proj/index.html` on browser. Simple as that. If you're just trying out the application, there's no need to compile it first.

## Compile
1. Go to `/proj` directory.
2. Run `npm install` command, if you haven't installed node modules yet.
3. Run `npm start` command.
