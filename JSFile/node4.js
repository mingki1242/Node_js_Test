const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
function encrypt(message , key , iv)
{
    const cipher = crypto.createCipheriv(algorithm,key,iv);
    let en_message = cipher.update(message,'utf8' , 'base64')
    en_message += cipher.final('base64');
    return en_message;
}

function decrypt(message , key , iv)
{
    const dicipher = crypto.createDecipheriv(algorithm,key,iv);
    let di_message = dicipher.update(message,'base64','utf8');
    di_message+= dicipher.final('utf8');
    return di_message;
}

const iv = '1234567890123456';
const message = '@HelloWorld@';
const key = crypto.createHash('sha256').update(message).digest('base64').slice(0,32);

const en_text = encrypt("hihi" , key , iv);
console.log(en_text);
const de_text = decrypt(en_text,key,iv);
console.log(de_text);

