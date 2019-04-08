# Kernel Draw

### Proposal:

- Kernel Draw is a puzzle game where the player needs to recreate a presented image using instructions from the game's programming language. These instrutions are similar to the ones from the previous Simple Draw project.
- There are several available cores that can run instructions simultaneously.
- There is a stack where created objects are stored on.
- At any given time, each core points to a single object in the stack, so its instructions will operate on that object. A specific intruction is needed to change which object the core's instructions will operate on. Basically, regular instructions do not have a parameter to specify which object to operate on.
- Errors in the code will be displayed to the player
- The player can simulate running all the instructions or go step by step. The output will be updated at each step.

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
  


