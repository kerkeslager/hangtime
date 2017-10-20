import flask
app = flask.Flask(__name__, static_url_path='/static')

@app.route('/')
def index():
    return flask.render_template('index.html')

@app.route('/js/<path:path>')
def send_js(path):
    return flask.send_from_directory('static/js', path)
