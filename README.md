# Running Circles

## Table of Contents

[General Info](#general-info)

[Demo](#demo)

[Technologies](#technologies)

[Setup](#setup)

[Features](#features)

[Code Examples](#code-examples)

[Inspiration](#inspiration)

[Contact](#contact)

## General Info

Running Circles allows you to plan and join running events with friends in your circles.
The backend repo for this project can be found [here](https://github.com/haleywarson/running-circles-backend).

## Demo

![Demo](https://media.giphy.com/media/RFelQ1Pt3kRK8lHz0c/giphy.gif)

## Technologies

- React
- CSS
- Html
- JSX
- Rails
- Ruby

## Setup

First, fork and clone the backend repo. Open the code, run "bundle install" and "rails s". 
Then fork and clone the frontend repo, open the code, run "npm install" and "npm start."

## Features

- User authorization and login/logout.
- Schedule a run and add it to your training plan.
- Review and join running events.
- View your running circles of friends and training partners.
- Join running circles to train with new friends.

## Code Examples

```js
  const login = (username, password) => {
    fetch(baseUrl + "login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.token) {
          localStorage.setItem("token", result.token);
          setUser(result.user);
        } else {
          setError(result.error);
        }
      });
  };

  const validateUser = () => {
    let token = localStorage.getItem("token");
    if (token) {
      fetch(baseUrl + "profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.id) {
            setUser(result);
          }
        });
    }
  };
```
```rb
def current_user 
        auth_header = request.headers["Authorization"] 
        if auth_header
            token = auth_header.split(" ")[1]
            begin
                @user_id = JWT.decode(token, Rails.application.secrets.secret_key_base[0])[0]["user_id"]
                @user = User.find(@user_id)
            rescue JWT::DecodeError
                nil
            end 
        end 
        if(@user_id)
            @user=User.find(@user_id)
        else
            nil 
        end 
    end 
```

## Inspiration

Running is more fun when you train with friends!

## Contact

Running Circles was created by [Haley Warson](https://www.linkedin.com/in/haleywarson/).

Contact me with any questions.
