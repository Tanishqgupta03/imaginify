import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])
export default clerkMiddleware(async (auth, request) => {
    if (!isPublicRoute(request)) {
      await auth.protect()
    }
  })

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

/*By default, clerkMiddleware() makes all routes public. This step is specifically for applications that have configured clerkMiddleware() to make all routes protected. If you have not configured clerkMiddleware() to protect all routes, you can skip this step. */