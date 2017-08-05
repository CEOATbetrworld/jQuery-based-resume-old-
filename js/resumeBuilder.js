var bio = {
    name: "Dhruv Kumar",
    role: "Web Developer",
    welcomeMessage: "Lets Create A betterworld together",
    biopic: "https://avatars0.githubusercontent.com/u/21344347?v=4&s=460",
    contacts: {
        mobile: "+91 8946824714",
        email: "dkiphones620@gmail.com",
        github: "CEOATbetrworld",
        twitter: "betrworld",
        location: "India"
    },
    skills: ["HTML5", "CSS3", "JavaScript", "Problem Solving"]
}

var work = {
    jobs: [{
        employer: "Amazon",
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
    project: [{
        title: "Decide what you want to do",
        dates: "2017",
        description: "well its really great ",
        images: ["https://ceoatbetrworld.github.io/images/googlelens.png", "https://ceoatbetrworld.github.io/images/googlelens.png"]
    }, {

        title: "Artificial Intelligence and Machine Learning",
        dates: "future",
        description: "Create something to Serve to humanity",
        images: ["https://ceoatbetrworld.github.io/images/googlecar.jpg"]
    }]
};




var education = {
    schools: [{
        name: "Kendriya Vidyalaya No.1 Jaipur",
        location: "Jaipur",
        degreedates: "Completed in 2014",
        majors: ["Physics", "Chemistry", "Mathematics"]
    }, {
        name: "Swami Keshvanand Institute of Technology, Management & Gramothan (SKIT)",
        location: "Jaipur",
        degreedates: "2020",
        majors: ["Computer Science"]
    }],
    onlineCourses: [{
        title: "Front End Web Developer Nanodegree Co-Created by Google, AT&T, GitHub and Hack Reactor",
        school: "Udacity",
        dates: "May 28 2017",
        url: "https://in.udacity.com/course/front-end-web-developer-nanodegree--nd001/?"
    }, {
        title: "C programming",
        school: "CodesDope",
        dates: "Jan 1 2017",
        url: "https://www.codesdope.com/c-introduction/"
    }]

}

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage))
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        $("#skills").append(HTMLskills.replace("%data%", bio.skills));
    }
}
bio.display();




work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedWork = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $(".work-entry:last").append(formattedEmployer + formattedWork);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }
}

work.display();

projects.display = function() {
    for (var lc = 0; lc < projects.project.length; lc++) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.project[lc].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.project[lc].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.project[lc].description));
        if (projects.project[lc].images.length > 0) {
            for (var li = 0; li < projects.project[lc].images.length; li++) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.project[lc].images[li]));
            }
        }
    }
}
projects.display();
$("#mapDiv").append(googleMap)

education.display = function() {
    for (var lc = 0; lc < education.schools.length; lc++) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[lc].name));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[lc].location));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[lc].degreedates));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[lc].majors))
    }

    for (var lc = 0; lc < education.onlineCourses.length; lc++) {

        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[lc].title));
        $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[lc].school))
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[lc].url))
    }
}




education.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});


function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}




$("#main").append(internationalizeButton);