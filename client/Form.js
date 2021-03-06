

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script>
	
	
	function FormCreator(actionName, autoSubmit)
	{
		var formStr = ""
		var init = function()
		{
			formStr = "<form action="
			formStr += actionName
			formStr += ">"
		}
		init()
		
		
		var createName = function(name)
		{
			formStr += name
			formStr += ":<br>"
		}
		
		var addInput = function(name, type, xdef)
		{

			if (type === "text")
			{
				if (!xdef)
				{
					addEmptyText(name)
				}
				else
				{
					addFilledText(name, xdef[0])
				}
				
			}
			
			if (type === "radio")
			{
				addRadioButton(name, xdef[0], xdef[1])
			}
			
			if ((type === "select") || (type === "drop"))
			{
				addSelect(name, xdef)
			}
			
			if (type === "button")
			{
				addButton(name, xdef)
			}
		}
		
		
		
		var addEmptyText = function(name)
		{
			formStr += "<input type=text"
			formStr += " name="
			formStr += name
			formStr += "><br>"
		}
		
		var addFilledText = function(name, value)
		{
			formStr += "<input type=text"
			formStr += " name="
			formStr += name
			formStr += " value="
			formStr += value
			formStr += "><br>"
		
		
		}
		
		
		var addRadioButton = function(name, value, checked)
		{
			formStr += "<input type=radio"
			formStr += " name="
			formStr += name
			formStr += " value="
			formStr += value
			if (checked === true)
			{
				formStr += " checked"
			}
			formStr += ">" + value + "<br>"
		}
		
		var addSubmit = function(value)
		{
			formStr += "<input type=submit"
			formStr += " value="
			formStr += value
			formStr += "><br>"
		}
		
		
		var addSelect = function(name, value_names)
		{
			formStr += "<select name="
			formStr += name + ">"
			for (var i = 0 ; i < value_names.length; i++)
			{
				addOption(value_names[i][0], value_names[i][1], value_names[i][2])
				
			}
			formStr += "</select>"
			formStr += "<br>"
		}
		
		var addOption = function(value, name, selected)
		{
				formStr += "<option value="
				formStr += value 
				if (selected == true)
				{
					formStr += " selected"
				}
				formStr += ">"
				formStr += name + "</option>"
		}
		
		var addButton = function(name, onclick)
		{
			formStr += "<button type=button onclick="
			formStr += onclick
			formStr += ">"
			formStr += name
			formStr += "</button>"
			formStr += "<br>"
		}
		
		
		
		var createForm = function()
		{
			if (autoSubmit == true)
			{
				addSubmit("submit")
			}
			formStr += "</form>"
			document.write(formStr)
			formStr = ""
		}
		
		var getFormString = function()
		{
						if (autoSubmit == true)
			{
				addSubmit("submit")
			}
			formStr += "</form>"
			return formStr;
		}
		
		
		return {addInput: addInput, createForm: createForm, getFormString: getFormString}
	}
	
	
	formMaker = new FormCreator("", "1");
	var jsonOBJ =  {
						room : ["text", ["Room_113"]],
						description : ["text"],
						test : ["drop", [["op1", "one", "0"], ["op2", "two", "1"], ["op3", "three", "0"]]],
						testButton : ["button", "alert('works')"],
						testRadio : ["radio", ["Celery", true]]
					}    
 
		
	
	for (var key in jsonOBJ) 
	{
	  if (jsonOBJ.hasOwnProperty(key)) 
	  {
		if (jsonOBJ[key].length === 2)
		{
			formMaker.addInput(key, jsonOBJ[key][0], jsonOBJ[key][1])
		}
		else if (jsonOBJ[key].length === 1)
		{
			formMaker.addInput(key, jsonOBJ[key][0])
		}
		
		
		
	  }
	}
	
	formMaker.createForm()
	
</script>
