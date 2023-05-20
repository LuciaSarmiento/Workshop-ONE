AFRAME.registerComponent('simple-navmesh-constraint', {
    schema: {
      enabled: {
        default: true
      },
      navmesh: {
        default: ''
      },
      fall: {
        default: 0.5
      },
      height: {
        default: 1.6
      },
      exclude: {
        default: ''
      },
      xzOrigin: {
        default: ''
      }
    },
    
    update: function () {
      this.lastPosition = null;
      this.excludes = this.data.exclude ? Array.from(document.querySelectorAll(this.data.exclude)):[];
      const els = Array.from(document.querySelectorAll(this.data.navmesh));
      if (els === null) {
        console.warn('navmesh-physics: Did not match any elements');
        this.objects = [];
      } else {
        this.objects = els.map(el => el.object3D).concat(this.excludes.map(el => el.object3D));
      }
      this.xzOrigin = this.data.xzOrigin ? this.el.querySelector(this.data.xzOrigin) : this.el;
    },
  
    tick: (function () {
      const nextPosition = new THREE.Vector3();
      const tempVec = new THREE.Vector3();
      const scanPattern = [
        [0,1], // Default the next location
        [0,0.5], // Check that the path to that location was fine
        [30,0.4], // A little to the side shorter range
        [-30,0.4], // A little to the side shorter range
        [60,0.2], // Moderately to the side short range
        [-60,0.2], // Moderately to the side short range
        [80,0.06], // Perpendicular very short range
        [-80,0.06], // Perpendicular very short range
      ];
      const down = new THREE.Vector3(0,-1,0);
      const raycaster = new THREE.Raycaster();
      const gravity = -1;
      const maxYVelocity = 0.5;
      const results = [];
      let yVel = 0;
      let firstTry = true;
      
      return function tick(time, delta) {
        if (this.data.enabled === false) return;
        if (this.lastPosition === null) {
          firstTry = true;
          this.lastPosition = new THREE.Vector3();
          this.xzOrigin.object3D.getWorldPosition(this.lastPosition);
          if (this.data.xzOrigin) this.lastPosition.y -= this.xzOrigin.object3D.position.y;
        }
        
        const el = this.el;
        if (this.objects.length === 0) return;
  
        this.xzOrigin.object3D.getWorldPosition(nextPosition);
        if (this.data.xzOrigin) nextPosition.y -= this.xzOrigin.object3D.position.y;
        if (nextPosition.distanceTo(this.lastPosition) <= 0.01) return;
        
        let didHit = false;
        // So that it does not get stuck it takes as few samples around the user and finds the most appropriate
        scanPatternLoop:
        for (const [angle, distance] of scanPattern) {
          tempVec.subVectors(nextPosition, this.lastPosition);
          tempVec.applyAxisAngle(down, angle*Math.PI/180);
          tempVec.multiplyScalar(distance);
          tempVec.add(this.lastPosition);
          tempVec.y += maxYVelocity;
          tempVec.y -= this.data.height;
          raycaster.set(tempVec, down);
          raycaster.far = this.data.fall > 0 ? this.data.fall + maxYVelocity : Infinity;
          raycaster.intersectObjects(this.objects, true, results);
          
          if (results.length) {
            // If it hit something we want to avoid then ignore it and stop looking
            for (const result of results) {
              if(this.excludes.includes(result.object.el)) {
                results.splice(0);
                continue scanPatternLoop;
              }
            }
            const hitPos = results[0].point;
            results.splice(0);
            hitPos.y += this.data.height;
            if (nextPosition.y - (hitPos.y - yVel*2) > 0.01) {
              yVel += Math.max(gravity * delta * 0.001, -maxYVelocity);
              hitPos.y = nextPosition.y + yVel;
            } else {
              yVel = 0;
            }
            tempVec.copy(hitPos);
            this.xzOrigin.object3D.parent.worldToLocal(tempVec);
            tempVec.sub(this.xzOrigin.object3D.position);
            if (this.data.xzOrigin) tempVec.y += this.xzOrigin.object3D.position.y;
            this.el.object3D.position.add(tempVec);
            
            this.lastPosition.copy(hitPos);
            didHit = true;
            break;
          }
          
        }
        
        if (didHit) {
          firstTry = false;
        }
        
        if (!firstTry && !didHit) {
          this.el.object3D.position.copy(this.lastPosition);
          this.el.object3D.parent.worldToLocal(this.el.object3D.position);
        }
      }
    }())
});

AFRAME.registerComponent("link-click", {
    init: function() {
        this.el.addEventListener('click', function (evt) { 
            var elClass = this.getAttribute('class');
            if(elClass == 'windowsoutclick'){
              window.open(this.getAttribute('link-click').https, '_blank');
            }else{
              location.href = this.getAttribute('link-click');
            }
        });
        this.el.addEventListener('mouseenter', function (evt) { 
          var elClass = this.getAttribute('class');
          if(elClass == 'windowsoutclick'){ //cursor por encima a link que me vaya a redirigir a otra pestaña
            document.querySelector('#mainCursor').setAttribute('material', 'color', 'red');
          }else if(elClass == 'windowsinclick'){ //cursor por encima a link que me vaya a dirigir en la misma pestaña
            document.querySelector('#mainCursor').setAttribute('material', 'color', 'cyan');
          }else if(elClass == 'objectclick'){ //cursor por encima de algun objeto que tenga interaccion, ej. pop ups
            document.querySelector('#mainCursor').setAttribute('material', 'color', 'green');
          }
        });
        this.el.addEventListener('mouseleave', function (evt) {
          document.querySelector('#mainCursor').setAttribute('material', 'color', 'black');
        });
    }
});

if (location.hostname !== 'localhost' && window.location.protocol === 'http:') window.location.protocol = 'https:';

window.addEventListener('DOMContentLoaded', (event) => {
    var interactables = document.querySelectorAll('.interactable');
    interactables.forEach(function(interactable) {
      interactable.addEventListener('click', function(evt) {
        alert('Interaccion con el objeto!');
        // Aquí puedes añadir el código para realizar alguna acción cuando se hace clic en la entidad.
      });
    });
});


  