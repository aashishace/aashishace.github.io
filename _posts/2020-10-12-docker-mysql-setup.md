---
title: 'Docker :ship: MySQL setup'
date: 2020-10-12
categories: DOCKER
image: /assets/uploads/ship.jpg
---

#### Step 1

```bash
docker pull mysql/mysql-server:latest
```
and check 

```
docker images
```

then

```
docker run --name=[name-of-container] -d mysql/mysql-server:latest
```

then

```
docker ps
```

#### Step 2: Find password

```bash
docker logs [name-of-container] 2>&1 | grep GENERATED
```

#### Step 3

```
docker exec -it [name-of-container] mysql -uroot -p
```

#### Step 4: Change password

```
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'your-password-here';
```

---

### Other commands

#### Start

```
docker start [name-of-container]
```

#### Stop

```
docker stop [name-of-container]
```

#### delete

```
docker stop [name-of-container]
docker rm [name-of-container]
```

---

### Errors

In case of 

```
dial unix /var/run/docker.sock: connect: permission denied
```

run

```
sudo setfacl --modify user:<user name or ID>:rw /var/run/docker.sock
```