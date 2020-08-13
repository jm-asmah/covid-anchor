const express = require("express");

// Importing Handlers
const handleCreateStory = require("./handlers/handleCreateStory")

// Creaing a story route
const storyRoute = express.Router();


// Defining Stories Routes
storyRoute.post("/", handleCreateStory);
storyRoute.get("/",(rea, res) => res.send("You reached stories"));
storyRoute.get("/:id", (rea, res) => res.send("You reached create story"));
storyRoute.patch("/:id", (rea, res) => res.send("You reached update story"));
storyRoute.delete("/:id", (rea, res) => res.send("You reached delete story"));
    
// Exporting StoryRoute
module.exports = storyRoute;