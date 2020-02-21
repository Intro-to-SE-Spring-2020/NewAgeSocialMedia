## Stream Twitter clone

This is a simple Twitter clone app built with [Stream](http://getstream.io)'s API. It shows you how you can use [GetStream.io](https://getstream.io/ "GetStream.io") to build a site similar to Twitter.

If you're looking to self-host your feed solution we suggest the open source [Stream-Framework](https://github.com/tschellenbach/Stream-Framework), created by the Stream founders.

### Heroku

The best way to try this application is via Heroku; you can deploy this example (for free) on Heroku
by pressing the Deploy button below.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

If you prefer to run this locally then make sure to signup for GetStream's service and follow this steps:


**Install the requirements**

```
pip install -r requirements.txt
```

**Add your API keys to pytutorial/settings.py**

```python
STREAM_API_KEY = 'my_api_key'
STREAM_API_SECRET = 'my_api_secret'
```

**Run server in debug mode pytutorial/settings.py**
```python
DEBUG = True
```

**Setup your database and the demo data:**

```
python manage.py after_deploy
```

**Collect static files (javascript/css)**
```
python manage.py collectstatic
```

**Start the webserver**
```
python manage.py runserver
```
