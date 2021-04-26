# Client-Server Architecture 

# **Client server là gì?**
  - Client server là mô hình mạng máy tính bao gồm 2 thành phần chính là máy khách (client) và máy chủ (server). Trong mô hình này, server là nơi lưu trữ tài nguyên, cài đặt các chương trình dịch vụ và thực hiện các yêu cầu của client. Client đón vai trò gửi yêu cầu đến server. Client gồm máy tính và thiết bị điện tử nói chung. https://media.bkns.vn/uploads/2020/04/mo-hinh-client-server.jpg
  - Mô hình Client server cho phép mạng tập trung các ứng dụng và chức năng tại một hoặc nhiều máu dịch vụ file chuyên dụng. Các máy này trở thành trung tâm của hệ thống. Hệ điều hành của Client server cho phép người dùng chia sẻ đồng thời cùng một tài nguyên, không quan trọng vị trí địa lý.
  - **Mô hình web client-server** là một mô hình nổi tiếng trong mạng máy tính, được áp dụng rất rộng rãi và là mô hình của mọi trang web hiện có. Một mô hình ngược lại là mô hình master-slaver, trong đó máy chủ (đóng vai trò ông chủ) sẽ gửi dữ liệu đến máy con (đóng vai trò nô lệ) bất kể máy con có cần hay không.
  - **Mô hình client/server như sau**: Client/Server là mô hình tổng quát nhất, trên thực tế thì một server có thể được nối tới nhiều server khác nhằm làm việc hiệu quả và nhanh hơn. Khi nhận được 1 yêu cầu từ client, server này có thể gửi tiếp yêu cầu vừa nhận được cho server khác ví dụ như database server vì bản thân nó không thể xử lý yêu cầu này được. Máy server có thể thi hành các nhiệm vụ đơn giản hoặc phức tạp.

# **Ưu nhược điểm của Client server là gì?**
  - **Ưu điểm của Client server là gì?**
      + Client server có khả năng chống quá tải mạng
      + Client server đảm bảo toàn vẹn dữ liệu khi có sự cố xảy ra
      + Dễ dàng mở rộng hệ thống mạng
      + Chỉ cần chung định dạng giao tiếp mà không cần chung nền tảng là có thể hoạt động được
      + Client server cho phép tích hợp các kỹ thuật hiện đại như GIS, mô hình thiết kế hướng đối tượng,…
      + Với mô hình Client server, người dùng có thể truy cập dữ liệu từ xa, thực hiện các thao tác gửi, nhận file hay tìm kiếm thông tin đơn giản.
  - **Nhược điểm của Client server là gì?**
      + Cần bảo trì, bảo dưỡng server thường xuyên.
      + Khả năng bảo mật thông tin mạng là một hạn chế nữa của Client server. Bởi vì, nguyên lý hoạt động của Client server là trao đổi dữ liệu giữa server và client ở 2 khu vực địa lý khác nhau. Trong quá trình trao đổi dữ liệu, khả năng thông tin mạng bị lộ là điều dễ xảy ra.
# **Nguyên lý hoạt động của Client server là gì?**
  - Trong mô hình Client Server, server chấp nhận tất cả các yêu cầu hợp lệ từ mọi nơi khác nhau trên Internet, sau đó trả kết quả về máy tính đã gửi yêu cầu đó 
  - Máy tính được coi là máy khách khi chúng làm nhiệm vụ gửi yêu cầu đến các máy chủ và đợi câu trả lời được gửi về.
  https://codelearn.io/Media/Default/Users/AndyNgo/blog-img/1.png
  - Để máy khách và máy chủ có thể giao tiếp được với nhau thì giữa chúng phải có một chuẩn nhất định, và chuẩn đó được gọi là giao thức. Một số giao thức được sử dụng phổ biến hiện nay như: HTTPS, TCP/IP, FTP,...
  - Nếu máy khách muốn lấy được thông tin từ máy chủ, chúng phải tuân theo một giao thức mà máy chủ đó đưa ra. Nếu yêu cầu đó được chấp nhận thì máy chủ sẽ thu thập thông tin và trả về kết quả cho máy khách yêu cầu. Bởi vì Server - máy chủ luôn luôn trong trạng thái sẵn sàng để nhận request từ client nên chỉ cần client gửi yêu cầu tín hiệu và chấp nhận yêu cầu đó thì server sẽ trả kết quả về phía client trong thời gian ngắn nhất.
  - Client server là giải pháp phần mềm hiệu quả, giúp khắc phục tình trạng quá tải của hệ thống mạng. Bên cạnh đó, mô hình này còn vượt qua sự khác biệt trong cấu trúc vật lý và hệ điều hành của các hệ thống máy tính. Mô hình Client server gồm có 2 phần là client & server.
  - **Client**
      + Client hay chính là máy khách, máy trạm – là nơi gửi yêu cầu đến server. Nó tổ chức giao tiếp với người dùng, server và môi trường bên ngoài tại trạm làm việc. Client tiếp nhận yêu cầu của người dùng sau đó thành lập các query string để gửi cho server. Khi nhận được kết quả từ server, client sẽ tổ chức và trình diễn những kết quả đó.
 - **Server**
      + Server xử lý yêu cầu gửi đến từ client. Sau khi xử lý xong, server sẽ gửi trả lại kết quả, client có thể tiếp tục xử lý các kết quả này để phục vụ người dùng. Server giao tiếp với môi trường bên ngoài và client tại server, tiếp nhận yêu cầu dưới dạng query string (xâu ký tự). Khi phân tích xong các xâu ký tự, server sẽ xử lý dữ liệu và gửi kết quả về cho client.
     
     
# **Restful API**
  - **Web service**
  https://laptrinhjavaweb.com/repository/ckfinder/images/restful-web-service-part-7.png
    - Web service thì có 2 dạng:
      + SOAP
      + REST: Dạng mà chúng ta hay xài nhất đó là REST, nó sử dụng kiểu dữ liệu JSON để tương tác
    - Nhìn vào hình trên bạn sẽ rõ, app và web chắc chắn cách binding data hay truy vấn tới server nó sẽ khác nhau, tuy nhiên để đồng bộ dữ liệu, hệ thống TIKI chẳng hạn họ sẽ dùng cơ chế này để đồng bộ. Khi ta thay đổi data trên app hay web thì cả web và app sẽ đồng bộ dữ liệu như nhau. Như đã nói, cách binding data và truy vấn dữ liệu của app hay web sẽ khác nhau, do đó chúng ta cần 1 kĩ thuật để đồng bộ input hay output khi app hay web truyền data về server và ngược lại. Và kĩ thuật dùng ở đây đó chính là web service và cụ thể chúng ta sử dụng REST API với JSON data.
 - **API** 
    - (Application Programming Interface) là một tập các quy tắc và cơ chế mà theo đó, một ứng dụng hay một thành phần sẽ tương tác với một ứng dụng hay thành phần khác. API có thể trả về dữ liệu mà bạn cần cho ứng dụng của mình ở những kiểu dữ liệu phổ biến như JSON hay XML.
 - **REST** 
    - REST (REpresentational State Transfer) là một dạng chuyển đổi cấu trúc dữ liệu, một kiểu kiến trúc để viết API. Nó sử dụng phương thức HTTP đơn giản để tạo cho giao tiếp giữa các máy. Vì vậy, thay vì sử dụng một URL cho việc xử lý một số thông tin người dùng, REST gửi một yêu cầu HTTP như GET, POST, DELETE, vv đến một URL để xử lý dữ liệu.
 - **RESTful API**
    - RESTful API là một tiêu chuẩn dùng trong việc thiết kế API cho các ứng dụng web (thiết kế Web services) để tiện cho việc quản lý các resource. Nó chú trọng vào tài nguyên hệ thống (tệp văn bản, ảnh, âm thanh, video, hoặc dữ liệu động…), bao gồm các trạng thái tài nguyên được định dạng và được truyền tải qua HTTP.
https://images.viblo.asia/6ee4b71e-e2db-46b1-b7f1-da37ce13b861.png
    - RESTful API là một tiêu chuẩn dùng trong việc thiết kế các API cho các ứng dụng web để quản lý các resource. RESTful là một trong những kiểu thiết kế API được sử dụng phổ biến ngày nay để cho các ứng dụng (web, mobile…) khác nhau giao tiếp với nhau.
    - Chức năng quan trọng nhất của REST là quy định cách sử dụng các HTTP method (như GET, POST, PUT, DELETE…) và cách định dạng các URL cho ứng dụng web để quản các resource. RESTful không quy định logic code ứng dụng và không giới hạn bởi ngôn ngữ lập trình ứng dụng, bất kỳ ngôn ngữ hoặc framework nào cũng có thể sử dụng để thiết kế một RESTful API.  
 - **RESTful API hoạt động như thế nào?**
  https://images.viblo.asia/c502a773-8ac5-4f33-bbf8-fa56916b70dc.png
   - REST hoạt động chủ yếu dựa vào giao thức HTTP. Các hoạt động cơ bản nêu trên sẽ sử dụng những phương thức HTTP riêng.
      + GET (SELECT): Trả về một Resource hoặc một danh sách Resource.
      + POST (CREATE): Tạo mới một Resource.
      + PUT (UPDATE): Cập nhật thông tin cho Resource.
      + DELETE (DELETE): Xoá một Resource.
   - Những phương thức hay hoạt động này thường được gọi là CRUD tương ứng với Create, Read, Update, Delete – Tạo, Đọc, Sửa, Xóa.
   - Hiện tại đa số lập trình viên viết RESTful API giờ đây đều chọn JSON là format chính thức nhưng cũng có nhiều người chọn XML làm format, nói chung dùng thế nào cũng được miễn tiện và nhanh.
 - **Authentication request và cấu trúc dữ liệu trả về**
    - RESTful API không sử dụng session và cookie, nó sử dụng một access_token với mỗi request. Bạn có thể tìm hiểu JWT (JsonWebToken) để biết rõ hơn.
    - `{`
        `"status_code": 200,`
        `"data": [`
            `{`
                `"name": "ManhLD",`
                `"email": "manhld@example.com",`
                `"ny": "not found"`
            `},`
            `{`
                `"name": "Ahri",`
                `"email": "ahriKDA@lmht.com",`
                `"ny": "Ezreal"`
            `}`
        `],`
        `error_messages: ""`
    `}`

 - **Status code**
    - 200 OK – Trả về thành công cho những phương thức GET, PUT, PATCH hoặc DELETE.
    - 201 Created – Trả về khi một Resouce vừa được tạo thành công.
    - 204 No Content – Trả về khi Resource xoá thành công.
    - 304 Not Modified – Client có thể sử dụng dữ liệu cache.
    - 400 Bad Request – Request không hợp lệ
    - 401 Unauthorized – Request cần có auth.
    - 403 Forbidden – bị từ chối không cho phép.
    - 404 Not Found – Không tìm thấy resource từ URI
    - 405 Method Not Allowed – Phương thức không cho phép với user hiện tại.
    - 410 Gone – Resource không còn tồn tại, Version cũ đã không còn hỗ trợ.
    - 415 Unsupported Media Type – Không hỗ trợ kiểu Resource này.
    - 422 Unprocessable Entity – Dữ liệu không được xác thực
    - 429 Too Many Requests – Request bị từ chối do bị giới hạn
 - **Quản lí version của api**
    - Khi thiết api cho app ios hay client side, chúng ta nên đặt version cho các api. Ví dụ như endpoint sau: api/v1/users
    - Điều này sẽ giúp hệ thống sau khi nâng cấp lên version mới vẫn hộ trợ các api của version cũ, cũng như giúp việc bảo trì, sửa chữa dễ dàng hơn.
 - **Ưu điểm của RESTFUL API là gì ?**
    https://images.viblo.asia/ab5539d0-1b5b-456f-a204-290cf7f96705.png
    - Một số ưu điểm chính khi sử dụng RESTFUL API là:
      + Giúp cho ứng dụng rõ ràng hơn
      + REST URL đại diện cho resource chứ không phải hành động
      + Dữ liệu được trả về với nhiều định dạng khác nhau như: xml, html, json….
      + Code đơn giản và ngắn gọn
      + REST chú trọng vào tài nguyên của hệ thống
 - **Link Tham Khảo:**
    + https://phambinh.net/bai-viet/restful-api-la-gi-cung-tim-hieu-ve-restful-api/#31_API_la_gi
    + https://viblo.asia/p/restful-api-la-gi-1Je5EDJ4lnL
    + https://topdev.vn/blog/restful-api-la-gi/
    + https://www.semtek.com.vn/restful-api-la-gi/  


````
select * from notification_tbl where
/*%if param.type != null*/
	select
		notification_tbl.id,
		push.type,
		push.url,
		push.title,
		push.os,
		push.url_schema
	from notification_tbl as a
	inner join push_tbl as b on b.id = a.id
	where a.is_push = 1 and b.type = /*%param.type*/1
	/*%if param.os != null*/
		and a.os = /param.os/1
	/*%end*/
	/*%if param.status != null*/
		and a.status = /param.status/3
	/*%end*/
	/*%if param.env != null*/
		and a.env = /param.env/2
	/*%end*/
/*%else*/
	select
		notification_tbl.id,
		notice.type,
		notice.url,
		notice.title
	from notification_tbl as a
	inner join notice_tbl as c on c.id = a.id
	where a.is_notice = 1
	/*%if param.os != null*/
		and a.os = /param.os/1
	/*%end*/
	/*%if param.status != null*/
		and a.status = /param.status/3
	/*%end*/
	/*%if param.env != null*/
		and a.env = /param.env/2
	/*%end*/
/*%end*/
```
Talend, Apache spark, ETL(Extract Transform Load)
https://viblo.asia/p/tong-quan-ve-apache-spark-cho-he-thong-big-data-RQqKLxR6K7z
https://viblo.asia/p/tim-hieu-ve-apache-spark-ByEZkQQW5Q0
https://cloudfun.vn/threads/phan-biet-apache-hadoop-va-apache-spark.94/
https://lehuutoan.medium.com/etl-l%C3%A0-g%C3%AC-7a94d58f722f
https://dzone.com/articles/open-source-etl-tools-comparison
```
