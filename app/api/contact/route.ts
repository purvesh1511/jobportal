import { time } from "console";

export async function GET(request: Request) {
    const Contact = {
        phone: "+91 9725366212",
        email: "info@dgcom.com",
        address: "123 Street, New York, USA",
        openingHours: "Mon - Fri: 9:00 - 6:00",
        designer: "Purvesh Patel",
        companyName: "DGcom",
        socials: {
            twitter: "https://www.twitter.com",
            facebook: "https://www.facebook.com",
            youtube: "https://www.youtube.com",
            linkedin: "https://www.linkedin.com",
            instagram: "https://www.instagram.com"
        }
    }
    return new Response(JSON.stringify(Contact));

}