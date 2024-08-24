// import type { NextApiRequest, NextApiResponse } from "next";
export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { email, password } = body;
    console.log({ email, password });
    // await signIn('credentials', { email, password })
    if (email === "jaisun@gmail.com") {
      return Response.json(
        { email, token: "abec", isSuccess: true },
        { status: 200 }
      );
    } else {
      return Response.json(
        { error: "Invalid credentials.", isSuccess: false },
        { status: 401 }
      );
    }
  } catch (error: any) {
    if (error.type === "CredentialsSignin") {
      // res.status(401).json({ error: "Invalid credentials." });
      return Response.json(
        { error: "Invalid credentials.", isSuccess: false },
        { status: 401 }
      );
    } else {
      return Response.json(
        { error: "Something went wrong.", isSuccess: false },
        { status: 500 }
      );
      // res.status(500).json({ error: "Something went wrong." });
    }
  }
  // return Response.json({ data: {} });
}
