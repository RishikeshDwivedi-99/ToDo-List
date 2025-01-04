# To-Do List Application

This is a simple To-Do list web application built using HTML, CSS, and JavaScript. It allows users to add tasks, mark them as completed, and remove them. The tasks are saved in the browser's `localStorage`, so the list persists even after reloading the page.

## Features

- **Add tasks**: Users can add tasks to the list.
- **Mark tasks as complete**: Users can toggle the completion status of tasks.
- **Delete tasks**: Users can remove tasks from the list.
- **Persistence**: The tasks and their completion status are saved in `localStorage` and will persist even when the page is reloaded.
- **Responsive design**: The layout is responsive and adjusts to different screen sizes.

## Tech Stack

- **HTML**: Used for the structure of the application.
- **CSS**: Used for styling the application and making it visually appealing.
- **JavaScript**: Used for functionality such as adding, deleting, and marking tasks as complete. It also manages saving and loading data from `localStorage`.

## How to Use

1. Clone this repository to your local machine.
2. Open `index.html` in your browser.
3. Add tasks to the list by typing them into the input field and clicking the "Add" button.
4. Mark tasks as complete by clicking on them.
5. Delete tasks by clicking on the "×" icon next to them.
6. The tasks and their statuses are saved in `localStorage`, so even if you refresh the page, your tasks will remain.

## How It Works

1. **Adding a task**: When a task is added, the task text is captured from the input field and displayed as a list item. A "×" button is also added to remove the task.
2. **Marking a task as complete**: Clicking on a task toggles its completion status by adding/removing the `checked` class. This also visually strikes through the text.
3. **Removing a task**: Clicking on the "×" button next to a task removes it from the list.
4. **Persistence with `localStorage`**: Every time a task is added, marked as completed, or removed, the current list is saved in the browser's `localStorage`. On page reload, the tasks are reloaded from `localStorage` and displayed with their current states.

