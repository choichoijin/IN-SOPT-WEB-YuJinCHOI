// src/mocks/handlers.js
import { rest } from "msw";
export const handlers = [
  rest.get("/users/:keyword", async (req, res, ctx) => {
    const { keyword } = req.params;
    if (keyword === "choichoijin") {
      return res(
        ctx.json({
          login: "choichoiMocking",
          name: "yujinChoi",
          avatar_url: "https://avatars.githubusercontent.com/u/99077953?v=4",
          followers: 23,
          following: 24,
          html_url: "https://github.com/choichoijin",
        })
      );
    }
  }),
];
