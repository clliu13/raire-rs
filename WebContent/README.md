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

 
