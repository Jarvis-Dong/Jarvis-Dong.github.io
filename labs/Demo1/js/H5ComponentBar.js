/**
 * Created by jarvis-dong on 16/11/9.
 */

var H5ComponentBar = function (name, cfg) {
    var component = new H5ComponentBase(name,cfg);
    $.each(cfg.data,function(idx,item){

        console.log(item);
        var line = $('<div class="line">');
        var name = $('<div class="name">');
        var rate = $('<div class="rate">');
        var per = $('<div class="per">');

        var width = item[1]*100+'%';
        var color = item[2];



        rate.css('width',width);
        var bgStyle = '';
        if(color!=null && color!=''){
            bgStyle = 'style = "background-color:'+color+'"'
        }
        rate.html('<div class="bg"'+bgStyle+'></div>');

        name.text(item[0]);
        line.append( name );
        per.text(width);
        line.append(name).append(rate).append(per);

        component.append(line);

    })


    return component;
}