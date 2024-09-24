# install packages
cd backend
npm ci
cd ../client
npm ci

cd ../backend

touch .env

# ask for API key and store it in backend/.env
echo type your Twilight Cyber API key:
read api_key
echo "API_KEY="$api_key > .env

# run client and backend in parallel
npm run start:dev & cd ../client && npm run dev &