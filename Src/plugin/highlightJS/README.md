
#######################################################################################




highlight.js高亮代码插件
通过highlight.js这个插件可以轻松实现。可以进入https://highlightjs.org/官网下载源码，然后简单在网页上引用即可。根据官方的例子，我们只需要在页面引入其js和css就行，然后将代码粘贴在<pre><code></code></pre>标签内即可战展示。

<link rel="stylesheet" href="default.css">
<script src="highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<!-- 展示代码 -->
<pre><code class="language-php">...</code></pre>
说明：default.css是默认样式，我们可以选择自己喜欢的样式，这个插件提供了非常多的样式，例如黑色背景，白色背景，VScode风格，GitHub风格，IDEA风格等。

class="language-php"代表我们选择的语言，如果你的代码是php的那就是language-php，其他的例如language-html、language-java、language-python、language-js、language-c，根据你设置的代码种类，会自动匹配代码的高亮风格。




#######################################################################################
# Highlight.js CDN Assets

[![install size](https://packagephobia.now.sh/badge?p=highlight.js)](https://packagephobia.now.sh/result?p=highlight.js)

**This package contains only the CDN build assets of highlight.js.**

This may be what you want if you'd like to install the pre-built distributable highlight.js client-side assets via NPM. If you're wanting to use highlight.js mainly on the server-side you likely want the [highlight.js][1] package instead.

To access these files via CDN:<br>
https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@latest/build/

**If you just want a single .js file with the common languages built-in:
<https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@latest/build/highlight.min.js>**

---

## Highlight.js

Highlight.js is a syntax highlighter written in JavaScript. It works in
the browser as well as on the server. It works with pretty much any
markup, doesn’t depend on any framework, and has automatic language
detection.

If you'd like to read the full README:<br>
<https://github.com/highlightjs/highlight.js/blob/main/README.md>

## License

Highlight.js is released under the BSD License. See [LICENSE][7] file
for details.

## Links

The official site for the library is at <https://highlightjs.org/>.

The Github project may be found at: <https://github.com/highlightjs/highlight.js>

Further in-depth documentation for the API and other topics is at
<http://highlightjs.readthedocs.io/>.

A list of the Core Team and contributors can be found in the [CONTRIBUTORS.md][8] file.

[1]: https://www.npmjs.com/package/highlight.js
[7]: https://github.com/highlightjs/highlight.js/blob/main/LICENSE
[8]: https://github.com/highlightjs/highlight.js/blob/main/CONTRIBUTORS.md
