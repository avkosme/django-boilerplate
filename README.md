# django-boilerplate

## Развернуть проект локально (для разработки)
```console
$ git clone https://github.com/avkosme/django-boilerplate.git <project name>
```

## Запуск проекта в докере
```console
$ docker-compose up -d
```

```console
$ docker-compose ps
        Name                      Command              State           Ports          
-------------------------------------------------------------------------------------
project_name_postgres_1   docker-entrypoint.sh postgres   Up      0.0.0.0:5432->5432/tcp 
project_name_web_1        .bin/run.sh staging             Up      0.0.0.0:80->80/tcp     

```

В браузере по адресу http://localhost/ станет доступна страница "The install worked successfully! Congratulations!" - Django
