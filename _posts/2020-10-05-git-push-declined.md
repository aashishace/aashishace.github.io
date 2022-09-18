---
title: 'Git push declined due to email privacy restrictions :fearful:'
date: 2020-10-05
categories: GIT
image: /assets/uploads/git_ss.jpg
---

### Push Declined
Reason was email privacy restrictions.

Goto [https://github.com/settings/emails](https://github.com/settings/emails) and find your email which is like

```bash
{ID}+{username}@users.noreply.github.com
```

copy it and run

```bash
git config --global user.email {ID}+{username}@users.noreply.github.com
git commit --amend --reset-author
```