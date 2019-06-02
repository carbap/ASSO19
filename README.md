# Kernel Draw

### Proposal:

- Kernel Draw is a puzzle game where the player needs to recreate a presented image using instructions from the game's programming language. These instrutions are similar to the ones from the previous Simple Draw project.
- There are several available cores that can run instructions simultaneously.
- There is a stack where created objects are stored on.
- At any given time, each core points to a single object in the stack, so its instructions will operate on that object. A specific intruction is needed to change which object the core's instructions will operate on. Basically, regular instructions do not have a parameter to specify which object to operate on.
- Errors in the code will be displayed to the player
- The player can simulate running all the instructions or go step by step. The output will be updated at each step.
- The game's programming language should be extensible through plugins.

- Available instructions:
  - create shape (receives shape name, size and position)
  - draw shape (draws a shape. NOTE: the same shape can be drawn severeal times)
  - translate 
  - rotate
  - scale
  - ??? Shape Group ???
  - set color
  - union 
  - intersect
  - difference
  - signal/wait (make a core sleep until it receives a signal from another core)
  
  # Architecture
  
  ## Design patterns:
  
  Model View Controller (includes Observer and Mediator)
  
  Used to separate logic, input and rendering.<br>
  Observer is used when notifying the View that Model has changed.<br>
  The Controller has the role of a Mediator, so the communication between Model and View is not direct.<br>
  
  ### Advantages:
      - High coesion inside modules and loose coupling between them.
      - We can render figures in multiple ways (SVG, HTMLCanvas, ...) just by adding more views.
      - We can add more input methods just by adding more controllers.
      - Changes in the model's logic should not affect the way the input (controller) and the rendering (view) works.
 
  ### Disadvantages
      - aaaa
     
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
  (group shapes together; that group is still a shape and has draw method; only the draw logic would be outsourced - props to [Paper.js](http://paperjs.org/))

  ## Requirements:
  - User types in commands in many "cores"
  - interpret commands and check errors
  - display errors to users
  - run each line of code step by step
  - user sees changes each step, and also the current existing objects
  - run all code at once
  - check if user generated figure matches the proposed image
  
  
  ### Example of valid user code:
  
  create rectangle r1<br>
  translate r1 100 0<br>
  scale r1 2<br>
  draw r1 <br>

  create circle c1<br>
  create circle c2<br>

  create intersection inter1 rect1 circle1 circle2<br>
  draw inter1<br>

  create circle c3<br>
  create intersection inter2 inter1 circle3<br>
  draw inter2<br>
