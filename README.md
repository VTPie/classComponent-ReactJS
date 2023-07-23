**Cây thư mục**
node_modules:
public:
    index.html: file html gốc để react inject code html vào.
src:
    assets: cấu hình global
        audios: lưu các file âm thanh công khai.
        images: lưu các file hình ảnh công khai.
    components: lưu các global component.
    routes: định nghĩa các router.
    services: gọi API.
    stores: lưu redux.
        actions:
        reducers:
    styles: lưu scss global.
        global.scss: scss cho toàn bộ trang web.
    utils: lưu các function dùng chung.
    views: lưu các trang web.
        Example: Trang danh sách công việc.
        HOC: Thay đổi màu sắc chữ trang Home.
        Home: Trang Home.
        Navigation: Thanh điều hướng.
        TODOApp: Trang TODO App.
        User: trang danh sách User.
        App.js:
        App.scss:
        logo.svg: file ảnh logo của React.
    index.js: gọi đến component ./views/App.js và inject code html vào ../public/index.html
    reportWebVitals.js: Kiểm tra hiệu năng trang web online.
.gitignore: ghi các file sẽ được đẩy và không được đẩy lên github.
package-lock.json: Ghi chi tiết các dependencies khi cài đặt các thư viện.
package.json: Khai báo các thư viện.
README.md

**React Lifecycle Methods**
*Mounting*     => Chèn component vào cây DOM
    1. contructor()
    2. render()
    3. componentDidMount() : gọi API lấy dữ liệu
*Updating*      => Update DOM
    render()
    componentDidUpdate(prevProps, prevState) :  so sánh props và state ở hiện tại và trước khi được update.
*Unmounting*        => Chuyển trang hoặc xóa dữ liệu
    componentWillUnmount()

**Download package**
Thêm vào cuối câu lệnh: --legacy-peer-deps
Thêm vào cuối câu lệnh: --force

**Spread trong mảng**
Cú pháp: x1, x2,...A,y1, y2
Chức năng: Lấy ra phần còn lại trong mảng A, sau khi loại bỏ các phần tử x, sau đó thêm vào phần tử y
