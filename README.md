# Flight booking API with Authentication using Bcrypt and JSON Web Tokens

# Setting up the local server.

1. Get a free MongoDB atlas account [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/efficiency?utm_source=google&utm_campaign=gs_emea_nigeria_search_core_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624539&adgroup=115749718503)
2. Set up a free tier project and obtain connection URI that looks like so - `mongodb+srv://<USERNAME>:<PASSWORD>@auth-authorizationjwt.xsbmedo.mongodb.net/?retryWrites=true&w=majority`
3. Clone this repository, switch into this directory and run `yarn add` or `npm install` to install all required packages
4. Create .env file and add your `SECRET_KEY_<ROLE>`

# Routes definition

All routes are protected except for creating a user route and logging in to obtain the token

## User

1. The base route is `/user`
2. Create a user route `/register`. Method = `POST`
3. Log-in user route `/login`. Method = `POST`
4. Delete user route `/delete/<id>`. Method = `DELETE`

## Admin

1. The base route is `/admin`
2. Create an admin route `/register`. Method = `POST`
3. Log-in admin route `/login`. Method = `POST`
4. Delete admin route `/delete/<id>`. Method = `DELETE`

## Flight endpoints

### Users are able to:

1. Book Flight
2. Get all flights
3. Get a single Flight

### Admins are able to:

1. Update Flights
2. Delete Flights
3. Add flights

Flights have the following attributes:
{
title: "flight to canada",
time: 1pm,
price: 26000,
date: "26-06-2022"
}
