# Comments

.PHONY: help
help :
	echo 'hi'


.PHONY: ejs
ejs:
	mkdir --parents dist dist/lib
	./node_modules/.bin/ejs ./index.html -f ./.env.local.json -o ./dist/index.html

.PHONY: dist
dist: ejs
	@echo "Build dist"
	mkdir --parents dist dist/lib

	cp --recursive --preserve=timestamps --update -t dist \
		favicon.ico vendor

	cp --recursive --preserve=timestamps --update -t dist/lib \
		lib/css lib/js

.PHONY: clean
clean:
	rm -rf dist
