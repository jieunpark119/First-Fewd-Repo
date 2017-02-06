// VAR: set up new item and count variables
var newItem;
var count=0;

// SUBMIT EVENT: on submitting of the form, add item to list 

$("form").on("submit", function(event){
	event.preventDefault();
	newItem = $(".new-item").val();
	console.log(newItem);
	$("ul").append("<li><input type='checkbox' name='complete'/><span class='item'></span>"+ newItem + "<a class='edit'>Edit</a><a class='remove'>Remove</a></li>")
	count++
	// FUNCTION: update number of items after submitting form (to use in submit event)
	console.log(count);
	$(".count").text(count);

});
// html: <li><input type="checkbox" name="complete"/><span class="item">Replace Me </span></span><a class="edit">Edit</a><a class="remove">Remove</a></li>




// CLICK EVENT: on clicking clear, reset count and remove all list items
$(".clear").on("click",function(){
	$(".count").text(0);
	$("li").remove();
})

// CHANGE EVENT: complete a todo item (by toggling the checkbox)

$("ul").on("change","li input", function(event){
	$(this).parent().addClass("todos done item");

});

// CLICK EVENT: on clicking remove, remove a todo item

$("li").on("click","input remove" function(event){
	$(this).remove("li");

});






