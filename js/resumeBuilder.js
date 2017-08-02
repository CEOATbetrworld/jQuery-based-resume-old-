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
        title: "",
        dates: "",
        description: "",
        images: [""]
    }, {

        title: "",
        dates: "",
        description: "",
        images: [""]
    }]
};
var bio = {
    name: "",
    role: "",
    welcomeMessage: "",
    biopic: "",
    contacts: {
        mobile: "",
        email: "",
        github: "",
        twitter: "",
        location: ""
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


if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
   $("#skills").append(HTMLskills.replace("%data%",bio.skills));
}

for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedWork = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    $(".work-entry:last").append(formattedEmployer + formattedWork);
}



