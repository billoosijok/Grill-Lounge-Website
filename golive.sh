#!/bin/bash

# Prompt the user for input
read -p "Enter publish message: " input

# Export the input as an environment variable
export PROMPT_ENV="$input"

git add .  

git commit -m "Publish: $PROMPT_ENV" 

git push