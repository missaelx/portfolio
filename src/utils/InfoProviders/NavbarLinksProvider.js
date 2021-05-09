const NavbarLinksProvider = {
    navigationLinks: [
        {
            href: "#aboutme",
            label: "about me"
        },{
            href: "#",
            label: "experience"
        },{
            href: "#",
            label: "projects"
        },{
            href: "#",
            label: "get in touch"
        },
    ],
    actionLinks: [
        {
            onClick: () => alert("downloading resume"),
            label: "Resume",
            type: "link"
        }
    ]
}
export default NavbarLinksProvider;
