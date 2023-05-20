window.addEventListener('DOMContentLoaded', (event) => {
    var btn_control = document.querySelectorAll('.control-button');
    var cameraRig = document.querySelector('#cameraRig');
    var intervalId;

    btn_control.forEach(function(control) {

        // Controles dispositivos moviles
        control.addEventListener('touchstart', function(evt) {
            var btn_click = evt.target.id;
            var new_position_value = parseFloat(evt.target.attributes.new_position_value.value);
            
            intervalId = setInterval(function() {
                console.log(new_position_value);
                var actual_position = cameraRig.getAttribute('position');
                if (btn_click == 'forward' || btn_click == 'backward') {
                    actual_position.z += new_position_value;
                }
                if (btn_click == 'left' || btn_click == 'right') {
                    actual_position.x += new_position_value;
                }
                cameraRig.setAttribute('position', actual_position);
            }, 10);
            
        });

        control.addEventListener('touchend', function() {
            clearInterval(intervalId);
        });
    });
});

