function console_title(x) {

    if (process.platform == 'win32') {

        process.title = x + " / TeknoEvreniSmsBomb v1.0 - github.com/teknodroid";

    } else {

        process.stdout.write('\x1b]2;' + x + " / TeknoEvreniSmsBomb v1.0 - github.com/teknodroid" + '\x1b\x5c');

    }

}



module.exports = console_title;
