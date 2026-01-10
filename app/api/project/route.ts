import { time } from "console";

export async function GET(request: Request) {
    const projects = [
        {
            id: 1,
            title: "UI / UX Design",
            desc: "Digital agency website design and development",
            img: "/img/project-1.jpg",
        },
        {
            id: 2,
            title: "Web Development",
            desc: "E-commerce website development",
            img: "/img/project-2.jpg",
        },
        {
            id: 3,
            title: "Mobile App",
            desc: "Mobile application development",
            img: "/img/project-3.jpg",
        },
        {
            id: 4,
            title: "Branding",
            desc: "Brand identity & strategy",
            img: "/img/project-4.jpg",
        },
        {
            id: 5,
            title: "SEO",
            desc: "Search engine optimization",
            img: "/img/project-5.jpg",
        },
        {
            id: 6,
            title: "Content Writing",
            desc: "Professional content writing",
            img: "/img/project-6.jpg",
        },
    ];
    return new Response(JSON.stringify(projects));

}