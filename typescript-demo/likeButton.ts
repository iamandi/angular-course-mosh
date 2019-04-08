
export class LikeButton {

    constructor(private _likes: number, private _isSelected: boolean) {
    }

    public onClick() {
        this._likes += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    }
    
    get likes() {
        return this._likes;
    }

    get isSelected() {
        return this._isSelected;
    }
}