import requests
from bs4 import BeautifulSoup

BASE_URL = 'https://politikaakademisi.org/'

class RequestManager:
    def get_html(self, url):
        response = requests.get(BASE_URL + url)
        return response.content

    def get_soup(self, url):
        html = self.get_html(url)
        soup = BeautifulSoup(html, 'html.parser')
        return soup