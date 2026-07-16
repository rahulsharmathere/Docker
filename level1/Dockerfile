# FROM baseimage 
FROM node

# create directory
WORKDIR /app

#format-> COPY source destination
# COPY package.json package.json
# COPY package-lock.json package-lock.json  

# shortcut to copy all such files starting with package : 
COPY package*.json .

RUN npm install

#format-> COPY source destination
# COPY index.js index.js
# COPY db.js db.js
# and so on......

# shortcut to copyall files as same name:
COPY . .


# command to run 
CMD [ "node","index.js"]

