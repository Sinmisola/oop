module.exports = function(b,s,a) {
  if (b===null||b==undefined)
    {
      this.brands = "General";
      this.sizes = "Medium";
    }
    else
    {
    this.brands = b;
    this.sizes = s;
    this.isOn=false;
    this.price=a;
    this.isExclusive=function ()
    {
      if(this.price>40000)
      return true;
    };

    this.wearPantie=function ()
    {
      this.isOn=true;
    };
  


    }
    
    };