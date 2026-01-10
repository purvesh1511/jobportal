
export async function GET(request: Request) {
    const testimonials = [
        { id: 1, name: "Client 11", profession: "Designer", img: "/img/testimonial-1.jpg", text: "Tempor erat elitr rebum at clita." },
        { id: 2, name: "Client 12", profession: "Developer", img: "/img/testimonial-2.jpg", text: "Tempor erat elitr rebum at clita." },
        { id: 3, name: "Client 13", profession: "Manager", img: "/img/testimonial-3.jpg", text: "Tempor erat elitr rebum at clita." },
        { id: 4, name: "Client 14", profession: "CEO", img: "/img/testimonial-4.jpg", text: "Tempor erat elitr rebum at clita." },
        { id: 5, name: "Client 15", profession: "Designer", img: "/img/testimonial-1.jpg", text: "Tempor erat elitr rebum at clita." },
        { id: 6, name: "Client 16", profession: "Developer", img: "/img/testimonial-2.jpg", text: "Tempor erat elitr rebum at clita." },
    ];
    return new Response(JSON.stringify(testimonials));
}