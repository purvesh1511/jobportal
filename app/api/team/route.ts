import { time } from "console";

export async function GET(request: Request) {
    const teams = [
        {
            id: 1,
            name: "Alice Johnson",
            designation: "Project Manager",
            image: "img/team-1.jpg",
            facebook: "#",
            twitter: "#",
            instagram: "#"
        },
        {
            id: 2,
            name: "Bob Smith",
            designation: "Lead Developer",
            image: "img/team-2.jpg",
            facebook: "#",
            twitter: "#",
            instagram: "#"
        },
        {
            id: 3,
            name: "Carol Williams",
            designation: "UI/UX Designer",
            image: "img/team-3.jpg",
            facebook: "#",
            twitter: "#",
            instagram: "#"
        },
        {
            id: 4,
            name: "Alice Johnson",
            designation: "Project Manager",
            image: "img/team-1.jpg",
            facebook: "#",
            twitter: "#",
            instagram: "#"
        },
        {
            id: 5,
            name: "Bob Smith",
            designation: "Lead Developer",
            image: "img/team-2.jpg",
            facebook: "#",
            twitter: "#",
            instagram: "#"
        },
    ];
    return new Response(JSON.stringify(teams));

}