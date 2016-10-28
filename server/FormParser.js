
FormParser = function()
{
	fstr
	receiveForm = function(formName)
	{
		
	}
	setFormStr = function(formStr)
	{
		fstr = formStr
	}
	getValue = function(key)
	{
		for (var i = 0; i < fstr.length; i++)
		{
			if ((fstr[i] === '&') || i === 0)
			{
				var indx = i
				if (i != 0)
				{
					indx = i+1
				}
				var buildStr = ""
				while (fstr[indx] != '=')
				{
					buildStr += fstr[indx]
					indx += 1
				}
				
				if (buildStr === key)
				{
					indx += 1
					retStr = ""
					while ((fstr[indx] != '&') && (indx != fstr.length) )
					{
						retStr += fstr[indx]
						indx += 1
					}
					return retStr
				}
			}
		}
		return ""
	}
	
	
	return {getValue: getValue, receiveForm: receiveForm, setFormStr: setFormStr}
	
}
