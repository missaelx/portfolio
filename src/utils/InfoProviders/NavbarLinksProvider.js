import resume from '../../assets/files/MissaelHernandez_CV_EN_US.pdf'
const NavbarLinksProvider = {
    navigationLinks: [
        {
            href: "#aboutme",
            label: "about me"
        },{
            href: "#experience",
            label: "experience"
        },{
            href: "#projects",
            label: "projects"
        },{
            href: "#contact",
            label: "get in touch"
        },
    ],
    actionLinks: [
        {
            onClick: () => window.open(resume),
            label: "Resume",
            type: "link"
        }
    ]
}
export default NavbarLinksProvider;
