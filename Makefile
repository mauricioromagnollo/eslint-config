test-create:
	mkdir test; cd test; \
	touch .eslintrc test.js test.ts test.jsx test.tsx; \
	echo "{ \"extends\": \"@mauricioromagnollo/eslint-config/node\" }" >> .eslintrc; \
	npm init -y; \
	npm i -D eslint git+https://github.com/mauricioromagnollo/eslint-config.git

test-remove:
	rm -Rf test
