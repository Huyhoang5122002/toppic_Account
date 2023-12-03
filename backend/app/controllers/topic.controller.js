const db = require("../models");
const Topic = db.topic;


exports.createTopic = async (req, res) => {
  try {
    const { name ,description} = req.body

    const requiredFields = ['name'];

    const missingFields = requiredFields.filter(field => !req.body[field]);

    if (missingFields.length > 0) {
      return res.status(404).json({
        code: 404,
        success: false,
        message: `Yêu cầu nhập đủ dữ liệu! Thiếu các trường: ${missingFields.join(', ')}`
      });
    }




    const checkTopic = await Topic.findOne({
      name: name
    })
    if (checkTopic !== null) {
      return res.status(400).json({
        code: 400,
        success: false,
        message: 'tên đề tài này đã tồn tại, vui lòng đăng ký bằng tên khác!',
      })
    }

    const createdTopic = await Topic.create({

      name,
      description

    })
    if (createdTopic) {
      return res.status(200).json({
        code: 200,
        success: true,
        message: 'Thêm đề tài  thành công!',
        data: createdTopic
      })
    }


  } catch (e) {
    console.log('Có lỗi khi createTopic', e)
    return res.status(500).json({
      code: 500,
      success: false,
      message: e + ''
    })
  }
};

exports.getDetailsTopic = async (req, res) => {
  try {
    const userId = req.params.id
    if (!userId) {
      return res.status(404).json({
        code: 404,
        success: false,
        message: 'Yêu cầu đầy đủ userId!'
      })
    }
    const user = await Topic.findOne({
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
exports.getAllTopic = async (req, res) => {
  try {

    const allTopic = await Topic.find().sort({ createdAt: -1, updatedAt: -1 });
    if (allTopic.length == 0) {
      return res.status(404).json({
        code: 404,
        success: false,
        message: 'Không có đề tài nào!',
        data: []
      })
    } else {
      return res.status(200).json({
        code: 200,
        success: true,

        data: allTopic
      })
    }


  } catch (e) {
    console.log('getAllTopic err', e)
    return res.status(500).json({
      code: 500,
      success: false,
      message: e + ''
    })
  }


};
exports.updateTopic = async (req, res) => {
  try {
    const topicId = req.params.id
    const data = req.body
    // const image = req.file;


    if (!topicId) {
      return res.status(400).json({
        code: 400,
        success: false,
        message: 'Yêu cầu cần vào đủ (topicId)'
      })
    }

    const checkTopic = await Topic.findOne({
      _id: topicId
    })

    if (checkTopic === null) {
      resolve({
        code: 404,
        success: false,
        message: 'Không tìm thấy đối tượng để sửa!'
      })
    }

    const updatedTopic = await Topic.findByIdAndUpdate(topicId, { ...data }, { new: true },)
    return res.status(200).json({
      code: 200,
      success: true,
      message: 'Cập nhật đề tài thành công!',
      data: updatedTopic
    })

  } catch (e) {
    console.log('err updateTopic ', e)
    return res.status(500).json({
      code: 500,
      success: false,
      message: e.message
    })
  }
}
exports.deleteTopic = async (req, res) => {
  try {
    const userId = req.params.id
    if (!userId) {
      return res.status(400).json({
        code: 400,
        success: false,
        message: 'Yêu cầu cần vào đủ (idTopic)'
      })
    }
    const checkTopic = await Topic.findOne({
      _id: userId
    })
    if (checkTopic === null) {
      resolve({
        code: 404,
        success: false,
        message: 'Không tìm thấy đối tượng để xóa!'
      })
    }

    await Topic.findByIdAndDelete(userId)
    return res.status(200).json({
      code: 200,
      success: true,
      message: 'Xóa đề tài thành công!'
    })
  } catch (e) {
    console.log('co loi khi deleteTopic', e)
    return res.status(500).json({
      code: 500,
      success: false,
      message: e.message
    })
  }
}


// Find all published Topics

