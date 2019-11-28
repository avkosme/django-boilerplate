start:
	docker-compose up -d
stop:
	docker-compose stop
psql-cli:
	docker-compose exec postgres psql -U test_user test
