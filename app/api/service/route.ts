import { time } from "console";

export async function GET(request: Request) {
    const Services = [
        {
            'id': 1,
            'service_image': 'img/service-1.jpg',
            'service_title': 'Web Design',
            "service_url": "/services/web-design"
        },
        {
            'id': 2,
            'service_image': 'img/service-2.jpg',
            'service_title': 'App Development',
            "service_url": "/services/app-development"
        },
        {
            'id': 3,
            'service_image': 'img/service-3.jpg',
            'service_title': 'SEO Optimization',
            "service_url": "/services/seo-optimization"
        },
        {
            'id': 4,
            'service_image': 'img/service-4.jpg',
            'service_title': 'Social Marketing',
            "service_url": "/services/social-marketing"
        },
        {
            'id': 5,
            'service_image': 'img/service-5.jpg',
            'service_title': 'Email Marketing',
            "service_url": "/services/email-marketing"
        },
        {
            'id': 6,
            'service_image': 'img/service-6.jpg',
            'service_title': 'PPC Advertising',
            "service_url": "/services/ppc-advertising"
        }
    ]
    return new Response(JSON.stringify(Services));

}