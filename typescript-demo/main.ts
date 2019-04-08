
import { LikeButton } from './likeButton';

const likeButton = new LikeButton(10, true);
likeButton.onClick();
console.log(`likes: ${likeButton.likes}, isSelected: ${likeButton.isSelected}`);