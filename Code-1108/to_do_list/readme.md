## To Do List Steps
1.	addToDoListItem
2.	updateNumberOfToDoListItems
3.	emptyToDoList
4.	markToDoListItemAsCompleted
5.	removeToDoListItem
6.	editToDoListItem
7.	saveEditedToDoListItem
8.	removeCompletedToDoListItems

##Pseudocode
 
1.	When the user submits their to-do list item
	*	Select the input field the user has typed their to-do list info into
	*	Get the value of the input field
	*	Create a list item
	*	Place the text inside of the list item
	*	Create a checkbox item
	*	Place the checlbox inside of the list item
	*	Append the list item to our ordered to-do list

2.	Select the to-do list counter element
	*	Set the text inside the to-do list counter element to the number of items in the to-do list

3.	When the user clicks the Clear List button
	*	Select the list
	*	Empty the list

4.	When the user clicks on the checkbox beside an item
	*	Get the to-do list item the user clicked on
	*	Add a css line-through style to the item
	*	Add a class "completed" to the list item

5.	When the user clicks remove next to a to do list item
	*	Select the to-do list item the user wants to remove
	*	Delete the selected item from the page
 
6.	When the user clicks the edit better next to a list item
	*	Select the to-do list item the user wants to edit
	*	Replace the text in the list item with an input whose value is the same as the existing text
	*	Show the save edit button and hide the edit button

7.	When the user clicks the save edit button
	*	Select the to-do list item the user wants to save
	*	Get the value of the input inside of this item
	*	Replace the input in the list item with the value of the input field

8.	When the users clicks the Clear Completed button
	*	Select each to-do list item with the class "completed"
	*	Remove the to-do list item

// check out more form events here: https://api.jquery.com/category/events/form-events/