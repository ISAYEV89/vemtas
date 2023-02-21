let URL = document.getElementsByTagName('body')[0].getAttribute('data-url');
const scriptUrl = URL ? URL + '/assets/' : 'assets/';

const jsAutoload = params => {
    params.forEach(element => {
        document.writeln('<script type="text/javascript" src="' + scriptUrl + element + '"></script>');
    });
};

/* Scripts Load */
const jsFolder = [
    'plugins/jquery/jquery.min.js',
    'js/app/events.js',
    'js/app/listener.js',
    'js/app/main.js',
];

jsAutoload(jsFolder);
