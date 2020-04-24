# Farm Ahead
![](client/public/farmaheadlogo_medium.png)
#### Introducing Farm Ahead, an app to bridge the gap between the farm and you.
Our homegrown app is a search engine and marketplace that connects shoppers to markets, vedors and farmers with the goal of keeping food local and healthy. We hope to provide an online marketplace for small farms and vendors who would rather focus on the soil than build an e-commerce site.

### Design
#### Logo
Logo painfully created by team member Brett Cropp in Inkscape, and would gladly accept applications for graphic designers

#### Data
* Farmer's Markets pulled from [NY Data](https://data.ny.gov/Economic-Development/Farmers-Markets-in-New-York-State/qq4h-8p86)
* Other data programatically generated in Jupyter and [Mockaroo](https://www.mockaroo.com)

#### Database
* [SQLAlchemy](https://www.sqlalchemy.org/), with configuration for PostgreSQL (local or remote)

#### Server
* To run [server](server/README.md) and manage data, pip installs the farmahead CLI tool
* [Flask](https://flask.palletsprojects.com/en/1.1.x/)
* [flask-restful](https://flask-restful.readthedocs.io/en/latest/)
* [gunicorn](https://gunicorn.org/)
* [nginx](https://www.nginx.com/)

#### Client
* [Client](client/README.md) built using custom [React.js](https://reactjs.org/) components and [redux](https://react-redux.js.org/)

#### Deployment 
* Farm Ahead is deployed to Amazon AWS with EC2 with [ansible](https://www.ansible.com/) playbooks. 
* To [deploy](ansible/README.md), a user simply needs ansible, a deploy key and a host key.
* Production mode uses Amazon RDS for hosting the PostgreSQL backend.

### Farm Ahead Team
* Brett Cropp
* Corwyn Nielsen
* Michael Lawrenson
* Noah Poczciwinski
* Tyler Suchan
