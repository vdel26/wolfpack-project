all:

server:
	compass watch &
	python -m SimpleHTTPServer 8080

build:
	compass compile

release:
	compass compile --output-style compressed --force