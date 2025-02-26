import { auth, clerkMiddleware, createRouteMatcher} from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)','/forum(.*)', '/sampleroute(.*)'])
export default clerkMiddleware(async (auth, req) => {
  console.log(`req recieved for ${req.url}`);
  
  if(isProtectedRoute(req)) await auth.protect()
});
export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};