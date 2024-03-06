import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.use("/api/v1/blog/*", async function (c, next) {
  const header = c.req.header("authorization") || "";

  // @ts-ignore
  const token = header.split(" ")[1];
  const res = await verify(token, c.env.JWT_SECRET);

  if (res.id) {
    next();
  } else {
    c.status(403);
    return c.json({
      msg: "invalid crededntials ",
    });
  }
});
app.post("/api/v1/user/signup", async function (c) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
      name: body.name,
    },
  });
  // @ts-ignore
  const token = await sign({ id: user.id }, c.env.JWT_SECRET);

  return c.json({ jwt: token });
});

app.post("/api/v1/signin", async function (c) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

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
  // @ts-ignore
  const token = await sign({ id: founduser.id }, c.env.JWT_SECRET);

  return c.json({
    token,
  });
});

// app.post("/api/v1blog", function () {});

// app.put("/api/v1/blog", function (c) {});

app.get("/api/v1/blog/:id", function (c) {
  const body = c.body;

  return c.json({
    msg: "hi bro  wts up ",
  });
});

export default app;
