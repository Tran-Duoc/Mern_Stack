const data = [
   {
      name: "Căn hộ cao cấp 4 người ở gần Hồ Hoàng Kiếm ",
      price: "500000000",
      where: "Hà nội",
      image: [
         "https://hanoirealestate.com.vn/images/products/indochina-style-cozy-1-bedroom-apartment-in-hoan-kiem-for-rent_202211111159384.jpg",
         "https://hanoirealestate.com.vn/images/products/indochina-style-cozy-1-bedroom-apartment-in-hoan-kiem-for-rent_20221111120185.jpg",
      ],
      description:
         "nhà ở thoáng mát tiện nghi với 2 phòng, 1 nhà vệ sinh chung,  nhà bếp rộng rãi thoáng mát thích hợp cho nhà có 4 thành viên",
      rating: "4",
   },
   {
      "name": "Nhà phố 3 mặt tiền Quận 1",
      "price": 2000000000,
      "where": "Hồ Chí Minh",
      "image": [
         "https://xaydungkhanhhoa.com/wp-content/uploads/2021/10/nha-dep-3-tang-2-mat-tien-hien-dai_cleanup.jpg",
         "https://xaydungkhanhhoa.com/wp-content/uploads/2021/10/mau-nha-3-tang-2-mat-tien-hien-dai-2.jpg",
      ],
      "description":
         "Vị thế có 3 mặt tiền, gần trường học, bệnh viện, siêu thi giao thông thuận tiện cho cuộc sống sinh hoạt  hằng ngày",
      "rating": 5,
   },
   {
      "name": "Biệt thự 2 tầng, nằm trong hẻm Quận 5",
      "price": 200000000,
      "where": "Hồ Chí Minh",
      "image": [
         "https://sbshouse.vn/wp-content/uploads/2021/01/nha-2-tang-trong-hem-dep-2.jpg",
         "https://sbshouse.vn/wp-content/uploads/2021/01/nha-2-tang-trong-hem-dep-1-scaled.jpg"
      ],
      "description":
         "Nhà nằm trong hẻm, rộng rải, thoáng mát, thích hợp để sống với gia đình có 3 thế hệ, đặc biệt vô cùng yên tĩnh",
      "rating": 2
   },
   {
      "name": "Nhà ở tái định cư khu dân cư Tân Phú",
      "price": 200000000,
      "where": "Bình Dương",
      "image": [
         "https://www.invert.vn/media/uploads/uploads/16175104-8-the-light-city.jpg",
         "https://www.invert.vn/media/uploads/uploads/16175141-2-the-light-city.jpg"
      ],
      "description":
         "Khu nhà ở tái định cư phục vụ cho người dân có nhu cầu mua một ngôi nhà giá tốt ở  lâu dài, hợp cho gia đình nhỏ",
      "rating": 3
   },
   {
      "name": "Nhà cấp 4 120 mét vuông",
      "price": 400000000,
      "where": "Cần Thơ",
      "image": [
         "https://i.ytimg.com/vi/lQvmWeCXtk4/maxresdefault.jpg",
         "https://thietkethicongnhadep.net/wp-content/uploads/2014/10/mat-bang-bo-tri-noi-that-nha-cap-4-8x12m.jpg"
      ],
      "description":
         "Nhà cấp 4 hiện đại với 2 phòng ngủ, nhà bếp rỗng rãi, phía trước sân có trồng nhiều cây cảnh, rất thoáng mát.",
      "rating": 4
   },
   {
      "name": "Villa gần biển diện tích 1000 mét vuông",
      "price": 4000000000,
      "where": "Cần Thơ",
      "image": [
         "https://disantrangan.vn/wp-content/uploads/2021/08/villa-mui-ne-5-700x525.jpg",
         "https://disantrangan.vn/wp-content/uploads/2021/08/villa-mui-ne-6-700x393.jpg"
      ],
      "description":
         "Thiết kế cao cấp, sang trọng thêm có view đẹp làm cho ai cũng phải say mê khi lần đầu đến xem nhà",
      "rating": 5
   },
   {
      "name": "Nhà cấp 4 diện tích 100 mét vuông",
      "price": 300000000,
      "where": "Vĩnh Long",
      "image": [
         "https://cdn.diemnhangroup.com/noithatdiemnhan/2021/08/nhung-mau-nha-cap-4-mai-thai-5x20-m-dep-chi-phi-hop-ly-1.jpg",
         "https://cdn.diemnhangroup.com/noithatdiemnhan/2021/08/nhung-mau-nha-cap-4-mai-thai-5x20-m-dep-chi-phi-hop-ly-2.jpg"
      ],
      "description":
         "Nhà cấp 4 đơn giản 1 phòng ngủ, trước sân rộng rộng, trồng nhiều cây cảnh thích hợp cho người nghĩ hưu không thích cuộc sống nơi thành phố.",
      "rating": 4
   },
   {
      "name": "Biệt thự Hoa Hồng",
      "price": 4000000000,
      "where": "Hồ Chí Minh",
      "image": [
         "https://angcovat.vn/imagesdata/BT5130123/2-mau-nha-3-tang-5x12m-mai-thai-hien-dai.jpg",
         "https://angcovat.vn/imagesdata/BT5130123/3-mau-nha-3-tang-5x12m-dep-hien-dai.jpg"
      ],
      "description":
         "Với Diện tích 300 mét vuông. Biệt thự được thiết kế với phong cách Châu Âu, nội thất được bố trí vô cùng thông minh hứa hẹn làm hài lòng các vị khách hàng khi lần đầu đến xem nhà",
      "rating": 5
   },
   {
      "name": "Biệt thự nằm xa ở ngoại ô thành phố",
      "price": 1500000000,
      "where": "Hồ Chí Minh",
      "image": [
         "https://vnn-imgs-f.vgcloud.vn/2021/11/03/09/top-4-mau-biet-thu-nha-vuon-gay-bao-duoc-nhieu-gia-chu-me-man-1.jpg",
         "https://vnn-imgs-f.vgcloud.vn/2021/11/03/09/top-4-mau-biet-thu-nha-vuon-gay-bao-duoc-nhieu-gia-chu-me-man-3.jpg"
      ],
      "description":
         "Nhà xa trung tâm thành phố. Thích hợp cho ai thích yên tĩnh ko bị làm phiền",
      "rating": 2
   },
   {
      "name": "Nhà cấp 4 mái thái",
      "price": 500000000,
      "where": "Cần Thơ",
      "image": [
         "https://cdn.eva.vn/upload/3-2021/images/2021-07-08/1625711215-553af5dab5cff23c5c257e8d602d78c5.jpg",
         "https://cdn.eva.vn/upload/3-2021/images/2021-07-08/1625711215-df9ea2cd9214cd8fa3a14094b186767c.jpg"
      ],
      "description":
         "Nhà thiết kế theo kiểu mái thái, rất theo xu hướng hiện nay. nhà có 2 phòng ngủ, phòng khách và nhà bếp rộng rãi. đủ diện tích cho việc tiệc tùng chiêu đãi khách",
      "rating": 4
   },
   {
      "name": "Nhà cấp 4 ở Cù Lao",
      "price": 500000000,
      "where": "Sóc Trăng",
      "image": [
         "https://xaydungquocbao.com/wp-content/uploads/2019/08/thiet-ke-biet-thu-nha-vuon-cu-lao-pho-bien-hoa-dong-nai.jpg",
         "https://xaydungquocbao.com/wp-content/uploads/2019/08/ho-boi-bo-tri-truoc-nha-vua-mang-tinh-phong-thuy-vua-tao-cam-giac-mat-me.jpg"
      ],
      "description":
         "Nhà nằm ở Cù Lao nên khí hậu mát mẻ, ôn hòa, không ồn ào. rất thích hợp nghĩ dưỡng. hoặc sinh sống lâu dài",
      "rating": 3
   },
   {
      "name": "Biệt thự 3 tầng 200 mét vuông",
      "price": 4000000000,
      "where": "Hồ Chí Minh",
      "image": [
         "https://vtkong.net/wp-content/uploads/2021/12/Thiet-ke-biet-thu-3-tang-2-mat-tien-2.jpg",
         "https://vtkong.net/wp-content/uploads/2021/12/mau-biet-thu-3-tang-mai-bang-12-16m-8-600x480-1.jpg"
      ],
      "description":
         "Biệt thự sang trong, mỗi phòng ngủ có nhà vệ sinh riêng, nội thất hiện đại, cao cấp, tối ưu không gian sống.",
      "rating": 3
   },
];
