const {
  treeInsert,
  TreeNode
} = require("./binary-search-tree");

test('create a tree', () => {
  const data = [12, 5, 18, 2, 9, 15, 19, 13, 17];

  const tree = new TreeNode(null, null, data.shift());
  while (data.length > 0) {
    treeInsert(tree, data.shift());
  }

  const result = {
    value: 12,
    left: {
      value: 5,
      left: {
        value: 2,
        left: null,
        right: null
      },
      right: {
        value: 9,
        left: null,
        right: null
      },
    },
    right: {
      value: 18,
      left: {
        value: 15,
        left: {
          value: 13,
          left: null,
          right: null
        },
        right: {
          value: 17,
          left: null,
          right: null
        }
      },
      right: {
        value: 19,
        left: null,
        right: null
      },
    }
  }

  expect(tree).toEqual(result);
})