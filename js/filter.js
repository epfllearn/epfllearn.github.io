
$(document).ready(function(){

	$('span#KeysEduc').hide();
	$('span#KeysTechno').hide();
	$('span#KeysTarget').hide();

	var ActiveKeywords = [];

	function SwitchType(ClassName) {
		if (!$('div#Filter'+ClassName).is('.Active')) {
			$('div#Filter'+ClassName).removeClass('Inactive');
			$('div#Filter'+ClassName).addClass('Active');
			$('span#Keys'+ClassName).show();
		}
		else{
			$('div#Filter'+ClassName).removeClass('Active');
			$('div#Filter'+ClassName).addClass('Inactive');
			$('span#Keys'+ClassName).hide();
		}	
	};

	function RefreshList() {
			//NOTE : article without clss proj selects some other elements from page !!
			$("article[class*='Invisible']").filter("[class*='proj']").hide()
			$("article[class*='Visible']").filter("[class*='proj']").show()
		}

	function RefreshVisibilities() {
		//put class Invisible in all articles
		FilteredElements = $('article').filter("[class*='proj']").filter("[class*='Visible']")
		FilteredElements.removeClass('Visible')
		FilteredElements.addClass('Invisible')

		if (ActiveKeywords.length==0)
		{
			$("article[class*='proj']").removeClass('Invisible')
			$("article[class*='proj']").addClass('Visible')
		}
		else {
			//do or
			//ActiveKeywordsString = "[class*='"+ActiveKeywords[0]+"']"
			//for (k=1; k<ActiveKeywords.length; k++)
			//	ActiveKeywordsString = ActiveKeywordsString+",[class*='"+ActiveKeywords[k]+"']"

			//FilteredElements = $('article').filter(ActiveKeywordsString)
			//FilteredElements.removeClass('Invisible')
			//FilteredElements.addClass('Visible')

			//do and
			FilteredElements = $('article').filter("[class*='proj']")
			for (k=0; k<ActiveKeywords.length; k++)
				FilteredElements = FilteredElements.filter("[class*='"+ActiveKeywords[k]+"']")


			FilteredElements.removeClass('Invisible')
			FilteredElements.addClass('Visible')
		}

		RefreshList();
	}

	function Switch(ClassName) {
		//alert($(this).attr("id"))
		if (!$('div#'+ClassName).is('.Active')) {
			$('div#'+ClassName).removeClass('Inactive');
			$('div#'+ClassName).addClass('Active');
			ActiveKeywords.push(ClassName)
		}
		else{
			$('div#'+ClassName).removeClass('Active');
			$('div#'+ClassName).addClass('Inactive');
			ActiveKeywords.splice(ActiveKeywords.indexOf(ClassName),1)
		}	
		RefreshVisibilities();
	};

	$('div#FilterEduc').click(function(){SwitchType('Educ') }); 
	$('div#FilterTechno').click(function(){SwitchType('Techno') }); 
	$('div#FilterTarget').click(function(){SwitchType('Target') }); 

	$('div#SFilterE_InteractT').click(function(){ Switch('SFilterE_InteractT') });
	$('div#SFilterE_BlendedL').click(function(){ Switch('SFilterE_BlendedL') });
	$('div#SFilterE_STEM').click(function(){ Switch('SFilterE_STEM') });
	$('div#SFilterE_SecTransit').click(function(){ Switch('SFilterE_SecTransit') });
	$('div#SFilterE_CurriD').click(function(){ Switch('SFilterE_CurriD') });
	$('div#SFilterE_LearnAnal').click(function(){ Switch('SFilterE_LearnAnal') });
	$('div#SFilterE_Inquiry').click(function(){ Switch('SFilterE_Inquiry') });
	$('div#SFilterE_TransfertP').click(function(){ Switch('SFilterE_TransfertP') });
	$('div#SFilterE_DigitSkills').click(function(){ Switch('SFilterE_DigitSkills') });
	$('div#SFilterE_21').click(function(){ Switch('SFilterE_21') });
	$('div#SFilterE_SelfReg').click(function(){ Switch('SFilterE_SelfReg') });
	$('div#SFilterE_CT').click(function(){ Switch('SFilterE_CT') });


	$('div#SFilterTe_MOOC').click(function(){ Switch('SFilterTe_MOOC') });
	$('div#SFilterTe_DigitT').click(function(){ Switch('SFilterTe_DigitT') });
	$('div#SFilterTe_AnalT').click(function(){ Switch('SFilterTe_AnalT') });
	$('div#SFilterTe_CAD').click(function(){ Switch('SFilterTe_CAD') });
	$('div#SFilterTe_Open').click(function(){ Switch('SFilterTe_Open') });
	$('div#SFilterTe_OnLabs').click(function(){ Switch('SFilterTe_OnLabs') });
	$('div#SFilterTe_OnCourse').click(function(){ Switch('SFilterTe_OnCourse') });
	$('div#SFilterTe_EBooks').click(function(){ Switch('SFilterTe_EBooks') });
	$('div#SFilterTe_Apps').click(function(){ Switch('SFilterTe_Apps') });
	$('div#SFilterTe_Book').click(function(){ Switch('SFilterTe_Book') });
	$('div#SFilterTe_Infra').click(function(){ Switch('SFilterTe_Infra') });
	$('div#SFilterTe_Robot').click(function(){ Switch('SFilterTe_Robot') });
	$('div#SFilterTe_MSpace').click(function(){ Switch('SFilterTe_MSpace') });
	$('div#SFilterTe_Proto').click(function(){ Switch('SFilterTe_Proto') });


	$('div#SFilterTa_UniTeach').click(function(){ Switch('SFilterTa_UniTeach') });
	$('div#SFilterTa_UniStud').click(function(){ Switch('SFilterTa_UniStud') });
	$('div#SFilterTa_UnitManag').click(function(){ Switch('SFilterTa_UnitManag') });
	$('div#SFilterTa_PolicyM').click(function(){ Switch('SFilterTa_PolicyM') });
	$('div#SFilterTa_SecTeach').click(function(){ Switch('SFilterTa_SecTeach') });
	$('div#SFilterTa_SecStud').click(function(){ Switch('SFilterTa_SecStud') });
	$('div#SFilterTa_ExecutT').click(function(){ Switch('SFilterTa_ExecutT') });
	$('div#SFilterTa_Business').click(function(){ Switch('SFilterTa_Business') });
	$('div#SFilterTa_K12T').click(function(){ Switch('SFilterTa_K12T') });
	$('div#SFilterTa_VocStud').click(function(){ Switch('SFilterTa_VocStud') });
	$('div#SFilterTa_VocTeach').click(function(){ Switch('SFilterTa_VocTeach') });
	$('div#SFilterTa_GenPubl').click(function(){ Switch('SFilterTa_GenPubl') });
	$('div#SFilterTa_ContProfDev').click(function(){ Switch('SFilterTa_ContProfDev') });

	//alert($("div#SFilterInteractT").attr("id"));
	//var SecondFilterButtons = $('div').filter("[id*='SFilter']")
	//alert(SecondFilterButtons.length);

	//for(sb in SecondFilterButtons)
	//	alert(sb)
	//	alert(sb.attr("id"));

	//alert(SecondFilterButtons.get(0).attr("id"));
	//alert(SecondFilterButtons[0].attr("id"));
	//for (var k=0; k<5; k++)
	//	alert("test")
	//	alert(SecondFilterButtons[k])
		//stringId = SecondFilterButtons.get(k).attr("id")
		//alert("string " + stringId)
		//SecondFilterButtons.get(k).click(function(){ Switch(stringId) });
	//alert(SecondFilterButtons.length)
		
});
