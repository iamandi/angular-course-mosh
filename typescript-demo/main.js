"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var likeButton_1 = require("./likeButton");
var likeButton = new likeButton_1.LikeButton(10, true);
likeButton.onClick();
console.log("likes: " + likeButton.likes + ", isSelected: " + likeButton.isSelected);
