<a name="readme-top"></a>

<!-- ABOUT THE PROJECT -->

## About The Project

<div align="center"> 
<img width="491" alt="homepage" src="https://github.com/p-gatsby/DRJS/assets/106583795/43a45070-2861-4708-a37a-6e5c55e44490">
<img width="492" alt="productpage" src="https://github.com/p-gatsby/DRJS/assets/106583795/4f6f05f4-db00-4e77-924f-49e42584ae97">
</div>

This Django and ReactJS application demonstrates the effectiveness of their combination in creating a mock e-commerce website.

<!-- GETTING STARTED -->

## Getting Started

Welcome to DRJS (django-reactjs-webapp)! This guide provides detailed steps to set up the environment and install this project on your local computer.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- Python3

### Installation

Clone the repository > django-reactjs-webapp

```bash
git clone https://github.com/p-gatsby/django-reactjs-webapp.git
```

Electron app installation ~ > django-reactjs-webapp > client

- Install node dependencies

  ```sh
  npm install
  ```

Djano server installation ~ > django-reactjs-webapp

- Install virtual environment:

  ```sh
  python3 -m venv env
  ```

- Install server dependencies:

  ```sh
  pip install -r requirements.txt
  ```

- Collect static files
  ```sh
  python manage.py collectstatic
  ```

### Running the app

- Run Django ~ > django-reactjs-webapp

  ```sh
  python manage.py runserver
  ```

- Run React App ~ > django-reactjs-webapp > client

  ```sh
  npm start
  ```

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
