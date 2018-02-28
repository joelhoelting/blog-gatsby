webpackJsonp([0x9d37c1f64f18],{522:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Currently, the most popular platforms for building quick and simple websites are Wordpress and Jekyll. A Jekyll page can be posted on your GitHub account within minutes and has become a new standard in web development. Jekyll is a blog-focused, static-site generator. What is the difference between a static website and a dynamic website? A static website is the simplest type of site that can be built. It is designed for sites that have content that will remain static, or unchanging.</p>\n<p>In order for us to customize our Jekyll site we need to understand its file structure and also how it utilizes liquid tags to nest elements. The file structure initially presents some challenges because it\'s not as simple as editing index.html/style.css files and then immediately seeing your changes upon refreshing. This blog post will be dedicated to breaking down the file structure with the goal of getting “under the hood” in order to utilize all the HTML and CSS we\'ve learned.</p>\n<h3>Setting up the Site</h3>\n<p>Jekyll is built with Ruby and needs it in order to construct the file system of your site. Please make sure you have the latest version of Ruby installed by <a href="https://www.ruby-lang.org/en/">downloading it directly</a>  or via <code>gem install ruby</code> using a UNIX command line. You can also install Ruby with RVM <a href="https://rvm.io/">(Ruby Version Manager)</a>: if you need to install and switch between multiple versions of Ruby.</p>\n<p>After installing Ruby we need to install <a href="https://jekyllrb.com/">Jekyll</a> itself. Jekyll is a Ruby gem and we install it via: <code>jekyll gem install</code>. Now we are going to make a new directory, the location on your drive doesn\'t matter. In the terminal type: <code>jekyll new my-awesome-site</code> or replace “new-site” with your choice of folder name. Jekyll will create a new folder inside your current working directory with all of the files Jekyll needs to for your site.</p>\n<p>For the purposes of this post, I\'m going to assume you already use Git and have knowledge of its commands and how to interact with remote repositories. If you don\'t know what Git is, please go to the Git home page (<a href="https://git-scm.com/">https://git-scm.com/</a>) to learn what Git is and how to use it.</p>\n<p>Initialize a new local Git repository by typing in <code>git init</code> inside your new Jekyll directory. Now let\'s take a look at the page we just created by typing <code>jekyll serve</code> in the command line. This will run a watch on the entire server that we can view locally by going to <code>http://localhost:4000/</code></p>\n<p>Breakdown of File Tree:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/blog-gatsby/static/jekyll_tree-49ee57bba92900e52b701c1666dc874a-44a21.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 124.09356725146199%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAIAAAC+dZmEAAAACXBIWXMAAAsTAAALEwEAmpwYAAACcklEQVQ4y5VUa3OaQBTlQycJNe8mJoYqylMBectLlteighLTJNPkQ////+hF28lMaiyZObPADmfv7jnnLlHp+NktKw1XWjYTpzAC/Fs1uNMATls2zgXzQtwJYsaG9wpOu05GezCmPWfOTRPKRh0zpuxpW9MOGZ3kdoJYjuJCQI/GHPc9nWTHBwOAesT8Bat/5T4CAcxoEIYdM+na/rUKU0aL11vcBvweZk2ulGyl5D+9h0KMtuTmIEoRITrA8iJikHspOxeSRrJNyWlvAsd+Mopf6MezXaI7U/5CG//b8B9yRrvlMFqr+at3/2yVIBvqGLWYDck546eUs+TjtZSv5XzBoaaV84FfScmDjF+s6kktKjFdj7B9KjY5OVHJacahQi3Svg950MBYsrHauO/mfLS2qkerBLfSnr21+h12k2dsMBfQk718dSuQDabGm/p1vA4ZlWTGh3XgdpPnbBB0fTzEYUf3vinTGw3UDtpq0NYiyvSv1Pj7Jnm7zkIsuDATs7mUzxgf/gOfY8oKb/Xw1oAXWAvsgMmd+tVqQxvhgQcJgahGd9b2Pxhh27Bn5aAP40eCeajrZUy4kmI8CED8OR9Ct0BB/2oMS+wTLLgez4ZppizRoM42wDwWmlplnohZd+LdmCE1gZzDZeCcj/a38RvZPhsu+BBzaD3O4fDBZ7qSsE+HKylZKfjFu1+NYgjmJ8ggBviRcHEiFS7lwgVSq92wMbYPKBjT/sJ6iMRcbwn6O1fJvWSN5NSjgXXMRz132nXtS0X/ym4dAvHNE8E4Fv41jHj7aPGbJZjJ+SihvRk3Bbfh9i2hW2gnZ4LJ2fBdzn4DiQvi+A+YfrIAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="jekyll tree"\n        title=""\n        src="/blog-gatsby/static/jekyll_tree-49ee57bba92900e52b701c1666dc874a-ad916.png"\n        srcset="/blog-gatsby/static/jekyll_tree-49ee57bba92900e52b701c1666dc874a-01de1.png 148w,\n/blog-gatsby/static/jekyll_tree-49ee57bba92900e52b701c1666dc874a-695fb.png 295w,\n/blog-gatsby/static/jekyll_tree-49ee57bba92900e52b701c1666dc874a-ad916.png 590w,\n/blog-gatsby/static/jekyll_tree-49ee57bba92900e52b701c1666dc874a-44a21.png 855w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><strong>config.yml:</strong> This file is only meant to be set up once and contains settings for your blog. Here you can  enter your site\'s title that appears at the top of the browser window. You can also specify what files get included when you serve the site. Every time you edit this file you will need to re-serve Jekyll by running <code>jekyll serve</code> in order to see the changes.</p>\n<p><strong>_css:</strong> Jekyll utilizes SASS (a CSS preprocessor) and this folder can either be filled with traditional .css files or .scss files. I currently have one file called main.scss which is importing .sass files from my <code>_sass</code> folder.</p>\n<p><strong>_includes:</strong> Here we can create .html files which we can include in any portions of our site. For example, I have a file here called navbar.html. I can then “include” my navbar anywhere using a liquid tag. I\'ve also made head.html an \'include\', which allows me to keep my code organized nicely.</p>\n<p><strong>_layouts:</strong> This is where put together our pages. Here I have a default.html file that makes use of my many  “includes”. I\'ve included my head.html and navbar.html here.  If you think of \'includes\' as puzzle pieces then the files inside this folder are the puzzles you make with the pieces.I also have a <code>post.html</code> file that utilizes my <code>default.html</code> and contains that I utilize whenever I create a new post (see below).</p>\n<p><strong>_posts:</strong> Home of your blog posts. The filenames of the blog posts are important and it\'s necessary to maintain a specific format. The filename for this post is <code>2016-06-03-Jekyll-file.structure.markdown</code> and it\'s important to keep the date and title in this format. Otherwise they won\'t be properly recognized as blog posts by Jekyll.</p>\n<p><strong>_sass:</strong> This is where your .sass files live. Sass files are then compiled into a .css file in your _site directory when you perform a <code>jekyll serve</code>.</p>\n<p><strong>_site:</strong> When you type in <code>jekyll serve</code> and temporarily serve your changes to your local host, your file directory is compiled into the _site folder. For this reason, nothing should ever be added or deleted from _site. You will also note that there are no .sass files inside of _site. Rather, all of your .sass files are being compiled into the main.css file.</p>',frontmatter:{date:"June 03, 2016",path:"/wtf-is-jekyll",title:"WTF is Jekyll?"}}},pathContext:{}}}});
//# sourceMappingURL=path---wtf-is-jekyll-b084044b00f1e3606f6c.js.map