var work = {
    jobs: [{
        employer: "God",
        title: "Web Developer",
        location: "Jaipur",
        dates: "2 Aug 2017",
        description: "Amazing Job"
    }, {
        employer: "Google",
        title: "Web Developer",
        location: "Jaipur",
        dates: "2 Aug 2017",
        description: "Innovating Something Amazing,Serving to humanity"
    }]
};
var projects = {
    projects: [{
        title: "Decide what you want to do",
        dates: "2017",
        description: "well its really great ",
        images: ["https://ceoatbetrworld.github.io/images/googlelens.png"]
    }, {

        title: "Artificial Intelligence and Machine Learning",
        dates: "future",
        description: "Create something to Serve to humanity",
        images: ["https://ceoatbetrworld.github.io/images/googlecar.jpg"]
    }]
};
var bio = {
    name: "Dhruv Kumar",
    role: "Web Developer",
    welcomeMessage: "Lets Create A betterworld together",
    biopic: "https://avatars0.githubusercontent.com/u/21344347?v=4&s=460",
    contact: {
        mobile: "+91 8946824714",
        email: "dkiphones620@gmail.com",
        github: "CEOATbetrworld",
        twitter: "betrworld",
        location: "Jaipur"
    },
    skills: ["HTML5","CSS3","JavaScript","Problem Solving"]
}
var education = {
    schools: [{
        name: "",
        location: "",
        degreedates: "",
        url: "",
        majors: [""]
    }, {
        name: "",
        location: "",
        degreedates: "",
        url: "",
        majors: [""]
    }],
    onlineCourses: [{
        title: "",
        school: "",
        dates: "",
        url: ""
    }, {
        title: "",
        school: "",
        dates: "",
        url: ""
    }]

}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));
$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage))
if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
   $("#skills").append(HTMLskills.replace("%data%",bio.skills));
}
$(document).click(function(loc){
   var x = loc.pageX ;
   var y = loc.pageY ;
   logClicks(x,y);
});

function inName(name){
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] +" "+ name[1];
}

$("#main").append(internationalizeButton);




























for(var job = 0 ; job <=work.jobs.length ; job++ ){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedWork = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    $(".work-entry:last").append(formattedEmployer + formattedWork);
    $(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].dates));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));
}




