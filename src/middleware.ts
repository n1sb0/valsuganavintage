import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
    const { cookies, nextUrl } = req;
    const isAuthenticated = cookies.get("next-auth.session-token") ?? cookies.get("__Secure-next-auth.session-token");   
    // const pathname = nextUrl.pathname;
    // pathname.includes("/login")

    if (!isAuthenticated || isAuthenticated === undefined) {
        const homeUrl = new URL("/", req.url);
        return NextResponse.redirect(homeUrl);
    }
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|).*)"],
};
