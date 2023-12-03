const db = require("../models");
const Account = db.account;


exports.createUser = async (req, res) => {
  try {
    const { email, password, confirmPassword, isTeacher } = req.body

    const requiredFields = ['email', 'password', 'confirmPassword', 'isTeacher'];

    const missingFields = requiredFields.filter(field => !req.body[field]);
    const regEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

    const isCheckEmail = regEmail.test(email)
    if (missingFields.length > 0) {
      return res.status(404).json({
        code: 404,
        success: false,
        message: `Yêu cầu nhập đủ dữ liệu! Thiếu các trường: ${missingFields.join(', ')}`
      });
    }
    if (!isCheckEmail) {
      return res.status(400).json({
        code: 400,
        success: false,
        message: 'Kiểm tra định dạng Email!'
      })
    }
    else if (password.length < 6) {
      return res.status(400).json({
        code: 400,
        success: false,
        message: 'Mật khẩu không được nhỏ hơn 6 kí tự'
      });
    }
    else if (password !== confirmPassword) {
      return res.status(400).json({
        code: 400,
        success: false,
        message: 'Mật khẩu nhập lại không chính xác!',
      })
    }


    const checkUser = await Account.findOne({
      email: email
    })
    if (checkUser !== null) {
      return res.status(400).json({
        code: 400,
        success: false,
        message: 'Email này đã tồn tại, vui lòng đăng ký bằng Email khác!',
      })
    }

    const createdUser = await Account.create({

      email,
      password,
      isTeacher
    })
    if (createdUser) {
      return res.status(200).json({
        code: 200,
        success: true,
        message: 'Đăng ký thành công!',
        data: createdUser
      })
    }


  } catch (e) {
    console.log('Có lỗi khi createUser', e)
    return res.status(500).json({
      code: 500,
      success: false,
      message: e + ''
    })
  }
};
exports.loginUser = async (req, res) => {
  try {

    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({
        code: 400,
        success: false,
        message: 'Yêu cầu nhập đủ dữ liệu đầu vào!'
      })
    }
    const checkUser = await Account.findOne({
      email: email,
      password: password
    })


    if (checkUser === null) {
     return res.status(404).json({
      code: 404,
      success: false,
      message: 'Sai thông tin đăng nhập vui lòng đăng nhập lại!'
     })
    } else {

      return res.status(200).json({
        code: 200,
        success: true,
        message: 'Đăng nhập thành công!',

      })
    }

  } catch (e) {
    console.log('Có lỗi khi loginUser', e)
    return res.status(500).json({
      code: 500,
      success: false,
      message: e.message
    })
  }
};
exports.getDetailsUser = async (req, res) => {
  try {
    const userId = req.params.id
    if (!userId) {
      return res.status(404).json({
        code: 404,
        success: false,
        message: 'Yêu cầu đầy đủ userId!'
      })
    }
    const user = await Account.findOne({
      _id: userId
    }).select('-password');
    if (user === null) {
      resolve({
        code: 404,
        success: false,
        message: 'Không tìm thấy người dùng!'
      })
    }

    // resolve({
    //   code: 200,
    //   success: true,
    //   message: 'Lấy thông tin người dùng thành công!',
    //   data: user
    // })
    return res.status(200).json({
        code: 200,
      success: true,
      message: 'Lấy thông tin người dùng thành công!',
      data: user
    })
  } catch (e) {
    return res.status(500).json({
      code: 500,
      success: false,
      message: e + ''
    })
  }
};
exports.getAllUser = async (req, res) => {
  try {
    
   const allUser = await Account.find().sort({createdAt: -1, updatedAt: -1}).select('-image -password');
   if(allUser.length == 0){
    return res.status(404).json({
        code: 404,
      success: false,
      message: 'Không có người dùng nào!',
      data: []
    })
   }else{
    return res.status(200).json({
        code: 200,
      success: true,
     
      data: allUser
    })
   }
   

} catch (e) {
    console.log('getAllUser err', e)
    return res.status(500).json({
        code: 500,
        success: false,
        message: e + ''
    })
}

    
};
exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id
    const data = req.body
    // const image = req.file;

    
    if (!userId) {
        return res.status(400).json({
            code: 400,
            success: false,
            message: 'Yêu cầu cần vào đủ (userId)'
        })
    }
    
    const checkUser = await Account.findOne({
      _id: userId
  })
 
  if (checkUser === null) {
     return res.status(404).json({
      code: 404,
      success: false,
      message: 'Không tìm thấy đối tượng để sửa!'
     })
  }

  const updatedUser = await Account.findByIdAndUpdate(userId,{...data} , { new: true },)
  return res.status(200).json({
    code: 200,
    success: true,
    message: 'Cập nhật người dùng thành công!',
    data: updatedUser
  })

} catch (e) {
    console.log('err updateUser ', e)
    return res.status(500).json({
        code: 500,
        success: false,
        message: e.message
    })
}
}
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id
    if (!userId) {
        return res.status(400).json({
            code: 400,
            success: false,
            message: 'Yêu cầu cần vào đủ (userId)'
        })
    }
    const checkUser = await Account.findOne({
      _id: userId
  })
  if (checkUser === null) {
      resolve({
          code: 404,
          success: false,
          message: 'Không tìm thấy đối tượng để xóa!'
      })
  }

  await Account.findByIdAndDelete(userId)
  return res.status(200).json({
    code: 200,
    success: true,
    message: 'Xóa người dùng thành công!'
  })
} catch (e) {
    console.log('co loi khi deleteUser', e)
    return res.status(500).json({
        code: 500,
        success: false,
        message: e.message
    })
}
}
    

// Find all published Accounts

