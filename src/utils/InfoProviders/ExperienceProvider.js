const ExperienceProvider = (currentStep) => {
    return [
        {
            label: "iDisc",
            className: currentStep === 0 ? "is-active": "",
            description: "I worked in task automatization for translation services, as well as Consuming APIs Rest, doing scrapping or automatizing email reading to retrieve task information for translators. Design and development of web apps.",
            position: "Full time developer",
            period: "from february"
        },
        {
            label: "Universidad Veracruzana",
            className: currentStep === 1 ? "is-active": "",
            description: "I taught at the Statistics and Informatics School (software engineer program). The application development course covered topics such as system deployment, mobile application development, patterns, among others",
            position: "Part-time professor of Application Development",
            period: "2019-2020"
        },
        {
            label: "San Rafael",
            className: currentStep === 2 ? "is-active": "",
            description: "I worked on the creation of a project to support decision making for the restaurant sector, in professional practices focused on the documentation of business processes while in social service focused on the programming of two modules of the system.",
            position: "Development team leader (Professional Practices and Social Service)",
            period: "2017-2018"
        },
    ];
}

export default ExperienceProvider;