## The Challenge

Create a lossless compression algorithm, suitable for CSS/JSON/Text Payloads.

## Why Are We Doing this?
Have fun working with new people! Explore the possibilities of how you might 
approach a problem that I imagine most of you have never faced. 

Don't feel you *have* to write any code if you simply enjoy exploring the
problem and coming up with an algorithm, but you won't be eligible to win the 
prize.

## You Are Provided

We have provided:
 - A Docker Environment
 - Skeleton codebase in Node/PHP/Python
    - These will test your code against the provided fixtures and provide a 
    result

## You Will Need To Make

Each test.xx file already has two functions - compress and decompress. These 
take in a string and return a string. These are the only two functions you need 
to write.

> You do not need to store any files to disk - it will be passed directly back 
into the decompress function when tested.

## You Will Be Marked On

- Compression ratio average across all fixtures.

## You Will NOT Be Marked On

 - The speed of your code.
 - How your code looks.
 - Your use of git.
 - Your variable names.
 - Your Lionel Richie impression.

## Restrictions

 - The solution must be stateless. 
 - Everything needed to decompress the string should be in the resultant output. 
 - No dependencies on external services. 
 - No use of existing libraries (lzh/gzip etc.). 
 - All solutions must be original. 
 - Please don't research existing solutions - try and come up with a unique 
 approach.

## Prizes

There will be prizes for the top 3 results, and you will be given 5 minutes to 
explain your algorithm to the team. 

## Getting Started

Pick your preferred language, we have JavaScript, PHP and Python available to 
you.

We have made you a docker image to make development faster. You don't need to 
install anything on your machine. Simply run these commands to run your code.

    # JavaScript
    docker compose run jackathon node test.js

    # PHP
    docker compose run jackathon php test.php

    # Python
    docker compose run jackathon python test.py

Alternatively, you can run the code on your local computer if you have the 
language installed and you don't fancy using docker. This is not recommended as 
you may need to update your version of the language if you want to run the code 
on your own machine. We've tested that our starting scripts run on Python 3.9.7,
Node 18 and PHP 8.0.18

    # JavaScript
    node test.js

    # PHP
    php test.php

    # Python
    python test.py
