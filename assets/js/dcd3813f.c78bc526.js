"use strict";(self.webpackChunksaurabh_github_io=self.webpackChunksaurabh_github_io||[]).push([[4235],{3905:(e,a,r)=>{r.d(a,{Zo:()=>m,kt:()=>b});var n=r(7294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function p(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=n.createContext({}),i=function(e){var a=n.useContext(c),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},m=function(e){var a=i(e.components);return n.createElement(c.Provider,{value:a},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},v=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=i(r),v=t,b=s["".concat(c,".").concat(v)]||s[v]||u[v]||o;return r?n.createElement(b,l(l({ref:a},m),{},{components:r})):n.createElement(b,l({ref:a},m))}));function b(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=v;var p={};for(var c in a)hasOwnProperty.call(a,c)&&(p[c]=a[c]);p.originalType=e,p[s]="string"==typeof e?e:t,l[1]=p;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},8632:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var n=r(7462),t=(r(7294),r(3905));const o={},l="Setup correct Java version for Maven",p={permalink:"/blog/maven-java-version",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/maven-java-version.md",source:"@site/blog/maven-java-version.md",title:"Setup correct Java version for Maven",description:"I have multiple java version installed on my m/c. I realized during maven build I was getting below error specific to version 11.0.2.",date:"2023-02-18T21:40:20.000Z",formattedDate:"February 18, 2023",tags:[],readingTime:1.37,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Engineering Manager Role",permalink:"/blog/engineering-manager-role"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},c={authorsImageUrls:[]},i=[],m={toc:i},s="wrapper";function u(e){let{components:a,...r}=e;return(0,t.kt)(s,(0,n.Z)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"I have multiple java version installed on my m/c. I realized during maven build I was getting below error specific to version 11.0.2."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"[ERROR]"," Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.10.1:compile (java-compile) on project server-impl: Compilation failure\n","[ERROR]"," An exception has occurred in the compiler (11.0.2). Please file a bug against the Java compiler via the Java bug reporting page (",(0,t.kt)("a",{parentName:"p",href:"http://bugreport.java.com"},"http://bugreport.java.com"),") after checking the Bug Database (",(0,t.kt)("a",{parentName:"p",href:"http://bugs.java.com"},"http://bugs.java.com"),") for duplicates. Include your program and the following diagnostic in your report. Thank you.   ")),(0,t.kt)("p",null,"[ERROR]"," java.lang.NullPointerException.",(0,t.kt)("br",{parentName:"p"}),"\n","[ERROR]"," \tat jdk.compiler/com.sun.tools.javac.comp.Flow$FlowAnalyzer.visitApply(Flow.java:1235)",(0,t.kt)("br",{parentName:"p"}),"\n","[ERROR]"," \tat jdk.compiler/com.sun.tools.javac.tree.JCTree$JCMethodInvocation.accept(JCTree.java:1634)",(0,t.kt)("br",{parentName:"p"}),"\n","[ERROR]"," \tat jdk.compiler/com.sun.tools.javac.tree.TreeScanner.scan(TreeScanner.java:49)",(0,t.kt)("br",{parentName:"p"}),"\n","[ERROR]"," \tat jdk.compiler/com.sun.tools.javac.comp.Flow$BaseAnalyzer.scan(Flow.java:398)",(0,t.kt)("br",{parentName:"p"}),"\n","[ERROR]"," \tat jdk.compiler/com.sun.tools.javac.comp.Flow$FlowAnalyzer.visitVarDef(Flow.java:989)",(0,t.kt)("br",{parentName:"p"}),"\n","[ERROR]"," \tat jdk.compiler/com.sun.tools.javac.tree.JCTree$JCVariableDecl.accept(JCTree.java:956)",(0,t.kt)("br",{parentName:"p"}),"\n","[ERROR]"," \tat jdk.compiler/com.sun.tools.javac.tree.TreeScanner.scan(TreeScanner.java:49)"),(0,t.kt)("p",null,"Error is specific to 11.0.2, Maven is picking wrong version of java. Even though java version on path is 11.0.18.  "),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"% java -version"),(0,t.kt)("br",{parentName:"p"}),"\n",'openjdk version "11.0.18" 2023-01-17',(0,t.kt)("br",{parentName:"p"}),"\n","OpenJDK Runtime Environment Homebrew (build 11.0.18+0)",(0,t.kt)("br",{parentName:"p"}),"\n","OpenJDK 64-Bit Server VM Homebrew (build 11.0.18+0, mixed mode)"),(0,t.kt)("p",null,"Check what is being picked up by using below:  "),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"% mvn -version"),(0,t.kt)("br",{parentName:"p"}),"\n",'Apache Maven 3.9.0 (9b58d2bad23a66be161c4664ef21ce219c2c8584)\nMaven home: /usr/local/Cellar/maven/3.9.0/libexec\nJava version: 11.0.2, vendor: Oracle Corporation, runtime: /Users/s.sharma.5/.sdkman/candidates/java/11.0.2-open\nDefault locale: en_DE, platform encoding: UTF-8\nOS name: "mac os x", version: "10.16", arch: "x86_64", family: \u201cmac"'),(0,t.kt)("p",null,"Maven picks java version from JAVA_HOME, so set it up correctly. "),(0,t.kt)("p",null,"List all available jdk versions:  "),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"% /usr/libexec/java_home -V"),(0,t.kt)("br",{parentName:"p"}),"\n","Matching Java Virtual Machines (3):",(0,t.kt)("br",{parentName:"p"}),"\n",'19.0.2 (x86_64) "Homebrew" - "OpenJDK 19.0.2" /usr/local/Cellar/openjdk/19.0.2/libexec/openjdk.jdk/Contents/Home',(0,t.kt)("br",{parentName:"p"}),"\n",'16.0.1 (x86_64) "Oracle Corporation" - "Java SE 16.0.1" /Library/Java/JavaVirtualMachines/jdk-16.0.1.jdk/Contents/Home',(0,t.kt)("br",{parentName:"p"}),"\n",'11.0.18 (x86_64) "Homebrew" - "OpenJDK 11.0.18" /usr/local/Cellar/openjdk@11/11.0.18/libexec/openjdk.jdk/Contents/Home',(0,t.kt)("br",{parentName:"p"}),"\n","/usr/local/Cellar/openjdk/19.0.2/libexec/openjdk.jdk/Contents/Home.  "),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"% set export JAVA_HOME=/usr/local/Cellar/openjdk@11/11.0.18/libexec/openjdk.jdk/Contents/Home"),".   "),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"% mvn -version"),".",(0,t.kt)("br",{parentName:"p"}),"\n","Apache Maven 3.9.0 (9b58d2bad23a66be161c4664ef21ce219c2c8584).",(0,t.kt)("br",{parentName:"p"}),"\n","Maven home: /usr/local/Cellar/maven/3.9.0/libexec",(0,t.kt)("br",{parentName:"p"}),"\n","Java version: 11.0.18, vendor: Homebrew, runtime: /usr/local/Cellar/openjdk@11/11.0.18/libexec/openjdk.jdk/Contents/Home",(0,t.kt)("br",{parentName:"p"}),"\n","Default locale: en_DE, platform encoding: UTF-8",(0,t.kt)("br",{parentName:"p"}),"\n",'OS name: "mac os x", version: "11.6.1", arch: "x86_64", family: \u201cmac"'))}u.isMDXComponent=!0}}]);