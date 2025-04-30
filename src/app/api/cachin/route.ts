// this force static will running when application already build and not using in development env
// cache will be change when rebuild the application
export const dynamic = "force-static";
// we could using revalidate using incremental static generation
// code below will be revalidate every 10 seconds
export const revalidate = 10;

/**
 *
 * ! caching only work with get method
 * ! route hanlers are not cache by default, but u can opt into cahcing when using the get method
 * ! if using dynamic function like headers() and cookies() or working with the objec in your get METHOD , caching won't be applied
 */

export async function GET() {
	return Response.json({ time: new Date().toLocaleTimeString() });
}
