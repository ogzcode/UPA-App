def parse_heading(response):
    heading = response.find("h1").text
    author = response.find(class_="heading-author").text
    date = response.find_all(class_="heading-date")[0].text
    reading_count = response.find_all(class_="heading-date")[1].text

    header_data = {
        "heading": heading,
        "author": author,
        "date": date,
        "reading_count": reading_count
    }

    return header_data