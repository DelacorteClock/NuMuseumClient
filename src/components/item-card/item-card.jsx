export const ItemCard = function ({onItemCardClick,itemInfo}) {
    var {primaryImage, title, isFeatured} = itemInfo;
    function featuredScan(featuredStatus) {
        if (featuredStatus) {
            return '\u{1F605}';
        }
    }
    return (
            <div onClick={function () {onItemCardClick(itemInfo);}}>
                <div><img src={primaryImage} width='150px' /></div>
                <div>{title} {featuredScan(isFeatured)}</div>
            </div>
            );
};