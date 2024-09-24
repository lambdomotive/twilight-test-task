This project allows users to search for information about a domain using the Twilight Cyber API.

Tech stack: nestJS, Next.js, ANTD, Chart.js, date-fns, lodash.

To run backend and frontend together you can use this commands (on UNIX systems):

```bash
chmod +x start.sh
./start.sh
```

What would I do next if this was a real project that the business needed:
 - Add different API response statuses handling on client;
 - Setup pre-commit and pre-push hooks with husky (run linter, prettier and tests);
 - Cover app entities with unit and e2e tests;
 - Setup OpenAPI/Swagger for endpoints;
 - Docker containerization;
 - Setup CI (run tests and linter)/CD (deploy to dev/UAT/production env) pipelines .
