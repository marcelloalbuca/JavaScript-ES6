function fn() {
    log('Hoisting de function');

    function log(value) {
        console.log(value);
    }
}

fn();