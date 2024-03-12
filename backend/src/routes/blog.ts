import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { CreateBlogInput, createBlogInput } from "mediumhelpertools";
import { updateBlogInput } from "mediumhelpertools";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    authorid: string;
  };
}>();

blogRouter.use("/*", async function (c, next) {
  const authheader = c.req.header("authorization") || "";

  const user = await verify(authheader, c.env.JWT_SECRET);

  if (user) {
    c.status(201);

    await next();

    c.set("authorid", user.id);

    return c.json({
      msg: user,
    });
  } else {
    c.status(401);
    return c.json({
      msg: "invalid token ",
    });
  }
});

blogRouter.post("/", async function (c) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = createBlogInput.safeParse(body);

  if (!success) {
    c.status(401);
    return c.json({
      msg: "invalid contents for the zod",
    });
  }

  const aid = c.get("authorid");

  try {
    const res = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorid: aid,
      },
    });

    c.status(201);
    c.json({
      msg: " blog posted sucessfully",
      res,
    });
  } catch (e) {
    c.json({
      msg: e,
    });
  }
});

blogRouter.put("/", async function (c) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = updateBlogInput.safeParse(body);
  if (!success) {
    c.status(401);
    return c.json({
      msg: "invalid contents for the zod",
    });
  }
  try {
    const res = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    c.status(202);
    return c.json({
      msg: " Post /Blog updated sucessfully",
      res,
    });
  } catch (e) {
    c.status(401);
    return c.json({
      msg: " some thing went wrong  unable to update it  ",
    });
  }
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const allblogg = await prisma.post.findMany({
    select: {
      title: true,
      content: true,
      published: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  c.status(201);
  return c.json({
    allblogg,
  });
});

blogRouter.get("/:id", async function (c) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const id = c.req.param("id");

  try {
    const res = await prisma.post.findFirst({
      where: {
        id: id,
      },
    });

    c.status(201);
    return c.json({
      res,
    });
  } catch (e) {
    c.status(401);

    return c.json({
      msg: e,
    });
  }
});
