import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { signupInput } from "mediumhelpertools";
import { signinInput } from "mediumhelpertools";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async function (c) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = signupInput.safeParse(body);

  if (!success) {
    c.status(401);
    return c.json({
      msg: "invalid details entered enter correct details",
    });
  }

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
      name: body.name,
    },
  });

  const token = await sign({ id: user.id }, c.env.JWT_SECRET);

  return c.json({ jwt: token });
});

userRouter.post("/signin", async function (c) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = signinInput.safeParse(body);
  if (!success) {
    c.status(401);
    return c.json({
      msg: "invalid details entered enter correct details",
    });
  }

  const founduser = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
  });
  if (!founduser) {
    c.status(403);
    return c.json({
      msg: "enter valid email adress",
    });
  }

  const token = await sign({ id: founduser.id }, c.env.JWT_SECRET);

  return c.json({
    token,
  });
});
