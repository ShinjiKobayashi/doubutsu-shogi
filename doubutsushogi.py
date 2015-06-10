from flask import Flask, request

_app = Flask(__name__)


@_app.route('/')
def index():
    return _app.send_static_file('index.html')


@_app.route('/upload/file', methods=["POST"])
def upload():
    '''

    :return:
    '''
    print(request.files)

if __name__ == '__main__':
    _app.run()
