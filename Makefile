install: 
	npm ci

games:
	node src/games/brain-games.js

even:
	node src/games/brain-even.js

calc:
	node src/games/brain-calc.js

gcd:
	node src/games/brain-gcd.js

progression:
	node src/games/brain-progression.js

prime:
	node src/games/brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

fix:
	npx eslint . --fix