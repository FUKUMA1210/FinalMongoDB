"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const AuthRoute_1 = require("./routers/AuthRoute");
const CommentRoute_1 = require("./routers/CommentRoute");
const pageRoute_1 = require("./routers/pageRoute");
const UserRoute_1 = require("./routers/UserRoute");
exports.router = [
    new pageRoute_1.PageRoute(), new UserRoute_1.UserRoute(), new CommentRoute_1.CommentRoute(), new AuthRoute_1.AuthRoute()
];
