from flask import jsonify, request
from app import app
from app.parser import RequestManager, parse_navigation, authors_parser, home_page_parser, category_parser, parse_pagination, parse_post


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
@app.route("/category/<category_name>/page/<int:page_number>")
def get_category(category_name, page_number=None):
    if page_number is None:
        page_number = ""
    else:
        page_number = "/page/" + str(page_number)

    request_manager = RequestManager()
    response = request_manager.get_soup("category/" + category_name + page_number)
    pagination = parse_pagination(response)

    category = category_parser(response)

    return jsonify(pagination=pagination, category=category)

@app.route("/post")
def get_post():
    link = request.args.get("link")

    request_manager = RequestManager()
    response = request_manager.get_soup(link)

    post = parse_post(response)

    return jsonify(post)


@app.route("/")
def index():
    return "Hello, World!"
