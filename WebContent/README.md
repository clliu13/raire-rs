## Explain assertion function developing and testing



### 1 run the javascript version code

#### 1.1 Install http-server

link: https://www.npmjs.com/package/http-server

```
npm install --global http-server
```

#### 1.2 Run project

```
http-server ./WebContent -p 8081
```



### 2 Explain assertions function

Read the code.

from "**explain_assertions()**" in explain_assertions.js

to "**describe_raire_result()**" in prettyprint_assertions_and_pictures.js

to "**explain()**"

//Focus on "draw_trees_as_text", this part focus on drawing the elimination order as array format, Weizhao will handle svg

"**draw_trees_as_text()**" or "**draw_trees_as_tree()**"       

// To determine whether each elimination order meets the requirements of the assertion (也就是树的剪枝业务)

 ''**assertion_all_allowed_suffixes()**'' ---> "**assertion_allowed_suffixes()**"--->"**assertion_allowed_suffixes()**"  



###  3 Transfer array to D3 tree input structure.

Previous input for rendering trees is a set of arrays:

**0**: [3, 2, 1, 0]

**1**: [2, 3, 1, 0]

**2**: [2, 1, 3, 0]

**3**: [2, 1, 0, 3]

**4**: [3, 1, 2, 0]

**5**: [1, 3, 2, 0]

**6**: [1, 2, 3, 0]

**7**: [1, 2, 0, 3]

**8**: [1, 0, 2, 3]

**9**: [3, 2, 0, 1]

**10**: [2, 3, 0, 1]

**11**: [2, 0, 3, 1]

**12**: [2, 0, 1, 3]

**13**: [3, 0, 2, 1]

**14**: [0, 3, 2, 1]

**15**: [0, 2, 3, 1]

**16**: [0, 2, 1, 3]

**17**: [0, 1, 2, 3]

**Transform it to D3 svg tree input json structure:**

D3 tree structure link:

https://observablehq.com/@d3/tree-component

D3 官网：

https://d3js.org/d3-hierarchy/tree

