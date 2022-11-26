import {getTree} from "../../src/utils/getTree.js";
import {items, validTree} from "../__stubs__/stubs.js";

test('get valid tree', () => {
    expect(getTree(items)).toStrictEqual(validTree);
});