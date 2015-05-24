from flask import Flask

_app = Flask(__name__)


@_app.route('/')
def index():
    return _app.send_static_file('index.html')


if __name__ == '__main__':
    _app.run()
