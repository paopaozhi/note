"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4247],{4169:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>a});var i=s(4848),r=s(8453);const l={},c="gitea\u90e8\u7f72\u624b\u518c",t={id:"liunx/gitea\u90e8\u7f72\u624b\u518c",title:"gitea\u90e8\u7f72\u624b\u518c",description:"\u7ea6\u675f",source:"@site/docs/liunx/gitea\u90e8\u7f72\u624b\u518c.md",sourceDirName:"liunx",slug:"/liunx/gitea\u90e8\u7f72\u624b\u518c",permalink:"/docs/liunx/gitea\u90e8\u7f72\u624b\u518c",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1720432761e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Nginx\u90e8\u7f72\u9759\u6001\u7f51\u7ad9",permalink:"/docs/liunx/Nginx\u57fa\u672c\u4f7f\u7528"},next:{title:"wsl\u5b89\u88c5\u914d\u7f6e\u6307\u5357-\u57fa\u4e8edebin",permalink:"/docs/liunx/wsl\u5b89\u88c5\u914d\u7f6e\u6307\u5357-\u57fa\u4e8edebin"}},d={},a=[{value:"\u7ea6\u675f",id:"\u7ea6\u675f",level:2},{value:"\u521b\u5efagit\u7528\u6237",id:"\u521b\u5efagit\u7528\u6237",level:2},{value:"\u67e5\u770bgit\u7528\u6237id",id:"\u67e5\u770bgit\u7528\u6237id",level:3},{value:"\u5b9e\u73b0SSH\u5bb9\u5668\u76f4\u901a",id:"\u5b9e\u73b0ssh\u5bb9\u5668\u76f4\u901a",level:2},{value:"\u4f7f\u7528PostgreSQL \u6570\u636e\u5e93\u521b\u5efagitea\u5b9e\u4f8b",id:"\u4f7f\u7528postgresql-\u6570\u636e\u5e93\u521b\u5efagitea\u5b9e\u4f8b",level:2},{value:"nginx\u53cd\u5411\u4ee3\u7406,\u914d\u7f6e\u57df\u540d\u914d\u7f6e<code>https</code>",id:"nginx\u53cd\u5411\u4ee3\u7406\u914d\u7f6e\u57df\u540d\u914d\u7f6ehttps",level:2},{value:"\u914d\u7f6e\u4ee3\u7406",id:"\u914d\u7f6e\u4ee3\u7406",level:2},{value:"\u670d\u52a1\u914d\u7f6e",id:"\u670d\u52a1\u914d\u7f6e",level:2},{value:"\u914d\u7f6e<code>actions</code>",id:"\u914d\u7f6eactions",level:2},{value:"\u914d\u7f6eact_runner",id:"\u914d\u7f6eact_runner",level:3},{value:"\u62c9\u53d6\u955c\u50cf",id:"\u62c9\u53d6\u955c\u50cf",level:4},{value:"\u751f\u6210\u914d\u7f6e\u6587\u4ef6",id:"\u751f\u6210\u914d\u7f6e\u6587\u4ef6",level:4},{value:"\u901a\u8fc7<code>docker-compose.yml</code>\u542f\u52a8<code>act_runner</code>\u5bb9\u5668",id:"\u901a\u8fc7docker-composeyml\u542f\u52a8act_runner\u5bb9\u5668",level:4}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"gitea\u90e8\u7f72\u624b\u518c",children:[(0,i.jsx)(n.code,{children:"gitea"}),"\u90e8\u7f72\u624b\u518c"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7ea6\u675f",children:"\u7ea6\u675f"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5df2\u7ecf\u6210\u529f\u6784\u5efa\u4e86\u4e00\u4e2a",(0,i.jsx)(n.code,{children:"nginx"}),"\u548c",(0,i.jsx)(n.code,{children:"filebrowser"}),"\u670d\u52a1\u5668"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gitea"}),"\u7248\u672c\u53f7\uff1a1.21.7"]}),"\n",(0,i.jsx)(n.li,{children:"\u62e5\u6709\u4e00\u4e2a\u4ee3\u7406\u670d\u52a1\u5668\uff0c\u7528\u4e8e\u8fc1\u79fbgithub\u4e0a\u7684\u4ed3\u5e93"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u521b\u5efagit\u7528\u6237",children:"\u521b\u5efagit\u7528\u6237"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"adduser test\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u67e5\u770bgit\u7528\u6237id",children:"\u67e5\u770bgit\u7528\u6237id"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# command\ncat /etc/passwd\n\n# result\n...\ngit:x:1003:1003:,,,:/home/git:/bin/bash\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u9700\u8981\u8bb0\u5f55",(0,i.jsx)(n.code,{children:"1003:1003"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u6ce8\u660e\uff1a",(0,i.jsx)(n.code,{children:"\u7528\u6237id:\u7528\u6237\u7ec4id"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u5b9e\u73b0ssh\u5bb9\u5668\u76f4\u901a",children:"\u5b9e\u73b0SSH\u5bb9\u5668\u76f4\u901a"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4e3b\u673a\u4e0a\u521b\u5efa SSH \u5bc6\u94a5\u5bf9\u3002\u8be5\u5bc6\u94a5\u5bf9\u5c06\u7528\u4e8e\u5411\u4e3b\u673a\u9a8c\u8bc1\u4e3b\u673a\u4e0a\u7684 ",(0,i.jsx)(n.code,{children:"git"})," \u7528\u6237\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# \u975eroot\u7528\u6237\nsudo -u git ssh-keygen -t rsa -b 4096 -C "Gitea Host Key"\n# root\u7528\u6237\ngit ssh-keygen -t rsa -b 4096 -C "Gitea Host Key"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4e3b\u673a\u4e0a\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,i.jsx)(n.code,{children:"/usr/local/bin/gitea"})," \u7684\u6587\u4ef6\uff08\u5177\u6709\u53ef\u6267\u884c\u6743\u9650\uff09\u3002\u6dfb\u52a0\u4e00\u4e0b\u5185\u5bb9"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'ssh -p 2222 -o StrictHostKeyChecking=no git@127.0.0.1 "SSH_ORIGINAL_COMMAND=\\"$SSH_ORIGINAL_COMMAND\\" $0 $@"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u7531\u4e8e\u6b64\u7aef\u53e3\u4e0d\u9700\u8981\u66b4\u9732\u7ed9\u5916\u754c\uff0c\u56e0\u6b64\u53ef\u4ee5\u5c06\u5176\u6620\u5c04\u5230\u4e3b\u673a\u7684 ",(0,i.jsx)(n.code,{children:"localhost"}),"\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'ports:\n  # [...]\n  - "127.0.0.1:2222:22"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u9700\u8981\u5c06\u521b\u5efa\u7684\u5bc6\u94a5\u7684\u516c\u5171\u5bc6\u94a5\u52a0\u5165\u5230",(0,i.jsx)(n.code,{children:"~/git/.ssh/authorized_keys"}),"\u8fd9\u6837\u624d\u80fd\u591f\u5b8c\u6210\u9a8c\u8bc1"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'echo "$(cat /home/git/.ssh/id_rsa.pub)" >> /home/git/.ssh/authorized_keys\n'})}),"\n",(0,i.jsx)(n.p,{children:'!!! warning "\u6ce8\u610f"\n\u6765\u81ea git \u7528\u6237\u7684\u516c\u94a5\u9700\u8981\u201c\u6309\u539f\u6837\u201d\u6dfb\u52a0\uff0c\u800c\u901a\u8fc7 Gitea \u7f51\u7edc\u754c\u9762\u6dfb\u52a0\u7684\u6240\u6709\u5176\u4ed6\u516c\u94a5\u5c06\u4ee5 command="/app [...] \u4f5c\u4e3a\u524d\u7f00\u3002'}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u662f\u8be6\u7ec6\u7684\u8bf4\u660e\uff0c\u5f53\u53d1\u51fa SSH \u8bf7\u6c42\u65f6\u4f1a\u53d1\u751f\u4ec0\u4e48\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"git"})," \u7528\u6237\u5411\u4e3b\u673a\u53d1\u51fa SSH \u8bf7\u6c42\uff0c\u4f8b\u5982 ",(0,i.jsx)(n.code,{children:"git clone git@domain:user/repo.git"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5728 ",(0,i.jsx)(n.code,{children:"/home/git/.ssh/authorized_keys"})," \u4e2d\uff0c\u8be5\u547d\u4ee4\u6267\u884c ",(0,i.jsx)(n.code,{children:"/usr/local/bin/gitea"})," \u811a\u672c\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/usr/local/bin/gitea"})," \u5c06 SSH \u8bf7\u6c42\u8f6c\u53d1\u5230\u7aef\u53e3 2222\uff0c\u8be5\u7aef\u53e3\u5df2\u6620\u5c04\u5230\u5bb9\u5668\u7684 SSH \u7aef\u53e3\uff0822\uff09\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u7531\u4e8e ",(0,i.jsx)(n.code,{children:"/home/git/.ssh/authorized_keys"})," \u4e2d\u5b58\u5728 ",(0,i.jsx)(n.code,{children:"git"})," \u7528\u6237\u7684\u516c\u94a5\uff0c\u56e0\u6b64\u8eab\u4efd\u9a8c\u8bc1\u4e3b\u673a \u2192 \u5bb9\u5668\u6210\u529f\uff0c\u5e76\u4e14 SSH \u8bf7\u6c42\u8f6c\u53d1\u5230\u5728 docker \u5bb9\u5668\u4e2d\u8fd0\u884c\u7684 Gitea\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528postgresql-\u6570\u636e\u5e93\u521b\u5efagitea\u5b9e\u4f8b",children:"\u4f7f\u7528PostgreSQL \u6570\u636e\u5e93\u521b\u5efagitea\u5b9e\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'version: "3.8"\n\nnetworks:\n  gitea:\n    external: false\n\nvolumes:\n  gitea:\n    driver: local\n  postgres:\n    driver: local\n\nservices:\n  server:\n    image: gitea/gitea:1.21.7\n    container_name: gitea\n    environment:\n      - USER_UID=1003\n      - USER_GID=1003\n      - GITEA__database__DB_TYPE=postgres\n      - GITEA__database__HOST=db:5432\n      - GITEA__database__NAME=gitea\n      - GITEA__database__USER=gitea\n      - GITEA__database__PASSWD=gitea\n    restart: always\n    networks:\n      - gitea\n    volumes:\n      - gitea:/data\n      - /home/git/.ssh/:/data/git/.ssh\n      - /etc/timezone:/etc/timezone:ro\n      - /etc/localtime:/etc/localtime:ro\n    ports:\n      - "3000:3000"      \n      - "127.0.0.1:2222:22"\n    depends_on:\n      - db\n  db:\n    image: postgres:14\n    restart: always\n    environment:\n      - POSTGRES_USER=gitea\n      - POSTGRES_PASSWORD=gitea\n      - POSTGRES_DB=gitea\n    networks:\n      - gitea\n    volumes:\n      - postgres:/var/lib/postgresql/data\n\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"nginx\u53cd\u5411\u4ee3\u7406\u914d\u7f6e\u57df\u540d\u914d\u7f6ehttps",children:["nginx\u53cd\u5411\u4ee3\u7406,\u914d\u7f6e\u57df\u540d\u914d\u7f6e",(0,i.jsx)(n.code,{children:"https"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"app.ini"}),"\u6587\u4ef6\u914d\u7f6e"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"[server]\nDOMAIN = gitea.*.ltd\nSSH_DOMAIN = gitea.*.ltd\nROOT_URL = http://gitea.*.ltd\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"nginx.conf"}),"\u6587\u4ef6\u914d\u7f6e"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-conf",children:"server {\n    listen 80;\n    server_name gitea.*.ltd;\n\n    location / {\n        proxy_pass http://172.17.0.1:3000;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u914d\u7f6e\u4ee3\u7406",children:"\u914d\u7f6e\u4ee3\u7406"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://zhuanlan.zhihu.com/p/680115911",children:"Docker\u5b89\u88c5Squid\u4ee3\u7406\u670d\u52a1 - \u77e5\u4e4e (zhihu.com)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://developer.aliyun.com/article/944888",children:"gitea\u914d\u7f6e\u5168\u5c40\u4ee3\u7406\u7528\u4e8e\u955c\u50cfgithub\u6e90-\u963f\u91cc\u4e91\u5f00\u53d1\u8005\u793e\u533a (aliyun.com)"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4fee\u6539",(0,i.jsx)(n.code,{children:"app.ini"}),"\u6587\u4ef6"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"PROXY_ENABLED = true\nPROXY_URL = https://1.14.*.*:3128\nPROXY_HOSTS = *.github.com\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u670d\u52a1\u914d\u7f6e",children:"\u670d\u52a1\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.p,{children:["\u914d\u7f6e",(0,i.jsx)(n.code,{children:"app.ini"}),"\u4ee5\u6ee1\u8db3\u4e00\u4e9b\u4e2a\u6027\u9700\u6c42"]}),"\n",(0,i.jsx)(n.p,{children:"\u9650\u5236\u6240\u6709\u4ed3\u5e93\u53ea\u6709\u767b\u5f55\u540e\u624d\u80fd\u8bbf\u95ee"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"REQUIRE_SIGNIN_VIEW = true\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5173\u95edgitea\u7684\u6ce8\u518c\u529f\u80fd"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"REQUIRE_SIGNIN_VIEW = true\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"\u914d\u7f6eactions",children:["\u914d\u7f6e",(0,i.jsx)(n.code,{children:"actions"})]}),"\n",(0,i.jsx)(n.h3,{id:"\u914d\u7f6eact_runner",children:"\u914d\u7f6eact_runner"}),"\n",(0,i.jsx)(n.h4,{id:"\u62c9\u53d6\u955c\u50cf",children:"\u62c9\u53d6\u955c\u50cf"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker pull gitea/act_runner:latest # for the latest stable release\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u751f\u6210\u914d\u7f6e\u6587\u4ef6",children:"\u751f\u6210\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'docker run --entrypoint="" --rm -it gitea/act_runner:latest act_runner generate-config > config.yaml\n'})}),"\n",(0,i.jsxs)(n.h4,{id:"\u901a\u8fc7docker-composeyml\u542f\u52a8act_runner\u5bb9\u5668",children:["\u901a\u8fc7",(0,i.jsx)(n.code,{children:"docker-compose.yml"}),"\u542f\u52a8",(0,i.jsx)(n.code,{children:"act_runner"}),"\u5bb9\u5668"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'version: "3.8"\nservices:\n  runner:\n    image: gitea/act_runner:nightly\n    environment:\n      CONFIG_FILE: /config.yaml\n      GITEA_INSTANCE_URL: "${INSTANCE_URL}"\n      GITEA_RUNNER_REGISTRATION_TOKEN: "${REGISTRATION_TOKEN}"\n      GITEA_RUNNER_NAME: "${RUNNER_NAME}"\n      GITEA_RUNNER_LABELS: "${RUNNER_LABELS}"\n    volumes:\n      - ./config.yaml:/config.yaml\n      - ./data:/data\n      - /var/run/docker.sock:/var/run/docker.sock\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"INSTANCE_URL"}),"\u4e3agitea\u5b9e\u4f8b\u7684url/ip\u5730\u5740"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"REGISTRATION_TOKEN"}),"\u4e3a\u521b\u5efatoken(\u6765\u81eagitea\u5b9e\u4f8b)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"RUNNER_NAME"}),"\u4e3a\u8be5",(0,i.jsx)(n.code,{children:"runner"}),"\u540d\u79f0(\u53ef\u81ea\u5b9a\u4e49)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"RUNNER_LABELS"}),"\u4e3a\u521b\u5efa\u7684\u955c\u50cf\u6765\u6e90(\u4e0d\u53ef\u81ea\u5b9a\u4e49)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'??? tip "\u5c0f\u8d34\u58eb"\nRUNNER_LABELS\u5b9e\u4f8b: ubuntu-latest:docker://node:16-bullseye'}),"\n",(0,i.jsx)(n.p,{children:"ubuntu-latest\u4e3a\u7ea2\u6846\u6807\u6ce8"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:s(5032).A+"",width:"1925",height:"676"})}),"\n",(0,i.jsxs)(n.p,{children:["//node:16-bullseye\u4e3a",(0,i.jsx)(n.code,{children:"actions"}),"\u811a\u672c\u542f\u52a8\u7684\u955c\u50cf\u6765\u6e90"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/nektos/act/blob/master/IMAGES.md",children:"\u5168\u90e8\u955c\u50cf\u6765\u6e90"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\u4f7f\u7528",(0,i.jsx)(n.code,{children:","}),"\u5206\u5272"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},5032:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-fe3f1eb9aa3d61525dfe12e1a8b87d8f.png"},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>t});var i=s(6540);const r={},l=i.createContext(r);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);