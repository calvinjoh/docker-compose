## Command Docker Compose
**Cara Install Docker Compose**
```sh
$ sudo curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose
$ docker-compose --version
```
[Tutorial Lengkapnya](https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-18-04)


**Untuk create container/network/volume di file docker compose:**
```sh
$ docker-compose -f docker-compose-v3.yaml -p my-app-v3 up --scale order=5 -d --build
```
Parameter:
  - **-f** => Untuk menentukan nama file docker-compose yang digunakan (Jika tidak memakai -f maka docker-compose akan secara default menggunakan file docker-compose.yaml)
  - **-p** => Untuk memberi nama project (Nama ini juga akan digunakan untuk container jika tidak ada container_name dan network serta volume name)
  - **--scale** => Untuk scale container 
  - **--build** => Untuk menjalankan build image (Jika tidak menggunakan --build maka docker tidak akan build image jika image tersebut sudah ada)
 

**Untuk start, restart, & stop container/network/volume berdasarkan file docker compose:**
```sh
$ docker-compose -f docker-compose-v3.yaml -p my-app-v3 stop
$ docker-compose -f docker-compose-v3.yaml -p my-app-v3 restart
$ docker-compose -f docker-compose-v3.yaml -p my-app-v3 start
```
Catatan:
  - **-f & -p** => Isi filename dan project name harus sesuai dengan docker-compose yang sudah up
 
**Untuk start, restart, & stop container/network/volume berdasarkan nama services:**

```sh
$ docker-compose -f docker-compose-v3.yaml -p my-app-v3 stop order
$ docker-compose -f docker-compose-v3.yaml -p my-app-v3 restart order
$ docker-compose -f docker-compose-v3.yaml -p my-app-v3 start order
```
Value:
  - **order** => Nama services

**Untuk Scale Container Yang Sudah UP:**
```sh
$ docker-compose -f docker-compose-v3.yaml -p my-app-v3 scale order=7
```

**Untuk remove/down container/network/volume di file docker compose:**
```sh
$ docker-compose -f docker-compose-v3.yaml -p my-app-v3 down
```

**Dokumentasi Config File Docker Compose**
* [Versi Docker Compose](https://docs.docker.com/compose/compose-file/)
* [Docker Compose File v3](https://docs.docker.com/compose/compose-file/compose-file-v3/)
* [Docker Compose File v2](https://docs.docker.com/compose/compose-file/compose-file-v2/)