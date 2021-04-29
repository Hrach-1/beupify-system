function CurveAnimator(from,to,c1,c2){
  this.path = document.createElementNS('http://www.w3.org/2000/svg','path');
  if (!c1) c1 = from;
  if (!c2) c2 = to;
  this.path.setAttribute('d','M'+from.join(',')+'C'+c1.join(',')+' '+c2.join(',')+' '+to.join(','));
  this.updatePath();
  CurveAnimator.lastCreated = this;
}
CurveAnimator.prototype.animate = function(duration,callback,delay){
  const curveAnim = this;
  // TODO: Use requestAnimationFrame if a delay isn't passed
  if (!delay) delay = 1/40;
  clearInterval(curveAnim.animTimer);
  const startTime = new Date;
  curveAnim.animTimer = setInterval(function(){
    const now = new Date;
    const elapsed = (now-startTime)/1000;
    console.log('Elapsed: ', elapsed)
    let percent = elapsed/duration;
    console.log('Percent: ', percent)
    if (percent>=1){
      percent = 1;
      clearInterval(curveAnim.animTimer);
    }
    const p1 = curveAnim.pointAt(percent-0.01),
      p2 = curveAnim.pointAt(percent+0.01);

    console.log('P1: ', p1)
    console.log('P2: ', p2)
    console.log('-=-=--=-=--=-=-=-=-=--=-=-')

    callback(curveAnim.pointAt(percent),Math.atan2(p2.y-p1.y,p2.x-p1.x)*180/Math.PI);
  },delay*1000);
};
CurveAnimator.prototype.stop = function(){
  clearInterval(this.animTimer);
};
CurveAnimator.prototype.pointAt = function(percent){
  return this.path.getPointAtLength(this.len*percent);
};
CurveAnimator.prototype.updatePath = function(){
  this.len = this.path.getTotalLength();
};
CurveAnimator.prototype.setStart = function(x,y){
  const M = this.path.pathSegList.getItem(0);
  M.x = x; M.y = y;
  this.updatePath();
  return this;
};
CurveAnimator.prototype.setEnd = function(x,y){
  const C = this.path.pathSegList.getItem(1);
  C.x = x; C.y = y;
  this.updatePath();
  return this;
};
CurveAnimator.prototype.setStartDirection = function(x,y){
  const C = this.path.pathSegList.getItem(1);
  C.x1 = x; C.y1 = y;
  this.updatePath();
  return this;
};
CurveAnimator.prototype.setEndDirection = function(x,y){
  const C = this.path.pathSegList.getItem(1);
  C.x2 = x; C.y2 = y;
  this.updatePath();
  return this;
};

export default CurveAnimator