const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const User = require('./models/user');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Sincronizar con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Ruta para crear usuarios
app.post('/users', async (req, res) => {
  try {
    const { tipoUsuario, primerNombre, segundoNombre, primerApellido, segundoApellido, direccion, telefono, email, estado, contraseña } = req.body;
    const hashedPassword = bcrypt.hashSync(contraseña, 10);
    const user = await User.create({ tipoUsuario, primerNombre, segundoNombre, primerApellido, segundoApellido, direccion, telefono, email, estado, contraseña: hashedPassword });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para traer todos los usuarios
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para actualizar un usuario
app.put('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { tipoUsuario, primerNombre, segundoNombre, primerApellido, segundoApellido, direccion, telefono, email, estado, contraseña } = req.body;

    const user = await User.findByPk(id);
    if (user) {
      const hashedPassword = bcrypt.hashSync(contraseña, 10);
      await user.update({ tipoUsuario, primerNombre, segundoNombre, primerApellido, segundoApellido, direccion, telefono, email, estado, contraseña: hashedPassword });
      res.json({ message: 'Usuario actualizado' });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para autenticación
app.post('/login', async (req, res) => {
  try {
    const { email, contraseña } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user && bcrypt.compareSync(contraseña, user.contraseña)) {
      const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });
      res.json({ token, user });
    } else {
      res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para solicitar recuperación de contraseña
app.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Configuración de nodemailer usando Gmail con contraseña de aplicación
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jkastiblanco@gmail.com', // Reemplaza con tu correo de Gmail
        pass: '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'  // Reemplaza con la contraseña de aplicación generada
      }
    });

    const mailOptions = {
      from: 'jkastiblanco@gmail.com', // Reemplaza con tu correo de Gmail
      to: email,
      subject: 'Restablecimiento de contraseña',
      text:`Haga clic en el siguiente enlace para restablecer su contraseña: http://localhost:3000/reset-password/${user.id}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error al enviar el correo:', error);
        return res.status(500).json({ error: error.message });
      } else {
        console.log('Correo enviado:', info.response);
        res.json({ message: 'Se ha enviado un correo electrónico con instrucciones para restablecer la contraseña' });
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
/* const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const User = require('./models/user');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Sincronizar con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Ruta para crear usuarios
app.post('/users', async (req, res) => {
  try {
    const { tipoUsuario, primerNombre, segundoNombre, primerApellido, segundoApellido, direccion, telefono, email, estado, contraseña } = req.body;
    const hashedPassword = bcrypt.hashSync(contraseña, 10);
    const user = await User.create({ tipoUsuario, primerNombre, segundoNombre, primerApellido, segundoApellido, direccion, telefono, email, estado, contraseña: hashedPassword });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para traer todos los usuarios
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para actualizar un usuario
app.put('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { tipoUsuario, primerNombre, segundoNombre, primerApellido, segundoApellido, direccion, telefono, email, estado, contraseña } = req.body;

    const user = await User.findByPk(id);
    if (user) {
      const hashedPassword = bcrypt.hashSync(contraseña, 10);
      await user.update({ tipoUsuario, primerNombre, segundoNombre, primerApellido, segundoApellido, direccion, telefono, email, estado, contraseña: hashedPassword });
      res.json({ message: 'Usuario actualizado' });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para autenticación
app.post('/login', async (req, res) => {
  try {
    const { email, contraseña } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user && bcrypt.compareSync(contraseña, user.contraseña)) {
      const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });
      res.json({ token, user });
    } else {
      res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Ruta para solicitar recuperación de contraseña
app.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    // Aquí enviarías un correo electrónico al usuario con un enlace único para restablecer la contraseña
    res.json({ message: 'Se ha enviado un correo electrónico con instrucciones para restablecer la contraseña' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); */