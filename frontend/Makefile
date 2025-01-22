dist=dist
COPY_FLAGS=--recursive --preserve=timestamps --update


.PHONY: all
all: dist


.PHONY: $(dist)
$(dist): mkdirs $(dist)/index.html $(dist)/favicon.ico
	@printf "\n%s\n" "Finish building $(dist)/ directory"
	@printf "NODE_ENV: %s\n" $(NODE_ENV)

	cp $(COPY_FLAGS) assets/vendor $(dist)/assets
	cp -v $(COPY_FLAGS) assets/css assets/js $(dist)/assets


$(dist)/index.html: index.html
	@printf "\n%s\n" "Building HTML"
	@printf "NODE_ENV: %s\n" $(NODE_ENV)

	node ./scripts/build-html.js


$(dist)/favicon.ico: favicon.ico
	@printf "\n%s\n" "Copying $<"
	cp $(COPY_FLAGS) $? $(dist)


.PHONY: gh-deploy
gh-deploy: html
	npm run gh-deploy


.PHONY: html
html:
	@printf "NODE_ENV: %s\n" $(NODE_ENV)
	node ./scripts/build-html.js


.PHONY: mkdirs
mkdirs:
	@mkdir --parents $(dist) $(dist)/assets $(dist)/assets/js $(dist)/assets/css


.PHONY: vendor
vendor:
	@bash scripts/download-vendor.sh


.PHONY: clean
clean:
	rm -rf $(dist)
