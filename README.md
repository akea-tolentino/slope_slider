# Slope Slider

## Background

####
Slope Slider is a snowboard-themed "runner" game. The **objective** of the game is to avoid the obstacles on the slope by either  
jumping over them, or moving to a different slope. A score tallies every successful jump over an obstacle, factored with time ridden.  
The game will end when the rider fails to avoid hitting an obstacle.  

## Functionality & MVPs

#### In Slope Slider, users will be able to:

- Tap "w" to move *left*  
- Tap "d" to move *right*  
- Tap spacebar to *jump*  
- Toggle music on/off  
- See instructions prior to running game  
- See their final score  

#### In addition, this project will include:

- A **landing page** describing the instructions for the game  
- A production **README**

## Wireframes

![Slope Slider Wireframe](/slope_slider.png)

- **Nav** will be icons linked to this project's Github repo, About, and my LinkedIn
- **Controls** will include Left, Right and Jump buttons
- Below the nav will be a **music** toggle button to turn music/sound on/off

## Technologies, Libraries, APIs

#### This project will be implemented with the following technologies:

- The **Canvas Api** to render the rider, obstacles, and slopes
- **Webpack** and **Babel** to bundle and transpile the source JavaScript code
- **np**m to manage project dependencies

## Implementation Timeline

- **Friday Afternoon & Weekend**: Setup project, including getting webpack to run. Get canvas to write to the screen and get  
comfortable with the Canvas API. Create **Rider**, **Obstacle** and **Tree** classes, and the corresponding canvas models.  

- **Monday**: Ensure that my models can be properly printed to screen. Focus on the logic behind randomly  
populating the slope with obstacles. Handle the implementation of moving objects and collision.  

- **Tuesday**:  Finish game implementation and start general layout of webpage.  

- **Wednesday**: Finish the bones of the webpage and focus on styling and building the links out. By the end of the day,  
a complete, working game should be running. If time, add background music/sound effects.  

- **Thursday Morning**: Make final touches to styling. Deploy to Github.  

## Bonus Features

####
There are many ways to expand on this game in the future.  
Some of these updates could be:

- Add options for rider select (outfit color, board color)
- Add options for slope select
- Add varying animations for jump-sequence
- Implement a "High Score" table