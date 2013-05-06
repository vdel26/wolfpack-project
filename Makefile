all:

build:
	compass compile

release:
	compass compile --output-style compressed --force