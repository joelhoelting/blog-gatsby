webpackJsonp([25702550226406],{470:function(n,s){n.exports={data:{markdownRemark:{html:'<p>For final project #2 at the Flatiron School we were required to build an MVC web application using Active Record with Sinatra. Sinatra and Rails do similar things when it comes to developing web apps. If they were brothers, Sinatra would be the younger and less complex of the two. It has about 10,000 lines of code versus the 180,000 lines of code in the Rails codebase. Sinatra is still fairly robust and well-suited for building smaller scale web applications. It can be stretched far and is extremely intuitive. Definitely a great framework to learn before diving into Rails.</p>\n<h3>Project Requirements</h3>\n<ol>\n<li>Build an MVC Sinatra Application.</li>\n<li>Use ActiveRecord with Sinatra.</li>\n<li>Use Multiple Models.</li>\n<li>Use at least one has_many relationship</li>\n<li>Must have user accounts. The user that created a given piece of content should be the only person who can modify that content</li>\n<li>You should validate user input to ensure that bad data isn\'t created</li>\n</ol>\n<h3>Topic</h3>\n<p>I decided to build a forum for Freegans in NYC. Freeganism is a practice and ideology of limited participation in the conventional economy and minimal consumption of resources. Freegans are colloquially called "dumpster-divers" because they will sift through trash to find food that has been discarded but is still in good condition.</p>\n<h3>Models</h3>\n<p>I drew out an outline before starting this project. As your applications get more complex, it is of the utmost importance that you write down your plans and ideas for the project before you start writing any code. Write outlines, map out associations, draw diagrams, make charts, etc. It\'s unlikely that you are going to spontaneously build anything of substance without planning or organizing beforehand. After spending a day organizing my project, I decided that my application would have three Models with the following associations:</p>\n<p><strong>User</strong><br>\nhas many reports</p>\n<p><strong>Report</strong><br>\nbelongs to users<br>\nbelongs to boroughs</p>\n<p><strong>Borough</strong><br>\nhas many reports</p>\n<p><em>Goal</em>: a user can post a report, alerting the freegan community of their success, and that report will belong to the user and one of the five boroughs. For example, when calling <code>@user1.reports</code>, I would expect to see all reports belonging to that user. Similarly, when calling <code>@brooklyn.reports</code>, I would expect to see all the reports belonging to Brooklyn. Reports have an SQL table column for <code>user_id</code> and <code>borough_id</code> in order to connect all of the data together. These three models and their associations fulfill requirements #3 and #4 of the project.</p>\n<h3>Creating and Storing a User</h3>\n<p>New user creation is fairly straightforward. There is a view for a signup page that has a form with two input fields (for username and password) and a submit button. Those parameters are then used to create a new user using ActiveRecord\'s #create method. The code to create a new user looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token variable">@user</span> <span class="token operator">=</span> <span class="token constant">User</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>username<span class="token punctuation">:</span> params<span class="token punctuation">[</span><span class="token symbol">:username</span><span class="token punctuation">]</span><span class="token punctuation">,</span> password<span class="token punctuation">:</span> params<span class="token punctuation">[</span><span class="token symbol">:password</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\nsession<span class="token punctuation">[</span><span class="token symbol">:user_id</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">@user</span><span class="token punctuation">.</span>id\nredirect to <span class="token string">"/<span class="token interpolation"><span class="token delimiter tag">#{</span>@user<span class="token punctuation">.</span>slug<span class="token delimiter tag">}</span></span>"</span>\n</code></pre>\n      </div>\n<p>Parameters from the signup form are passed in as arguments to create a new user. The user id is stored in the session hash, which verifies the user at various times and the session hash is cleared when signing out.</p>\n<p>I fulfill requirement #5 (the user that created a given piece of content should be the only person who can modify that content), with the following code:</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code>get <span class="token string">\'/reports/:slug\'</span> <span class="token keyword">do</span>\n  <span class="token variable">@report</span> <span class="token operator">=</span> <span class="token constant">Report</span><span class="token punctuation">.</span><span class="token function">find_by_slug</span><span class="token punctuation">(</span>params<span class="token punctuation">[</span><span class="token symbol">:slug</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n  <span class="token keyword">if</span> logged_in<span class="token operator">?</span>\n    <span class="token variable">@user</span> <span class="token operator">=</span> <span class="token constant">User</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>session<span class="token punctuation">[</span><span class="token symbol">:user_id</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n  <span class="token keyword">end</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>session<span class="token punctuation">[</span><span class="token symbol">:user_id</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token variable">@report</span><span class="token punctuation">.</span>user_id<span class="token punctuation">)</span>\n    erb <span class="token punctuation">:</span><span class="token string">\'/reports/show_edit_delete\'</span>\n  <span class="token keyword">else</span>\n    erb <span class="token punctuation">:</span><span class="token string">\'/reports/show\'</span>\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p>Although all reports are viewable by everyone, I did not want just anyone to be able to edit or delete any of the reports. I wanted only the creator of a report to be able to edit or delete a report they created. To accomplish this, I check to make sure the currently logged in user has the same id as the report they are viewing.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code>session<span class="token punctuation">[</span><span class="token symbol">:user_id</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token variable">@report</span><span class="token punctuation">.</span>user_id\n</code></pre>\n      </div>\n<p>If so, they are redirected to a special view with an edit and delete button. Otherwise they are directed to the report show page, which is the same page sans edit and delete buttons.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>session<span class="token punctuation">[</span><span class="token symbol">:user_id</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token variable">@report</span><span class="token punctuation">.</span>user_id<span class="token punctuation">)</span>\n  erb <span class="token punctuation">:</span><span class="token string">\'/reports/show_edit_delete\'</span>\n<span class="token keyword">else</span>\n  erb <span class="token punctuation">:</span><span class="token string">\'/reports/show\'</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<h3>Test-Driven Development</h3>\n<p>I decided early on that I wanted to build this site using Test-Driven Development. At this point in the curriculum I have become adept at passing Rspec tests and I have a fairly good understanding of how to read them. Writing them has always been an intimidating prospect but I decided this was the perfect opportunity to learn.</p>\n<p>The philosophy behind TDD is that you first write out your expectations for the code you are writing. Once the expectation is there you write the code to fulfill it.</p>\n<p>An example of one of my expectations:</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code>it <span class="token string">\'rejects username less than 6 characters and shows one-time error message\'</span> <span class="token keyword">do</span>\n  params <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token symbol">:username</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"mike"</span><span class="token punctuation">,</span>\n    <span class="token symbol">:password</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"kittens123"</span>\n  <span class="token punctuation">}</span>\n  post <span class="token string">\'/signup\'</span><span class="token punctuation">,</span> params\n  <span class="token function">expect</span><span class="token punctuation">(</span>last_response<span class="token punctuation">.</span>location<span class="token punctuation">)</span><span class="token punctuation">.</span>to <span class="token function">include</span><span class="token punctuation">(</span><span class="token string">\'/signup\'</span><span class="token punctuation">)</span>\n  follow_redirect<span class="token operator">!</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>last_response<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">.</span>to <span class="token function">include</span><span class="token punctuation">(</span><span class="token string">"Username must be six or more characters"</span><span class="token punctuation">)</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p>My expectation is that if a user signs up with a short username, they will be redirected back to the signup page. They will also receive a warning message letting them know that their username choice is too short.</p>\n<p>Another example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code>it <span class="token string">\'password must contain one number and one non-alphanumeric character\'</span> <span class="token keyword">do</span>\n  params <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token symbol">:username</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"alexscott"</span><span class="token punctuation">,</span>\n    <span class="token symbol">:password</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"rain1"</span>\n  <span class="token punctuation">}</span>\n  post <span class="token string">\'/signup\'</span><span class="token punctuation">,</span> params\n  follow_redirect<span class="token operator">!</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>last_request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>to <span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">"http://example.org/signup"</span><span class="token punctuation">)</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>last_response<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">.</span>to <span class="token function">include</span><span class="token punctuation">(</span><span class="token string">"minimum six characters, 1 number and 1 special character"</span><span class="token punctuation">)</span>\n<span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p>Here I want the password to contain both a number and a special character. I expect that a password without them will redirect the user and provide a warning message.</p>\n<p>After writing each expectation I wrote the code that would fulfill it. This is the code that fulfills the two expectations above:</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code>post <span class="token string">\'/signup\'</span> <span class="token keyword">do</span>\n    <span class="token keyword">if</span> params<span class="token punctuation">[</span><span class="token symbol">:username</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">6</span>\n      flash<span class="token punctuation">[</span><span class="token symbol">:failure</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Username Must be Six or More Characters"</span>\n      redirect <span class="token string">\'/signup\'</span>\n    <span class="token keyword">elsif</span> <span class="token punctuation">(</span><span class="token operator">/</span><span class="token punctuation">[</span><span class="token operator">^</span>\\w<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token operator">/</span> <span class="token operator">=</span><span class="token operator">~</span> params<span class="token punctuation">[</span><span class="token symbol">:password</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">nil</span><span class="token operator">?</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token operator">/</span>\\d<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token operator">/</span> <span class="token operator">=</span><span class="token operator">~</span> params<span class="token punctuation">[</span><span class="token symbol">:password</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">nil</span><span class="token operator">?</span>\n      flash<span class="token punctuation">[</span><span class="token symbol">:failure</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Password Must Contain One Number and One Special Character"</span>\n      redirect <span class="token string">\'/signup\'</span>\n    <span class="token keyword">else</span>\n      <span class="token variable">@user</span> <span class="token operator">=</span> <span class="token constant">User</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>username<span class="token punctuation">:</span> params<span class="token punctuation">[</span><span class="token symbol">:username</span><span class="token punctuation">]</span><span class="token punctuation">,</span> password<span class="token punctuation">:</span> params<span class="token punctuation">[</span><span class="token symbol">:password</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n      session<span class="token punctuation">[</span><span class="token symbol">:user_id</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">@user</span><span class="token punctuation">.</span>id\n      redirect to <span class="token string">"/<span class="token interpolation"><span class="token delimiter tag">#{</span>@user<span class="token punctuation">.</span>slug<span class="token delimiter tag">}</span></span>"</span>\n    <span class="token keyword">end</span>\n  <span class="token keyword">end</span>\n</code></pre>\n      </div>\n<p>Coding this way allowed me to spend more time thinking about what I wanted my program to do. I am also happy that I spent the time learning how to write tests because it is a skill that is in high demand.</p>\n<h3>Deployment</h3>\n<p>Deploying a Ruby app was not as easy as I thought it would be. The current standard for deploying Ruby-based applications is through a service called Heroku. Initially I tried to deploy my app using a service called a \'A Small Orange\' on one of their shared servers. This became difficult quickly when I realized I didn\'t have root access to the server and couldn\'t create a Ruby friendly environment for my application. With that experience under my belt, I decided to host my application on a web-server through <a href="https://www.digitalocean.com/">Digital Ocean</a>. Digital Ocean rents you server with a custom ip address and super user access. With a little command-line knowledge, setting up a ruby-friendly environment was a breeze. After installing Ruby via RVM, I installed Apache as my HTTP web server along with a web app server called <a href="https://www.phusionpassenger.com/">Passenger Phusion</a> which allows Ruby and Apache to play nicely together.</p>\n<h3>Conclusion</h3>\n<p>Building my first dynamic web application was highly fulfilling. I had been struggling with Sinatra at many points but things finally came together at the end. I now feel comfortable using a variety of languages and frameworks and have fresh confidence moving into the rails portion of the course.</p>\n<p>Check out my project: <a href="http://www.freeganforum.com">www.freeganforum.com</a></p>\n<p>GitHub Repository: <a href="https://github.com/joelbitar1986/ny-freegan-forum">https://github.com/joelbitar1986/ny-freegan-forum</a></p>',frontmatter:{date:"October 27, 2016",path:"/2016-10-27-sinatra-final-project",title:"Building a Sinatra App w/ TDD"}}},pathContext:{}}}});
//# sourceMappingURL=path---2016-10-27-sinatra-final-project-62063cb4bbae75ad2fe5.js.map