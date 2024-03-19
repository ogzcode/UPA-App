# UPA nın ayrıştırılması

Bu Flask Backend uygulaması, [Uluslararası Politika Akademisi](https://politikaakademisi.org/) web sitesinden içerik çekmek için oluşturulmuştur. Sitenin içeriklerini ve blog gönderilerini çekip, ayrıştırmak ve JSON formatına dönüştürmek için kullanılır.


## Kullanılan Teknolojiler
* Flask
* Beautifulsoup4
* request

## Kurulum
1. Proje dizinine gidin:

    ```bash
    cd backend
    ```
2. Sanal Ortam Oluşturun ve Aktifleştirin:

    ```bash
    python -m venv venv
    venv/Scripts/activate
    ```
3. Gerekli Python bağımlılıklarını yükleyin:

    ```bash
    pip install -r requirements.txt
    ```

## Kullanım

Uygulamayı çalıştırmak için:

```bash
flask run --debug
```

Uygulama varsayılan olarak `http://localhost:5000` adresinde çalışacaktır.

## API Rotaları

1. **`/parse-navigation`**:
    - **Açıklama**: Ana sayfada bulunan gezinti menüsünü getirir.

2. **`/parse-authors`**:
    - **Açıklama**: Yazarları getirir.

3. **`/parse-home`**:
    - **Açıklama**: Ana sayfada bulunan son 5 yazı içeriğini getirir.

4. **`/category/<category_name>`**:
    - **Açıklama**: Belirli bir kategori içeriğini getirir.

5. **`/category/<category_name>/page/<page_number>`**:
    - **Açıklama**: Belirli bir kategori içeriğini ve sayfa numarasını getirir.

6. **`/post?link=<post_link>`**:
    - **Açıklama**: Belirli bir gönderiyi getirir. Gönderi bağlantısını `link` parametresi olarak alır.

7. **`/about`**:
    - **Açıklama**: Hakkımızda sayfasını getirir.

8. **`/`**:
    - **Açıklama**: Uygulama çalıştığında ana sayfaya "Hello, World!" metnini döndürür.
