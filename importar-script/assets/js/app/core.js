function getPrefixUrl() {
    let protocol = location.protocol,
        port = location.port,
        hostname = location.hostname;

    if(port === '') return protocol + '//' + hostname + '/';
    if(port !== '') return protocol + '//' + hostname + ':'+ port +'/';
}
function importarScript(source, args) {

    if (args === undefined) { var args = {} }
    if (! args.hasOwnProperty('timeout') ) args.timeout = 0;

    let e = document.createElement('script'),
        src = getPrefixUrl() + source;

    e.src = src;
    e.type = 'text/javascript';

    if (args.callbackfunction !== undefined) {
        e.onload = function() {
            args.callbackfunction();
        }
    }

    setTimeout(function() {
        document.head.appendChild(e);
    }, args.timeout );
}