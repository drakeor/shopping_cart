<script>
// You can modify the prices here!

// EDIT BELOW
//////////////////////////

// ICON STUFF
//////////////

var icon_headshot = 10;					// Price of regular headshot icons
var icon_pixel = 10;					// Price of pixel icons

var icon_animated_extra = 5;			// Extra cost for animated icons
var icon_additional_character = 5;		// Extra cost of additional character


// CHIBI STUFF
///////////////

var chibi_lineart = 10;					// Price of Chibi Lineart
var chibi_flatcolour = 15;				// Price of Chibi Flat colour
var chibi_cellshading = 20;				// Price of Chibi Cell Shading
var chibi_softshading = 25;				// Price of Chibi Soft shading

var chibi_add_character_1 = 75;			// Percentage for first additional character
var chibi_add_character_2 = 150;		// Percentage for second additional character
var chibi_add_character_3 = 225;		// Percentage for second additional character

var chibi_background = 10;				// Starting price for complicated backgrounds

// HEADSHOT STUFF
////////////////

var headshot_lineart = 10;					// Price of Headshot Lineart
var headshot_flatcolour = 15;				// Price of Headshot Flat colour
var headshot_cellshading = 20;				// Price of Headshot Cell Shading
var headshot_softshading = 25;				// Price of Headshot Soft shading

var headshot_add_character_1 = 75;			// Percentage for first additional character
var headshot_add_character_2 = 150;		// Percentage for second additional character
var headshot_add_character_3 = 225;		// Percentage for second additional character


// WAIST-UP STUFF
///////////////

var waistup_lineart = 15;					// Price of Waist-up Lineart
var waistup_flatcolour = 20;				// Price of Waist-up Flat colour
var waistup_cellshading = 25;				// Price of Waist-up Cell Shading
var waistup_softshading = 30;				// Price of Waist-up Soft shading

var waistup_add_character_1 = 75;			// Percentage for first additional character
var waistup_add_character_2 = 150;		// Percentage for second additional character
var waistup_add_character_3 = 225;		// Percentage for second additional character

var waistup_background = 10;				// Starting price for complicated backgrounds

// FULLBODY STUFF
///////////////

var fullbody_lineart = 25;					// Price of Fullbody Lineart
var fullbody_flatcolour = 30;				// Price of Fullbody Flat colour
var fullbody_cellshading = 35;				// Price of Fullbody Cell Shading
var fullbody_softshading = 40;				// Price of Fullbody Soft shading

var fullbody_add_character_1 = 75;			// Percentage for first additional character
var fullbody_add_character_2 = 150;		// Percentage for second additional character
var fullbody_add_character_3 = 225;		// Percentage for second additional character

var fullbody_background = 10;				// Starting price for complicated backgrounds

// WING-IT 
///////////////

var wingit_chibi = 20;					// Price of Chibi Wing-it
var wingit_fullbody = 30;				// Price of Fullbody Wing-it

var wingit_add_character_1 = 75;		// Percentage for first additional character
var wingit_add_character_2 = 150;		// Percentage for second additional character
var wingit_add_character_3 = 225;		// Percentage for second additional character

var wingit_background = 10;				// Starting price for complicated backgrounds
var wingit_landscape = 20;				// Starting price for wingit landscapes


// REFERENCE SHEETS
///////////////

var reference_chibi_flat = 30;			// Price of Chibi Reference Flat
var reference_chibi_cell = 40;			// Price of Chibi Reference Cell shading
var reference_chibi_soft = 50;			// Price of Chibi Reference Soft shading

var reference_feral_flat = 30;			// Price of Feral Reference Flat
var reference_feral_cell = 40;			// Price of Feral Reference Cell shading
var reference_feral_soft = 50;			// Price of Feral Reference Soft shading

var reference_normal_flat = 50;			// Price of Normal Reference Flat
var reference_normal_cell = 60;			// Price of Normal Reference Cell shading
var reference_normal_soft = 70;			// Price of Normal Reference Soft shading

var reference_chibi_extra_pose = 10;	// Price of an extra pose
var reference_feral_extra_pose = 10;	// Price of an extra pose
var reference_normal_extra_pose = 22;	// Price of an extra pose

var reference_closeup_cost = 5;			// Extra price of closeups
var reference_headshot_cost = 10;		// Extra price of headshots

// POKEMON
///////////////

var pokemon_chibi_small = 10;			// Price of additional small chibi pokemon
var pokemon_chibi_medium = 15;			// Price of additional medium chibi pokemon
var pokemon_chibi_large = 20;			// Price of additional large chibi pokemon

var pokemon_regular_small = 15;			// Price of additional small regular pokemon
var pokemon_regular_medium = 20;		// Price of additional medium regular pokemon
var pokemon_regular_large = 35;			// Price of additional large regular pokemon

var pokemon_chibi_team_base = 20;		// Price of chibi team base
var pokemon_regular_team_base = 35;		// Price of regular team base

var pokemon_oc_small = 20;				// Price of small pokemon OC
var pokemon_oc_medium = 30;				// Price of medium pokemon OC
var pokemon_oc_large = 35;				// Price of large pokemon OC

// DO NOT EDIT BELOW THIS LINE
////////////////////////////
</script>

<form action="https://drakeor.com/noko/form.php" enctype="multipart/form-data" method="post" id="nokoform">
	<div class="wsite-form-container"style="margin-top:10px;">
		<div class="formlist" style="margin-left: 2em">
			<h2 class="wsite-content-title" style="text-align:left;">Commission Ordering Form.</h2>
			<noscript>You need javascript to use this order page!</noscript>
			<div id="order_form">
			</div>
			<input type="hidden" name="TotalPrice" id="total_price" value="0">
			<p id="price_shower" onclick="processForm()">Error loading Price</p>
			<div style="text-align:left; margin-top:10px; margin-bottom:10px;">
			<input style="position:absolute;top:0;left:-9999px;width:1px;height:1px" type="submit">
			<a class="wsite-button" onclick="document.getElementById('nokoform').submit()"><span class="wsite-button-inner">Submit</span></a>
		</div>
	</div>
</form>

<script>
		
// Create an option field
////////////////////
function createFormOption(identifier, title, instructions) {
	if (typeof(instructions)==='undefined') instructions = "";
	document.getElementById('order_form').innerHTML += '\
				<div id="' + identifier + '_div">\
					<div class="wsite-form-field" style="margin:5px 0px 0px 0px;">\
						<label class="wsite-form-label">' + title + ' \
						<span class="form-required">*</span></label> \
						<div class="wsite-form-radio-container"> \
							<span class="form-radio-container"><input name="' + identifier +'" id="' + identifier + '_form" type="radio" value="I agree"><label for="radio-0-_u690685893201796614">I agree</label></span> \
						</div>\
						<div class="wsite-form-instructions" id="" style="display:none;">' + instructions + '</div>\
					</div>\
				</div>';
}

// Create a divider
////////////////////
function createFormDivider() {
	document.getElementById('order_form').innerHTML += '\
				<div>\
					<div style="height: 20px; overflow: hidden; width: 100%;"></div>\
					<hr class="styled-hr" style="width:100%;">\
					<div style="height: 20px; overflow: hidden; width: 100%;"></div>\
				</div>';
}

// Create a text field
/////////////////////
function createTextField(identifier, title, instructions) {
	if (typeof(instructions)==='undefined') instructions = "";
	document.getElementById('order_form').innerHTML += '\
				<div id="'+identifier+'_div">\
                    <div class="wsite-form-field" style="margin:5px 0px 5px 0px;">\
                        <label class="wsite-form-label">'+title+'<span class="form-required">*</span></label>\
                        <div class="wsite-form-input-container">\
                            <input class="wsite-form-input wsite-input wsite-input-width-370px" id="'+identifier+'_form" name="'+identifier+'" type="text">\
                        </div>\
                        <div class="wsite-form-instructions" id="instructions-810854613693251538" style="display:none;">'+instructions+'</div>\
                    </div>\
                </div>';
}

// Create a dropdown field
///////////////////
function createDropdownField(identifier, title, instructions, extra_functions) {
	if (typeof(instructions)==='undefined') instructions = "";
	if (typeof(extra_functions)==='undefined') extra_functions = "";
	document.getElementById('order_form').innerHTML += '\
				<div id="'+identifier+'_div">\
					<div class="wsite-form-field" style="margin:5px 0px 0px 0px;">\
						<label class="wsite-form-label">'+title+'<span class="form-required">*</span></label>\
						<div class="wsite-form-radio-container">\
							<select class="form-select" '+extra_functions+' name="'+identifier+'" id="'+identifier+'_form">\
								<option value="[$0] Error">[$0] Error</option>\
							</select>\
						</div>\
						<div class="wsite-form-instructions" id="instructions-Type of Commission" style="display:none;">'+instructions+'</div>\
					</div>\
				</div>';
}

// This will completely clear the dropdown options
// THis function is actually obselete
function clearDropdownOptions(identifier, option) {
	if (typeof(instructions)==='undefined') {
		document.getElementById(identifier + "_form").innerHTML = "";
	} else {
		document.getElementById(identifier + "_form").innerHTML = "<option value='"+option+"'>"+option+"</option>";
	}
}

// Add simple options to a dropdown menu. 
// Pass options as an array
// This will replace old options.
function addToDropdownBasic(identifier, options) {
	document.getElementById(identifier + "_form").innerHTML = "";
	for(var i = 0; i < options.length; i++){
	  document.getElementById(identifier + "_form").innerHTML += "<option value='"+options[i]+"'>"+options[i]+"</option>";
   }
}

// Add simple options to a dropdown menu. 
// Pass options as an array of arrays [price, name]
// This will replace old options.
function addToDropdownPrice(identifier, options, first_symbol, last_symbol) {
	if (typeof(first_symbol)==='undefined') first_symbol = "+$";
	if (typeof(last_symbol)==='undefined') last_symbol = "";
	
	document.getElementById(identifier + "_form").innerHTML = "";
	for(var i = 0; i < options.length; i++){
	  document.getElementById(identifier + "_form").innerHTML += "<option value='["+first_symbol+options[i][0]+last_symbol+"] "+options[i][1]+"'>["+first_symbol+options[i][0]+last_symbol+"] "+options[i][1]+"</option>";
   }
}

// Create a textarea
/////////////////
function createTextareaField(identifier, title, instructions) {
	if (typeof(instructions)==='undefined') instructions = "";
	document.getElementById('order_form').innerHTML += '\
				<div id="'+identifier+'_div">\
                    <div><div class="wsite-form-field" style="margin:5px 0px 5px 0px;">\
						<label class="wsite-form-label">'+title+'<span class="form-required"></span></label>\
						<div class="wsite-form-input-container">\
							<textarea id="'+identifier+'_div" class="wsite-form-input wsite-input wsite-input-width-370px" name="'+identifier+'" style="height: 80px"></textarea>\
						</div>\
						<div id="instructions-252637277606735691" class="wsite-form-instructions" style="display:none;">'+instructions+'</div>\
					</div></div>\
                </div>';
}

// Helper functions
////////////////////

// GetPrice returns the price
function getPrice(str) {
     var String=str.substring(str.lastIndexOf("$")+1,str.lastIndexOf("]"));
     var price = parseInt(String)
     return price;
}

// Returns the percent of an option
function getPercent(str) {
     var String=str.substring(str.lastIndexOf("+")+1,str.lastIndexOf("%"));
     var price = parseInt(String)
     return price/100;
}

// Gets the element's div
function getDivElement(identifier) {
	return document.getElementById(identifier + "_div");
}

// Gets the element's form
function getFormElement(identifier) {
	return document.getElementById(identifier + "_form");
}

// Hides an element
function showElement(identifier) {
	getDivElement(identifier).style.display = 'block';
}

// Shows an element
function hideElement(identifier) {
	getDivElement(identifier).style.display = 'none';
}

// Quickly resets an element
function resetPriceElement(identifier) {
	hideElement(identifier);
	addToDropdownPrice(identifier, [[0, "Nothing"]]);
}

// Allows automatic showing/hiding of text boxes
function showDialogIfOptionSelected(identifier) {
	var elementPrice = getPrice(getFormElement(identifier).value);
	if(elementPrice != 0) {
		showElement(identifier + "_details");
	} else {
		hideElement(identifier + "_details");
	}
}

function createShowDialogExplain(identifier) {
	return "onchange=\"showDialogIfOptionSelected('" + identifier + "')\"";
}

// Produce our form
//////////////////

// TOS Stuff
	createFormOption("tos_agreed",
		"Have you read and agreed to the <a href=\"http://little-noko.weebly.com\">Terms of Service</a>?", 
		"You must agree to this before I can start work on your commission!");
	createFormDivider();

// Profile ID
	createTextField("profile_id", 
		"<span style=\"text-decoration: underline\">LINK</span> to profile.<br /><small>Please enter a link to either your DA or FA profile</small>",
		"Please enter the FULL link of your profile on FA/DA or your email address.");

// Paypal ID
	createTextField("paypal_address", 
		"Paypal Address",
		"You will be invoiced to this address");

// Type of commission
	createDropdownField("commission_type",
		"Type of Commission",
		"",
		"onchange=\"selectNewCommissionType();\"");
	clearDropdownOptions("commission_type");
	addToDropdownBasic("commission_type", [
		"Icon", 
		"Chibi", 
		"Headshot", 
		"Pokemon", 
		"Waist-Up", 
		"Wing-It", 
		"Fullbody", 
		"Reference Sheet"
		]);

// Rendering Type
	createDropdownField("rendering_type",
		"Rendering Type",
		"",
		"onchange=\"selectAdvancedRenderingOptions();\"");
	createFormDivider();
	
// IRONS: Animation
	createDropdownField("icon_animation",
		"Icon Animation");

// Character count
	createDropdownField("character_count",
		"Number of Characters");
		
// Background
	createDropdownField("background_type",
		"Background",
		"",
		createShowDialogExplain("background_type"));
	createTextareaField("background_type_details",
		"Additional Background Information",
		"If you'd like a custom background, put what you would like here.");

// REFERENCE: Additional Chibi Poses
	createDropdownField("chibi_poses",
		"Additional Chibi Poses",
		"",
		createShowDialogExplain("chibi_poses"));
	createTextareaField("chibi_poses_details",
		"Additional Pose(s) Information");

// REFERENCE: Additional Feral Poses
	createDropdownField("feral_poses",
		"Additional Feral Poses",
		"",
		createShowDialogExplain("feral_poses"));
	createTextareaField("feral_poses_details",
		"Additional Pose(s) Information");
		
// REFERENCE: Additional Anthro Poses
	createDropdownField("anthro_poses",
		"Additional Anthro Poses",
		"",
		createShowDialogExplain("anthro_poses"));
	createTextareaField("anthro_poses_details",
		"Additional Pose(s) Information");

// REFERENCE: Additional Headshots
	createDropdownField("ref_headshots",
		"Additional Headshots",
		"",
		createShowDialogExplain("ref_headshots"));
	createTextareaField("ref_headshots_details",
		"Additional Headshot(s) Information");

// REFERENCE: Additional Closeups
	createDropdownField("ref_closeups",
		"Additional Close-Ups",
		"",
		createShowDialogExplain("ref_closeups"));
	createTextareaField("ref_closeups_details",
		"Additional Close-Up(s) Information");

// POKEMON: Additional Small Pokemon
	createDropdownField("pokemon_small",
		"Additional Small Pokemon",
		"",
		createShowDialogExplain("pokemon_small"));
	createTextareaField("pokemon_small_details",
		"Additional Pokemon Information");

// POKEMON: Additional Medium Pokemon
	createDropdownField("pokemon_medium",
		"Additional Medium Pokemon",
		"",
		createShowDialogExplain("pokemon_medium"));
	createTextareaField("pokemon_medium_details",
		"Additional Pokemon Information");

// POKEMON: Additional Large Pokemon
	createDropdownField("pokemon_large",
		"Additional Large Pokemon",
		"",
		createShowDialogExplain("pokemon_large"));
	createTextareaField("pokemon_large_details",
		"Additional Pokemon Information");
		
// POKEMON: Pokemon OC
	createDropdownField("pokemon_size",
		"Pokemon Size");
		
// References
	createFormDivider();
	createTextareaField("character_references",
		"Character References<br /><small>Please remember to include a reference for each character!</small>");

// Commission Details
	createTextareaField("commission_details",
		"Commission Details <br /><small>Description of the expression, pose, and the idea you have in mind</small> ");

// Additional Information
	createTextareaField("additional_information",
		"Additional Information <br /><small>Please list any additional information not included above</small> ");
		
// WIPs?
	createDropdownField("wants_wips",
		"Works in Progress?");
	clearDropdownOptions("wants_wips");
	addToDropdownBasic("wants_wips", ["Yes", "No"]);
	createFormDivider();
	
////////////////////////////
// Main Form Logic
/////////////////////


// Resets all the fields to a default value
function resetFields() {
	resetPriceElement("icon_animation");
	resetPriceElement("character_count");
	resetPriceElement("background_type");
	hideElement("background_type_details");
	resetPriceElement("chibi_poses");
	hideElement("chibi_poses_details");
	resetPriceElement("feral_poses");
	hideElement("feral_poses_details");
	resetPriceElement("anthro_poses");
	hideElement("anthro_poses_details");
	resetPriceElement("ref_headshots");
	hideElement("ref_headshots_details");
	resetPriceElement("ref_closeups");
	hideElement("ref_closeups_details");
	resetPriceElement("pokemon_small");
	hideElement("pokemon_small_details");
	resetPriceElement("pokemon_medium");
	hideElement("pokemon_medium_details");
	resetPriceElement("pokemon_large");
	hideElement("pokemon_large_details");
	resetPriceElement("pokemon_size");
	hideElement("pokemon_size");
}

// Used for advanced rendering options
function selectAdvancedRenderingOptions() {
	var ss = getFormElement("commission_type").value;
	var ssb = getFormElement("rendering_type").value;
	if(ss=="Pokemon") {
		configureAdvancedForPokemon();
	}
}

// Used to select new commission types
function selectNewCommissionType() {
	var ss = getFormElement("commission_type").value;
	resetFields();
	if(ss == "Icon") {
		configureForIcons();
	} else if(ss=="Chibi") {
		configureForChibi();
	} else if(ss=="Headshot") {
		configureForHeadshot();
	} else if(ss=="Waist-Up") {
		configureForWaistUp();
	} else if(ss=="Fullbody") {
		configureForFullbody();
	} else if(ss=="Wing-It") {
		configureForWingit();
	} else if(ss=="Reference Sheet") {
		configureForReferenceSheet();
	} else if(ss=="Pokemon") {
		configureForPokemon();
	} 
}


// POKEMON
//////////////
function configureForPokemon() {

	// Rendering options
	addToDropdownPrice("rendering_type", [
		[pokemon_oc_small, "Pokemon OC"],
		[pokemon_chibi_team_base, "Chibi Team Soft Shading"], 
		[pokemon_regular_team_base, "Regular Team Soft Shading"]
	], "$");
	
	configureAdvancedForPokemon();
}

function configureAdvancedForPokemon() {
	var ss = getFormElement("commission_type").value;
	var ssb = getFormElement("rendering_type").value;
	
	// Soft reset
	////////////////
	resetPriceElement("pokemon_small");
	hideElement("pokemon_small_details");
	resetPriceElement("pokemon_medium");
	hideElement("pokemon_medium_details");
	resetPriceElement("pokemon_large");
	hideElement("pokemon_large_details");
	resetPriceElement("pokemon_size");
	hideElement("pokemon_size");
	
	if(ssb.indexOf("Chibi") !=-1) {
	
		// Chibi Options
		////////////
		showElement("pokemon_small");
		addToDropdownPrice("pokemon_small", [
			[0, "No Small Pokemon"],
			[pokemon_chibi_small, "1 Small Pokemon"],
			[pokemon_chibi_small*2, "2 Small Pokemon"],
			[pokemon_chibi_small*3, "3 Small Pokemon"],
			[pokemon_chibi_small*4, "4 Small Pokemon"],
			[pokemon_chibi_small*5, "5 Small Pokemon"],
			[pokemon_chibi_small*6, "6 Small Pokemon"]
		]);
		
		showElement("pokemon_medium");
		addToDropdownPrice("pokemon_medium", [
			[0, "No Medium Pokemon"],
			[pokemon_chibi_medium, "1 Medium Pokemon"],
			[pokemon_chibi_medium*2, "2 Medium Pokemon"],
			[pokemon_chibi_medium*3, "3 Medium Pokemon"],
			[pokemon_chibi_medium*4, "4 Medium Pokemon"],
			[pokemon_chibi_medium*5, "5 Medium Pokemon"],
			[pokemon_chibi_medium*6, "6 Medium Pokemon"]
		]);
		
		showElement("pokemon_large");
		addToDropdownPrice("pokemon_large", [
			[0, "No Large Pokemon"],
			[pokemon_chibi_large, "1 Large Pokemon"],
			[pokemon_chibi_large*2, "2 Large Pokemon"],
			[pokemon_chibi_large*3, "3 Large Pokemon"],
			[pokemon_chibi_large*4, "4 Large Pokemon"],
			[pokemon_chibi_large*5, "5 Large Pokemon"],
			[pokemon_chibi_large*6, "6 Large Pokemon"]
		]);
		// Regular Options
		////////////////
	} else if(ssb.indexOf("Regular") !=-1) {
	
		showElement("pokemon_small");
		addToDropdownPrice("pokemon_small", [
			[0, "No Small Pokemon"],
			[pokemon_regular_small, "1 Small Pokemon"],
			[pokemon_regular_small*2, "2 Small Pokemon"],
			[pokemon_regular_small*3, "3 Small Pokemon"],
			[pokemon_regular_small*4, "4 Small Pokemon"],
			[pokemon_regular_small*5, "5 Small Pokemon"],
			[pokemon_regular_small*6, "6 Small Pokemon"]
		]);
		
		showElement("pokemon_medium");
		addToDropdownPrice("pokemon_medium", [
			[0, "No Medium Pokemon"],
			[pokemon_regular_medium, "1 Medium Pokemon"],
			[pokemon_regular_medium*2, "2 Medium Pokemon"],
			[pokemon_regular_medium*3, "3 Medium Pokemon"],
			[pokemon_regular_medium*4, "4 Medium Pokemon"],
			[pokemon_regular_medium*5, "5 Medium Pokemon"],
			[pokemon_regular_medium*6, "6 Medium Pokemon"]
		]);
		
		showElement("pokemon_large");
		addToDropdownPrice("pokemon_large", [
			[0, "No Large Pokemon"],
			[pokemon_regular_large, "1 Large Pokemon"],
			[pokemon_regular_large*2, "2 Large Pokemon"],
			[pokemon_regular_large*3, "3 Large Pokemon"],
			[pokemon_regular_large*4, "4 Large Pokemon"],
			[pokemon_regular_large*5, "5 Large Pokemon"],
			[pokemon_regular_large*6, "6 Large Pokemon"]
		]);
		
	} else {
		showElement("pokemon_size");
		addToDropdownPrice("pokemon_size", [
			[0, "Small"],
			[pokemon_oc_medium - pokemon_oc_small, "Medium"],
			[pokemon_oc_large - pokemon_oc_small, "Large"]
		]);
	}
}

// REFERENCE SHEETS
//////////////
function configureForReferenceSheet() {

	// Rendering options
	addToDropdownPrice("rendering_type", [
		[reference_chibi_flat, "Chibi Flat Color"], 
		[reference_chibi_cell, "Chibi Cell Shading"], 
		[reference_chibi_soft, "Chibi Soft Shading"],
		[reference_feral_flat, "Feral Flat Color"],
		[reference_feral_cell, "Feral Cell Shading"],
		[reference_feral_soft, "Feral Soft Shading"],
		[reference_normal_flat, "Normal Flat Color"],
		[reference_normal_cell, "Normal Cell Shading"],
		[reference_normal_soft, "Normal Soft Shading"]
	], "$");
	
	// Additional Chibi Poses
	showElement("chibi_poses");
	addToDropdownPrice("chibi_poses", [
		[0, "No Extra Poses"],
		[reference_chibi_extra_pose, "1 Extra Chibi Pose"],
		[reference_chibi_extra_pose*2, "2 Extra Chibi Pose"],
		[reference_chibi_extra_pose*3, "3 Extra Chibi Pose"]
	]);
	
	// Additional Feral Poses
	showElement("feral_poses");
	addToDropdownPrice("feral_poses", [
		[0, "No Extra Poses"],
		[reference_feral_extra_pose, "1 Extra Feral Pose"],
		[reference_feral_extra_pose*2, "2 Extra Feral Pose"],
		[reference_feral_extra_pose*3, "3 Extra Feral Pose"]
	]);
	
	// Additional Anthro Poses
	showElement("anthro_poses");
	addToDropdownPrice("anthro_poses", [
		[0, "No Extra Poses"],
		[reference_normal_extra_pose, "1 Extra Anthro Pose"],
		[reference_normal_extra_pose*2, "2 Extra Anthro Pose"],
		[reference_normal_extra_pose*3, "3 Extra Anthro Pose"]
	]);
	
	// Additional Headshots
	showElement("ref_headshots");
	addToDropdownPrice("ref_headshots", [
		[0, "No Extra Headshots"],
		[reference_headshot_cost, "1 Extra Headshot"],
		[reference_headshot_cost*2, "2 Extra Headshots"],
		[reference_headshot_cost*3, "3 Extra Headshots"]
	]);
	
	// Additional Closeups
	showElement("ref_closeups");
	addToDropdownPrice("ref_closeups", [
		[0, "No Extra Close-Ups"],
		[reference_closeup_cost, "1 Extra Close-Up"],
		[reference_closeup_cost*2, "2 Extra Close-Ups"],
		[reference_closeup_cost*3, "3 Extra Close-Ups"]
	]);
	
	// Background fix
	hideElement("background_type");
	addToDropdownPrice("background_type", [[0, "Nothing"]]);
}

// ICONS
/////////////
function configureForIcons() {

	// Rendering Options
	addToDropdownPrice("rendering_type", [
		[icon_headshot, "Regular"],
		[icon_pixel, "Pixel"]
	], "$");
	
	// Show icons
	showElement("icon_animation");
	addToDropdownPrice("icon_animation", [
		[0, "No Animation"],
		[icon_animated_extra, "Blinking Animation"]
	]);
	
	// Show character count
	showElement("character_count");
	addToDropdownPrice("character_count", [
		[0, "1 Character"],
		[icon_additional_character, "2 Characters"],
		[icon_additional_character*2, "3 Characters"], 
		[icon_additional_character*3, "4 Characters"]
	]);
}

// CHIBI
//////////////
function configureForChibi() {

	// Rendering options
	addToDropdownPrice("rendering_type", [
		[chibi_lineart, "Lineart"],
		[chibi_flatcolour, "Flat Color"], 
		[chibi_cellshading, "Cell Shading"],
		[chibi_softshading, "Soft Shading"]
	], "$");
	
	// Additional Characters
	showElement("character_count");
	addToDropdownPrice("character_count", [
		[0, "1 Character"],
		[chibi_add_character_1, "2 Characters"],
		[chibi_add_character_2, "3 Characters"], 
		[chibi_add_character_3, "4 Characters"]
	],"+","%");
	
	
	// Show background options
	showElement("background_type");
	addToDropdownPrice("background_type", [
		[0, "Basic"],
		[chibi_background, "Complex (May cost more)"]
	]);
}


// HEADSHOT
//////////////
function configureForHeadshot() {

	// Rendering options
	addToDropdownPrice("rendering_type", [
		[headshot_lineart, "Lineart"],
		[headshot_flatcolour, "Flat Color"], 
		[headshot_cellshading, "Cell Shading"],
		[headshot_softshading, "Soft Shading"]
	], "$");
	
	// Additional Characters
	showElement("character_count");
	addToDropdownPrice("character_count", [
		[0, "1 Character"],
		[headshot_add_character_1, "2 Characters"],
		[headshot_add_character_2, "3 Characters"], 
		[headshot_add_character_3, "4 Characters"]
	],"+","%");
}

// WAIST-UP
//////////////
function configureForWaistUp() {
	
	// Rendering options
	addToDropdownPrice("rendering_type", [
		[waistup_lineart, "Lineart"],
		[waistup_flatcolour, "Flat Color"], 
		[waistup_cellshading, "Cell Shading"],
		[waistup_softshading, "Soft Shading"]
	], "$");
	
	// Additional Characters
	showElement("character_count");
	addToDropdownPrice("character_count", [
		[0, "1 Character"],
		[waistup_add_character_1, "2 Characters"],
		[waistup_add_character_2, "3 Characters"], 
		[waistup_add_character_3, "4 Characters"]
	],"+","%");
	
	// Show background options
	showElement("background_type");
	addToDropdownPrice("background_type", [
		[0, "Basic"],
		[waistup_background, "Complex (May cost more)"]
	]);
}

// FULLBODY
//////////////
function configureForFullbody() {

	// Rendering options
	addToDropdownPrice("rendering_type", [
		[fullbody_lineart, "Lineart"],
		[fullbody_flatcolour, "Flat Color"], 
		[fullbody_cellshading, "Cell Shading"],
		[fullbody_softshading, "Soft Shading"]
	], "$");
	
	// Additional Characters
	showElement("character_count");
	addToDropdownPrice("character_count", [
		[0, "1 Character"],
		[fullbody_add_character_1, "2 Characters"],
		[fullbody_add_character_2, "3 Characters"], 
		[fullbody_add_character_3, "4 Characters"]
	],"+","%");
	
	// Show background options
	showElement("background_type");
	addToDropdownPrice("background_type", [
		[0, "Basic"],
		[fullbody_background, "Complex (May cost more)"]
	]);
}

// WING-IT
//////////////
function configureForWingit() {

	// Rendering options
	addToDropdownPrice("rendering_type", [
		[wingit_chibi, "Chibi Soft Shading"],
		[wingit_fullbody, "Fullbody Soft Shading"]
	], "$");
	
	// Additional Characters
	showElement("character_count");
	addToDropdownPrice("character_count", [
		[0, "1 Character"],
		[wingit_add_character_1, "2 Characters"],
		[wingit_add_character_2, "3 Characters"], 
		[wingit_add_character_3, "4 Characters"]
	],"+","%");
	
	// Show background options
	showElement("background_type");
	addToDropdownPrice("background_type", [
		[0, "Basic"],
		[wingit_background, "Ground beneath character"],
		[wingit_landscape, "Indoor / Landscape"]
	]);
}


// Main Update Logic
//////////////

function processForm() {

	// Variables
	////////////////////
	var renderingPrice = getPrice(getFormElement("rendering_type").value);
	var animationPrice = getPrice(getFormElement("icon_animation").value);
	var backgroundPrice = getPrice(getFormElement("background_type").value);
	
	var extraChibiPrice = getPrice(getFormElement("chibi_poses").value);
	var extraFeralPrice = getPrice(getFormElement("feral_poses").value);
	var extraAnthroPrice = getPrice(getFormElement("anthro_poses").value);
	var extraHeadshotsPrice = getPrice(getFormElement("ref_headshots").value);
	var extraCloseupsPrice = getPrice(getFormElement("ref_closeups").value);
	
	var extraSmallPokemonPrice = getPrice(getFormElement("pokemon_small").value);
	var extraMediumPokemonPrice = getPrice(getFormElement("pokemon_medium").value);
	var extraLargePokemonPrice = getPrice(getFormElement("pokemon_large").value);
	var extraSizePokemonPrice = getPrice(getFormElement("pokemon_size").value)
	
	// Recreate the form if the client changes the order type
	////////////////
	var ss = getFormElement("commission_type").value;
	
	// Initial cost
	// Includes the rendering price, animation, and background
	////////////////////
	var finalPrice = renderingPrice + animationPrice + backgroundPrice;

	// Additional poses and stuff for references
	finalPrice += extraHeadshotsPrice + extraChibiPrice + extraFeralPrice + extraCloseupsPrice + extraAnthroPrice;
	finalPrice += extraSmallPokemonPrice + extraMediumPokemonPrice + extraLargePokemonPrice + extraSizePokemonPrice;
	
	// ADDITIONAL CHARACTERS
	////////////////
	
	// For icons, we add the flat rate
	if(ss=="Icon") {
		finalPrice += getPrice(getFormElement("character_count").value);
		
	// For Chibi, Headshot, Waist-Up, and Fullbody type of commissions, we add the percentage to the rendering cost.
	} else if(ss=="Chibi" || ss == "Headshot" || ss=="Waist-Up" || ss=="Fullbody" || ss=="Wing-It") {
		finalPrice = finalPrice + (renderingPrice*getPercent(getFormElement("character_count").value));
	}
	
	// UPDATE THE FORM PRICE
	////////////////
	document.getElementById("price_shower").innerHTML = "<b><span style=\"font-size: 125%\">Estimated Price: <span style=\"color: #0a7f6d\">$" + finalPrice + "</span></span></b><br /><small>This is only an estimate. You may be charged extra for complex details.</small>";
	document.getElementById("total_price").value = "$" +finalPrice;
}

// Need to run this right away
selectNewCommissionType();

// This calculates the price every half second
var t=setInterval(processForm,300);
</script>