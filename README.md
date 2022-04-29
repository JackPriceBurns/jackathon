## The Challenge

Create a lossless compression algorithm, suitable for CSS/JSON/Text Payloads.

## Why Are We Doing this?
Have fun working with new people! Explore the possibilities of how you might approach a problem that I imagine most of you have never faced. 

Don't feel you *have* to write any code if you simply enjoy exploring the problem and coming up with an algorithm, but you won't be eligible to win the prize.

## You Are Provided

We have provided:
 - A Docker Environment
 - Skeleton codebase in Node/PHP/Python
    - These will test your code against the provided fixtures and provide a result

## You Will Need To Make

Each test.xx file already has two functions - compress and decompress. These take in a string and return a string. These are the only two functions you need to write.

**You do not need to store any files to disk - it will be passed directly back into the decompress function when tested.**

## You Will Be Marked On

Compression ratio average across all fixtures.

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
 - Please don't research existing solutions - try and come up with a unique approach.

## Prizes

There will be prizes for the top 3 results, and you will be given 5 minutes to explain your algorithm to the team. 

## Getting Started

If you have docker and docker-compose installed, you can simply run

`docker-compose up --build`

This will build the container with PHP/Node/Python

To access this simply run:

`docker-compose exec dev sh`

This will bring up a terminal on that container, with your working directory volume mounted for immediate code changes.

**Alternatively, you can just install Node/PHP/Python locally.**

All the code you need to write sites inside the relevant test.XX file and can be run accordingly. For example:

`node test.js`

or

`python3 test.py`

or

`php test.php`
