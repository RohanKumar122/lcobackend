const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const Data = require('../models/models');
const axios = require('axios');
const crypto = require('crypto');
const multer = require('multer');
const cors = require('cors');
const allowedOrigins = ['https://indianintelligencetest.com', 'https://www.indianintelligencetest.com', 'http://localhost:3000'];
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Razorpay = require("razorpay");
const path = require('path');
const nodemailer = require("nodemailer");
const logRequestBody = require('../logger');
const fsExtra = require('fs-extra');



router.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname)
  }
});
var upload = multer({ storage: storage });


router.post('/login', async (req, res) => {
  try {
    const { userId, password } = req.body;

    console.log('Password Verification Request Received for User ID:', userId);

    const user = await Data.findById(userId);

    if (!user) {
      console.log('User not found.');
      return res.status(404).json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      console.log('Incorrect password.');
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '15m',
    });

    console.log('Password verified successfully. Sending user ID and token.');
    res.json({ userId: user._id, token: token, message: "Login Successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
router.get('/data/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await Data.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User data retrieved successfully', user });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

function generateOTP() {

  const otp = crypto.randomInt(100000, 1000000);
  return otp.toString();
}



router.post('/send_sms', async (req, res) => {
  const { contact_no } = req.body
  console.log(contact_no)

  const otp = generateOTP();

  const message = `Hi, OTP for Mobile number verification on JAGRAN is: ${otp}`;

  try {
    const data = {
      Authorization: { User: '101213', Key: '010xy3UC50QptjMeKkBB' },
      Data: {
        Sender: 'IIT-JAGRAN',
        Message: message,
        Flash: 0,
        ReferenceId: '1564879',
        EntityId: '1701158081591897422',
        TemplateId: '1707161519919824202',
        Mobile: [contact_no]
      }
    };
    console.log(JSON.stringify(data))
    const response = await axios.post('http://nimbusit.info/api/pushsmsjson.php', JSON.stringify(data));


    res.json({ otp: otp, status: response.data.Status });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});


router.post('/send_rem', async (req, res) => {
  const { contact_no,message } = req.body
  console.log(contact_no)


  try {
    const data = {
      Authorization: { User: '101213', Key: '010xy3UC50QptjMeKkBB' },
      Data: {
        Sender: 'IIT-JAGRAN',
        Message: message,
        Flash: 0,
        ReferenceId: '1564879',
        EntityId: '1701158081591897422',
        TemplateId: '1707161519919824202',
        Mobile: [contact_no]
      }
    };
    console.log(JSON.stringify(data))
    const response = await axios.post('http://nimbusit.info/api/pushsmsjson.php', JSON.stringify(data));


    res.json({ message:message, status: response.data.Status });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});


router.post('/reminder', async (req, res) => {
  const { contact_no,password } = req.body
  console.log(contact_no)

  // const otp = generateOTP();

  const message = `Dear Student your account has been created successfully.Please login to your account to complete registration and make payment.Mobile number:${contact_no},Password:${password}`;
  try {
    const data = {
      Authorization: { User: '101213', Key: '010xy3UC50QptjMeKkBB' },
      Data: {
        Sender: 'IIT-JAGRAN',
        Message: message,
        Flash: 0,
        ReferenceId: '1564879',
        EntityId: '1701158081591897422',
        TemplateId: '1707161519919824202',
        Mobile: [contact_no]
      }
    };
    console.log(JSON.stringify(data))
    const response = await axios.post('http://nimbusit.info/api/pushsmsjson.php', JSON.stringify(data));


    res.json({ otp: otp, status: response.data.Status });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});



const generateOnlineUniqueId = async () => {
  try {
    const lastOnlineUser = await Data.findOne({ exam: 'online' }).sort({ uniqueID: -1 }).exec();
    let lastUniqueId = lastOnlineUser ? parseInt(lastOnlineUser.uniqueID) : 230000;
    const newUniqueId = lastUniqueId + 1;

    return newUniqueId.toString().padStart(6, '0');
  } catch (error) {
    console.error(error);

    throw new Error('Failed to generate unique ID');
  }
};


const generateOfflineUniqueId = async () => {
  try {
    const lastOfflineUser = await Data.findOne({ exam: 'offline' }).sort({ uniqueID: -1 }).exec();
    let lastUniqueId = lastOfflineUser ? parseInt(lastOfflineUser.uniqueID.slice(6)) : 0;
    const newUniqueId = lastUniqueId + 1;
    return `IIT23-${String(newUniqueId).padStart(4, '0')}`;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to generate unique ID');
  }
};


router.put('/register/:id', upload.single('profilePicture'),async (req, res) => {
  const userId = req.params.id;
  try {
    const { examType, studentClass, subjectStream, fathersName,
      schoolName, schoolAddress, residentialAddress, state, city, town,
      parentsMobileNumber, dateOfBirth, email, preferredLanguage, } = req.body;

    let registration = await Data.findOne({ _id: userId });

    if (!registration) {
      return res.status(400).json({ message: 'Invalid User' });
    }

    registration.exam = examType;
    registration.studentclass = studentClass;
    registration.subjectStream = subjectStream;
    registration.fatherName = fathersName;
    registration.schoolName = schoolName;
    registration.schoolAddress = schoolAddress;
    registration.residentialAddress = residentialAddress;
    registration.state = state;
    registration.city = city;
    registration.town = town;
    registration.parentsMobileNumber = parentsMobileNumber;
    registration.dateOfBirth = dateOfBirth;
    registration.email = email;
    registration.preferredLanguage = preferredLanguage;
    registration.profilePicture = req.file ? req.file.filename : null

    let newUniqueId;
    if (registration.exam === 'online') {
      newUniqueId = await generateOnlineUniqueId();
    } else if (registration.exam === 'offline') {
      console.log(generateOfflineUniqueId());
      newUniqueId = await generateOfflineUniqueId();
    }

    registration.uniqueID = newUniqueId;
    console.log(newUniqueId)

    await registration.save();

    res.json({ message: 'Registration updated successfully!', registration });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



router.get('/user/:Contact_no', async (req, res) => {
  try {
    const Contact_No = req.params.Contact_no;
    const user = await Data.findOne({ Contact_No });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post("/orders", async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = {
      amount: 15000,
      currency: "INR",
      receipt: "receipt_order_74394",
    };

    const order = await instance.orders.create(options);

    if (!order) return res.status(500).send("Some error occured");

    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/success', async (req, res) => {
  try {
    const { userId, orderCreationId, razorpayPaymentId, razorpayOrderId, razorpaySignature, amount } = req.body;

    const text = `${orderCreationId}|${razorpayPaymentId}`;

    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_SECRET)
      .update(text)
      .digest('hex');

    if (expectedSignature !== razorpaySignature) {
      return res.status(400).json({ message: 'Transaction not legit!' });
    }

    let user = await Data.findById(userId);
    console.log(user);
    console.log(razorpayOrderId, razorpayPaymentId, amount);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.orderid = razorpayOrderId;
    user.paymentId = razorpayPaymentId;
    user.amount = amount;

    await user.save();

    res.json({
      msg: 'success',
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});
router.post('/password/:id', async (req, res) => {
  const userid = req.params.id
  try {
    const { Contact_no, password, current_password } = req.body;

    const existingUser = await Data.findOne({ _id: userid });

    if (existingUser) {
      const isPasswordValid = await bcrypt.compare(current_password, existingUser.password);

      if (isPasswordValid) {
        const hashedPassword = await bcrypt.hash(password, 10);
        existingUser.password = hashedPassword;
        await existingUser.save();
        return res.json({ message: 'Password updated successfully!' });
      } else {
        return res.status(403).json({ message: 'Invalid current password!' });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
router.post('/signin', async (req, res) => {
  try {
    const { Contact_No, password, name, remaining_attempt } = req.body;
    console.log(req.body);

    
    logRequestBody(req.body);

    if (!Contact_No || !password || !name) {
      return res.status(400).json({ error: 'Please provide Contact_No, password, and name' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Data({
      Contact_No,
      password: hashedPassword,
      name,
      remaining_attempt
    });

    await newUser.save();

    return res.json({ message: 'User created successfully!', id: newUser.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.post('/num_check', async (req, res) => {
  try {
    const { Contact_No } = req.body;

    console.log('Login Request Received for Contact Number:', Contact_No);

    const users = await Data.find({ Contact_No });
    console.log('Fetched Users:', users);

    if (!users || users.length === 0) {
      console.log('User not found.');
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('Users found for the provided Contact Number.');
    res.json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
router.get('/image/:userId', async (req, res) => {
  try {
    const user = await Data.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if(user.profilePicture){
    res.sendFile(path.join(__dirname, '..', 'uploads', user.profilePicture));
    }
    else{
      res.sendFile(path.join(__dirname, '..', 'uploads', 'sampledp.jpeg'));
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dj.indianintelligencetest@gmail.com',
    pass: process.env.Pass,
  }
});
router.post('/send_email', (req, res) => {
  const { to, subject, html } = req.body;

  const mailOptions = {
    from: 'support.iit@indianintelligencetest.com',
    to: to,
    subject: subject,
    html: html
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

router.get('/process-users', async (req, res) => {
  try {
    const usersWithPayment = await Data.find({ paymentId: { $exists: true } });

    // Process the users data
    await Promise.all(usersWithPayment.map(async (user) => {
      // Check if the source image file exists
      const sourcePath = `uploads/${user.profilePicture}`;
      if (await fsExtra.pathExists(sourcePath)) {
        // Copy profile pictures from uploads folder to a new folder
        const destinationPath = `newFolder/${user.profilePicture}`;
        await fsExtra.copy(sourcePath, destinationPath);
      } else {
        console.log(`Image not found for user: ${user.name} (${user._id})`);
      }
    }));

    // Send the result back
    res.json({ success: true, message: 'Users with payment processed successfully', users: usersWithPayment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});


router.post('/section1data/:id', async (req, res) => {
  try {
      const studentId = req.params.id;

      const examAnswers = req.body;

      const user = await Data.findById(studentId);

      if (!user) {
          return res.status(404).json({ success: false, error: 'User not found' });
      }

      user.mianswers = examAnswers;

      const savedData = await user.save();

      res.status(200).json({ success: true, data: savedData });
  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});


router.post('/decrementAttempts/:id', async (req, res) => {
  try {
      const studentId = req.params.id;

      const user = await Data.findById(studentId);

      if (!user) {
          return res.status(404).json({ success: false, error: 'User not found' });
      }

      user.remaining_attempt = Math.max(0, user.remaining_attempt - 1);

      const savedData = await user.save();

      res.status(200).json({ success: true, data: savedData });
  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});


router.post('/section2data/:id', async (req, res) => {
  try {
      const studentId = req.params.id;

      const examAnswers = req.body;

      const user = await Data.findById(studentId);

      if (!user) {
          return res.status(404).json({ success: false, error: 'User not found' });
      }

      user.examAnswers = examAnswers;

      const savedData = await user.save();

      res.status(200).json({ success: true, data: savedData });
  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});


module.exports = router;
