"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
    
    const pathname = usePathname();
    const isActive = (path: string) =>
    pathname === path ? "active" : "";

    return (
        <>
            {/* <!-- Navbar Start --> */}
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark sticky-top py-lg-0 px-lg-5">
                <a href="#" className="navbar-brand ms-3 d-lg-none">MENU</a>
                <button type="button" className="navbar-toggler me-3" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav me-auto p-3 p-lg-0">
                        <Link href="/" className={`nav-item nav-link ${isActive("/")}`}>Home</Link>
                        <Link href="/about" className={`nav-item nav-link ${isActive("/about")}`}>About Us</Link>
                        <Link href="/services" className={`nav-item nav-link ${isActive("/services")}`}>Services</Link>
                        <Link href="/project" className={`nav-item nav-link ${isActive("/project")}`}>Projects</Link>
                        <Link href="/team" className={`nav-item nav-link ${isActive("/team")}`}>Our Team</Link>
                        <Link href="/contact" className={`nav-item nav-link ${isActive("/contact")}`}>Contact Us</Link>
                    </div>
                    {/* <a href="https://htmlcodex.com/downloading/?item=2366" className="btn btn-sm btn-light rounded-pill py-2 px-4 d-none d-lg-block">Buy Pro Version</a> */}
                </div>
            </nav>
            {/* <!-- Navbar End --> */}
        </>
    );
}