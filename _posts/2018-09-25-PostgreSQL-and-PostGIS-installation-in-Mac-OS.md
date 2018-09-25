---
layout: post
title: "PostgreSQL and PostGIS installation in Mac OS."
date: 2018-09-25
tags: postgres MacOS
comments: true
---
PostgreSQL and PostGIS installation in Mac OS.

PostGIS is spatial database extender for PostgreSQL object-relational database. It adds supports for geographic objects allowing location queries to be run in SQL.

Remove previous versions of PostgreSQL
```brew uninstall --force postgresql```

Delete all Files of Postgres
```rm -rf /usr/local/var/postgres```

Install Postgres with Homebrew
```brew install postgres```

Install PostGIS with Homebrew
```brew install postgis```

Start PostgreSQL server
```pg_ctl -D /usr/local/var/postgres start```

Create Database
```initdb /usr/local/var/postgres```

If terminal shows an error

>initdb: directory "/usr/local/var/postgres" exists but is not empty
If you want to create a new database system, either remove or empty
the directory "/usr/local/var/postgres" or run initdb
with an argument other than "/usr/local/var/postgres".

Remove old database file
```rm -r /usr/local/var/postgres```

Run the initdb command again
```initdb /usr/local/var/postgres```
