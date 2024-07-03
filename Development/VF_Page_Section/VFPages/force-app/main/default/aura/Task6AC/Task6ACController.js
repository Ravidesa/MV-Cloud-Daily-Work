({
    save : function(component, event, helper) {
        var imgUrl = component.find("imgUrl").get('v.value');
        var bgColor = component.find("bgColor").get('v.value');
        var fSize = component.find("fSize").get('v.value');
        var fColor = component.find("fColor").get('v.value');
        var desc = component.find("desc").get('v.value');

        console.log(imgUrl)
        console.log(bgColor)
        console.log(fSize)
        console.log(fColor)
        console.log(desc)

        component.set("v.imgUrl", imgUrl);
        component.set("v.bgColor", bgColor);
        component.set("v.fontSize", fSize);
        component.set("v.fColor", fColor);
        component.set("v.desc", desc);

    }
})
