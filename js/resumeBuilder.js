 var bio = {
		"name" : "Jesus Medina",
		"role" : "Front-end Developer",
		"contacts": {
		"mobile": "773-951-1650",
		"email": "chuymedina96@gmail.com",
		"location": "Chicago, Illinois",
		"twitter": "@chuymedina96",
		"github": "chuymedina96"
		},
		"biopic": "img/propic.jpg",
		"welcomeMessage": "Hi, I`m Jesus and I love coding and learning",
		"skills": ["HTML5 ", "CSS3 ", "Javascript", "Python", "Git"]
}
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedName, formattedRole);
	if(bio.biopic.length){ //Truthy Falsy
	var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedbioPic);	
	}
	if(bio.welcomeMessage.length) { //Truthy falsy again
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcome);
	}
	$("#header").append(HTMLskillsStart);
	for(var i=0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);
    //$("#footerContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);
}

/***********************************************
WORK SECTION BEGINS
**********************************************/
var work = {
	"jobs": [
	{
		"employer": "Self-employed",
		"title": "Freelance Web Developer",
		"dates": "September 2015-Current",
		"description": "The decision to take on freelance web development full time was simply based on the fact that I knew it would be a smart way to get experience in the tech industry without necessarily working  for a tech company.",
	    "location": "Chicago, Illinois"
	},
	{
		"employer": "Autozone",
		"title": "Customer Service",
		"dates": "June 2015-August 2015",
		"description": "Working at Autozone taught me key skills that can be applied in almost any kidn of industry. Customer service is key.",
		"location": "Chicago, Illinois"
	},
	{
		"employer": "Pete`s fresh Market",
		"title": "Stock clerk",
		"dates": "Feb 2015-June-2015",
		"description": "I was a stocker, not much to it",
		"location": "Chicago, Illinois"
	}, 
	{
		"employer": '<a href="http://www.mikvachallenge.org/programs/youth-policy-making/juvenile-justice-council/">Mikva Challenge',
		"title": "Juvenile Justice Council</a>",
		"dates": "June 2013-June 2014",
		"description": "In partnership with Cook County Board President Toni Preckwinkle and the Judicial Advisory Council, Mikva Challenge launched the Juvenile Justice Council (JJC) in the summer of 2013. JJC serves as an advisory and advocacy body that provides diverse youth perspectives on the policies and programs involving young people and the criminal justice system, with a particular emphasis on how to reduce rates of incarceration and recidivism among juvenile youth in Cook County.",
		"location": "Chicago, Illinois"
	}
  ]
}
/***********************************************
THIS CODE BELOW RETRIEVES YOUR LOCATION OF WHERE YOU`VE WORKED AND STUFF
******************************************************/
work.locationizer = function(work_obj) {
	var locationArray =[];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}
console.log(work.locationizer(work));

work.display = function() {
  for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = (formattedEmployer + formattedTitle);
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
  }
}
/******************************************************************
THIS IS WHERE THE EDUCAION SECTION OF THE RESUME BEGINS
*******************************************************************/
var education = {
	"schools": [
	{
		"name": '<a href="https://www.udacity.com/nanodegree">Udacity',
		"location": "San francisco, California",
		"degree": "Nanodegree",
		"major": "Front-end Web Development<hr/>",
		"dates": "2015-2016",
		"url": "www.chuymedina.net"
	},
	{
		"name": "Olive-Harvey College",
		"location": "Chicago, IL",
		"degree": "Some College",
		"major": "No major <hr/>",
		"dates": "Spring 2015",
		"url": "www.chuymedina.net"
	},
	{
		"name": '<a href="http://www.uic.edu/">University of Illinois at Chicago',
		"location": "Chicago, IL",
		"dates": "Fall 2014-Current",
		"degree": "BS",
		"major": "Computer Engineering <hr/>",
		"url": "www.chuymedina.net"
	} 
  ],
	"onlinecourses": [
	{
		"title": '<a href="https://www.udacity.com/course/javascript-basics--ud804">JavaScript Basics',
		"school": "Udacity</a>",
		"dates": "September 2015",
		"url": ""
	},
	{
		"title": '<a href="http://teamtreehouse.com/library/javascript-basics">Javascript Basics',
		"school": "Treehouse</a>",
		"dates": "April 2015",
		"url": ""
	},
	{
		"title": '<a href="https://www.codecademy.com/tracks/javascript">Javascript',
		"school": "Codecademy</a>",
		"dates": "April 2015",
		"url": ""
	},
	{
		"title": '<a href="http://teamtreehouse.com/library/how-to-make-a-website">How to Make a Website',
		"school": "Treehouse</a>",
		"dates": "April 2015",
		"url": ""
	},
	{
		"title": '<a href="https://www.codecademy.com/skills/make-a-website">Make a Website',
		"school": "Codecademy</a>",
		"dates": "April 2015",
		"url": ""
	},
	{
		"title": '<a href="https://www.udacity.com/course/intro-to-html-and-css--ud304">Intro to HTML and CSS',
		"school": "Udacity</a>",
		"dates": "September2015",
		"url": ""
	},
	{
		"title": '<a href="http://teamtreehouse.com/library/css-basics">CSS Basics',
		"school": "Treehouse</a>",
		"dates": "April 2015",
		"url": ""
	},
	{
		"title": '<a href="https://www.codecademy.com/tracks/web">HTML and CSS',
		"school": "Codecademy</a>",
		"dates": "April 2015",
		"url": ""
	},
	{
		"title": '<a href="http://teamtreehouse.com/library/html-forms">HTML Forms',
		"school": "Treehouse</a>",
		"dates": "April 2015",
		"url": ""
	},
	{
		"title": '<a href="https://www.udacity.com/course/intro-to-jquery--ud245">Intro to jQuery',
		"school": "Udacity</a>",
		"dates": "September 2015",
		"url": ""
	},
	{
		"title": '<a href="https://www.udacity.com/course/responsive-web-design-fundamentals--ud893">Responsive Web Design Fundamentals',
		"school": "Udacity</a>",
		"dates": "October 2015",
		"url": ""
	},
	{
		"title": '<a href="https://www.udacity.com/course/responsive-images--ud882">Responsive Images',
		"school": "Udacity</a>",
		"dates": "October 2015",
		"url": ""
	},
	{
		"title": '<a href="https://www.udacity.com/course/how-to-use-git-and-github--ud775">How to use Git and Github',
		"school": "Udacity</a>",
		"dates": "October 2015",
		"url": ""
	},
	{
		"title": '<a href="https://www.udacity.com/course/object-oriented-javascript--ud015">Object-Oriented JavaScript',
		"school": "Udacity</a>",
		"dates": "October 2015",
		"url": ""
	},
	{
		"title": '<a href="https://www.udacity.com/course/html5-canvas--ud292">HTML5 Canvas',
		"school": "Udacity</a>",
		"dates": "October 2015",
		"url": ""
	},
	{
		"title": '<a href="https://www.udacity.com/course/website-performance-optimization--ud884">Website Performance Optimization',
		"school": "Udacity</a>",
		"dates": "October 2015",
		"url": ""
	},
	{
		"title": '<a href="https://www.udacity.com/course/browser-rendering-optimization--ud860">Browser Rendering Optimization',
		"school": "Udacity</a>",
		"dates": "October 2015",
		"url": ""
	},
	{
		"title": '<a href="https://www.udacity.com/course/intro-to-ajax--ud110">Intro to AJAX',
		"school": "Udacity</a>",
		"dates": "October 2015",
		"url": ""
	},
	{
		"title": '<a href="https://www.udacity.com/course/javascript-design-patterns--ud989">JavaScript Design Patterns',
		"school": "Udacity</a>",
		"dates": "October 2015",
		"url": ""
	},
	{
		"title": '<a href="https://www.udacity.com/course/javascript-testing--ud549">JavaScript Testing',
		"school": "Udacity</a>",
		"dates": "October 2015",
		"url": ""
	}
  ]
}
education.display = function() {
  for (school in education.schools) {
	$("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].major);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedName + formattedDegree);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedLocation);
      $(".education-entry:last").append(formattedMajors);
	}
}
/*************************************************************************************************
DECIDED TO SEPERATE ONLINECOURSE FROM THE EDUCATION.DISPLAY FUNCTION CAUSE I COULDN`T GET A BUG OUT
***************************************************************************************************/
education.displayCourse = function() {
	if(education.onlinecourses.length){
  		$(".education-entry:last").append(HTMLonlineClasses);
}
  for (onlinecourse in education.onlinecourses) {
	var formattedtitleCourse = HTMLonlineTitle.replace("%data%", education.onlinecourses[onlinecourse].title);
	var formattedschoolCourse = HTMLonlineSchool.replace("%data%", education.onlinecourses[onlinecourse].school);
	var formattedtitleSchool = (formattedtitleCourse + formattedschoolCourse);
	$(".education-entry:last").append(formattedtitleSchool);
	var formattedschoolDates = HTMLonlineDates.replace("%data%", education.onlinecourses[onlinecourse].dates);
  	$(".education-entry:last").append(formattedschoolDates);
  	var formattedschoolUrl = HTMLonlineURL.replace("%data%", education.onlinecourses[onlinecourse].url);
  	$(".education-entry:last").append(formattedschoolUrl);
  }
}
/****************************************************************************
			PROJECTS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
********************************************************************************/
var entrepreneur = {
	"projects": [
	{
		"name": '<a href="index.html">Portfolio',
		"description": "As you can see I included my main portfolio page in my list of featured projects. I built this page utilizing Twitter`s bootstrap CSS framework, in which I now use to build web applications in a much more time-efficient manner. This site serves as my professional portfolio where I showcase projects that I`ve previously built. Click on the title above to go to my portfolio.",
		"dates": "September 2015",
		"images": "img/portfolio.png"
	},
	{
		"name": '<a href="http://chuymedina.net/resume.html">Interactive Resume',
		"description": "I used the google maps api to code a full fucntioning map of my neighborhood blah blah.",
		"dates": "October 2015",
		"images": "img/resume.png"
	},
	{
		"name": '<a href="http://chuymedina.net/mockup.html">Modern Design',
		"description": "The design was meant to be static, but also to look modern by using some CSS properties that you would normally find in a graphics editor like photoshop or gimp. Properties like box shadows and gradients were utilized, and as a result I created a nice modern looking website. Click on the title to view it.",
		"dates": "June 2015",
		"images": "img/secondproject.png"
	}
  ]
}
projects.display = function() {
  for (project in entrepreneur.projects) {
  	$("#projects").append(HTMLprojectStart);
	var formattedprojectsTitle = HTMLprojectTitle.replace("%data%", entrepreneur.projects[project].name);
	var formattedprojectsDates = HTMLprojectDates.replace("%data%", entrepreneur.projects[project].dates);
	var formattedprojectsTD = (formattedprojectsTitle + formattedprojectsDates);
	$(".project-entry:last").append(formattedprojectsTD);
	var formattedprojectsDes = HTMLprojectDescription.replace("%data%", entrepreneur.projects[project].description);
  	$(".project-entry:last").append(formattedprojectsDes);
  	var formattedIMG = HTMLprojectImage.replace("%data%", entrepreneur.projects[project].images);
  	$(".project-entry:last").append(formattedIMG);
  }
}
var inName = function (_name) {
	name = name.trim().split("");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +""+ name[1];
}
/********************************************************************
CALLING ALL FUNCTIONS, CALLING ALL FUNCTIONS!!!!!
***********************************************************************/
bio.display(); //Calls the function to display everything in the header
work.display();
education.display();
education.displayCourse();
projects.display();
//$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

