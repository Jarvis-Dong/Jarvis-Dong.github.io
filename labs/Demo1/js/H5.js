/**
 * Created by jarvis-dong on 16/11/2.
 */

//内容管理对象

var H5 = function () {
    this.id = ('h5_'+Math.random()).replace('.','_');
    this.el = $('<div class="h5" id="'+this.id+'">').hide();
    this.page = [];
    $('body').append(this.el);
    
    //新增一个页面

    this.addPage = function ( name , text) {
        var page = $('<div class="h5_page section">');

        if( name != undefined ){
            page.addClass('h5_page_'+name);
        }
        if( text != undefined){
            page.text(text);
        }

        this.el.append(page);
        this.page.push(page);
        return this;
    }
    //新增一个组件
    this.addComponent = function (name, cfg) {
        var cfg = cfg || {};
        cfg = $.extend({
            type: 'base'
        },cfg);

        var component;
        var page = this.page.slice(-1)[0];

        switch(cfg.type){
            case 'base':
                component = new H5ComponentBase(name ,cfg);
                break;
            default:
        }
        page.append(component);
        return this;

    }
    //H5对象初始化重现
    this.loader = function () {
        this.el.fullpage({
            'sectionsColor':['#ccc','#aaa','#254587','#695684'],
            onLeave:function( index, nextIndex,direction){
                $(this).find('.h5_component').trigger('onLeave');
            },
            afterLoad:function( anchorLink, index){
                $(this).find('.h5_component').trigger('onLoad');
            },

        });
        this.el.show()
    }


    return this;
}