run:
	npx concurrently "tsc -w &&" "browser-sync start -s ./dist"

git-clean:
	git rm -r --cached .

clean:
	rm -rf dist

build: clean
	tsc && cp ./public/index.html ./dist  \
	&& cp ./public/main.css ./dist \
	&& cp -r ./public/images ./dist \
	# && cp -r ./src/levels ./dist \
	&& cp ../config.toml ./dist

deploy: build
	git subtree push --prefix="dist"  origin gh-pages