var users = [
	{ 
  	name: 'Thinh', 
    phone: '070123123'
  },
  {
  	name: 'Hung',
    phone: '080456456'
  },
  {
  	name: 'Hoang',
    phone: '090123123'
  },
  {
    name: "Duy",
    phone: "123456789"
  }, 
  {
    name: "Khang",
    phone: "0101"
  }
];
var userList = document.getElementById('userList');
var searchInput = document.getElementById('searchInput');

function render(users) {
	var content = users.map(function(user) {
  	return '<li>' + user.name + ' - ' + user.phone + '</li>';
  });
  userList.innerHTML = content.join('');
}

render(users);

searchInput.addEventListener('keyup', function(event) {
	// sự kiện 'change' chỉ xảy ra khi input bị mất focus
  // sử dụng sự kiện keyup để tìm kiếm người dùng có số điện thoại khớp với nội dung tìm kiếm.
  // Gợi ý: 
  // - biến value dưới đây là giá trị của input tại thời điểm gõ phím
  // - sử dụng array.filter và string.indexOf để lọc users array, trả về những phần tử có số điện thoại chứa 
  // string lưu trong biến `value`
  // Sử dụng Chrome Developer Tools để xem giá trị hiển thị ra sau mỗi lần gõ
	var value = searchInput.value;
  console.log(value);
  
  var search = users.filter(user => user.phone.indexOf(value) == 0);
  if (value.length == 0) {
    render(users);
  }
  else {
    render(search);
  }
  if (event.keyCode == 13) {
    searchInput.value = "";
    render(users);
  }

});
