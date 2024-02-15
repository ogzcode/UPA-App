from flask import jsonify
from app import app
from app.parser import RequestManager, parse_navigation, authors_parser, home_page_parser, category_parser

@app.route('/parse-navigation')
def get_navigation():
    request_manager = RequestManager()
    response = request_manager.get_soup('')
    navigation = parse_navigation(response)

    return jsonify(navigation)

@app.route('/parse-authors')
def get_authors():
    request_manager = RequestManager()
    response = request_manager.get_soup('')
    authors = authors_parser(response)

    return jsonify(authors)


@app.route("/parse-home")
def get_home_page():
    request_manager = RequestManager()
    response = request_manager.get_soup('')

    home = home_page_parser(response)

    return jsonify(home)

@app.route("/category/<category_name>")
def get_category(category_name):
    request_manager = RequestManager()
    response = request_manager.get_soup("category/" + category_name)

    category = category_parser(response)
    
    return jsonify(category)

@app.route("/")
def index():
    return "Hello, World!"
