// get hierarchical structure with reference to the parent in O(n)
// depth is optional

export const getTree = (items) => {
    const itemsIdsByIndex = {};
    const roots = [];
    let item;
    let i;

    for (i = 0; i < items.length; i++) {
        itemsIdsByIndex[items[i].id] = i;
        items[i].children = [];
        // items[i].depth = 1;
    }

    for (i = 0; i < items.length; i++) {
        let depth = 1;
        item = items[i];
        if (item.parent_id !== 0) {
            
            // depth = todos[itemsIdsByIndex[item.parent_id]].depth;
            // depth++;
            // item.depth = depth;
            
            items[itemsIdsByIndex[item.parent_id]].children.push(item);
        } else {
            roots.push(item);
        }
    }
    return roots;
}