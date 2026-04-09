¿Qué es una transacción? ¿Para qué se usan?
Conjunto de operaciones que se hacen sobre la base de datos que se esta usando, en forma de una unidad lógica de trabajo.
Se hacen todas o se no se ejecuta ninguna, esto hace que se proteja la información cuando hay errores o caidas del sistema.
Se usan en formas de transferencias bancarias, compras en línea o registros de pagos.

¿Cómo puedo evitar que el comando para crear una tabla no falle si es que la tabla ya está creada?
Depende del motor de base de datos, en sql server, se hcae un validación previa con: 

IF OBJECT_ID(N'dbo.alumnos', N'U') IS NULL
BEGIN
    CREATE TABLE dbo.alumnos (
        id INT PRIMARY KEY,
        nombre VARCHAR(100)
    );
END

¿Qué es un trigger o disparador? Da dos ejemplos de cuándo es bueno usarlos.
Es un procedimiento especial que se ejecura automáticamente cuando ocurre un evento en la base de datos como un INSERT, UPDATE o DELETE

En una audotía de cambios, ya que si alguien modifica el salario de un empleado, se puede guardar automáticamente, osea quien hizo el cambio, cuando se hizo, el valor anterior y el valor nuevo.

En un negocio, donde se intenta insertar una venta con stock inuficiente, cuando un trigger puede impedir la operación o registrar una alerta.


¿Qué es SQL Injection? ¿Qué implicaciones tiene? Busca 3 noticias de talla mundial relacionadas con esto, escribe un párrafo de cada una
de ellas y escribe el enlace a la noticia.
SQL Injection es una vulnerabilidad en la que un hacker mete instrucciones maliciosas dento de los datos que se envian en una aplicación. Esto es muy malo ya que puede ser que se permita que los hackers tengan información como lo son datos sensibles, modificarlos y borrarlos.
Algunas de las implicaciones son el robo de contraseñas y datos personales, esto puede llevar a fraudes financieron e interrupción de los servicios.

1. Sony Pictures (2011)
Se reportó que algunos miembros obtuvieron información confidencial de Sony Pictures mediante un ataque de SQL contra el sitio web. El caso se volvió viral ya que mostró como una empresa tan grande como Sony tenia cierta vulnerabiilidad a la hora de mantener su información personal expuesta.
https://www.reuters.com/article/technology/suspected-lulzsec-hacker-arrested-in-sony-studio-breach-idUSTRE78L6QO/?utm_source=chatgpt.com

2. TalkTalk, en el Reino Unido también se volvió viral ya que después de que al rededor de 156,959 usuarios tuvieran su información personal expuesta despues de un hackeo masivo.
https://www.theguardian.com/business/2016/oct/05/talktalk-hit-with-record-400k-fine-over-cyber-attack?utm_source=chatgpt.com

3. Crunchyroll confirmó una filtración de datos en Marzo de 2026 tras un hackeo masivo que de igual manera hubiera comprometido la información personal de los usuarios, se accedio a un aproximado de 100GB de datos, incluyendo correo electrónicos, IPs y supestamente detalles de tarjetas de crédito.
https://www.infobae.com/tecno/2026/03/25/atencion-fans-del-anime-crunchyroll-admite-que-se-filtro-informacion-de-sus-usuarios/

¿Qué es un ORM y qué diferencias existen con escribir sentencias de SQL comunes?
Es una herramienta que permite trabajar con tablas y registros de la base de datos como si fueran objetos y clases del lenguaje de programación.

Con ORM
-trabajamos con clases, objetos y métodos
-Hace más fácil mantener el código
-reduce errores comunes si está bien usado

Con SQL común
-Tenemos control total sobre la cosulta 
-Vemos exactamente que se ejecuta 
-Suele ser mejor para cosultas complejas o muy optimizadas.
