const xml = require('xml2json');

const api = require('./dymo-frontend.js');

module.exports.printers = function () {
    return dymo.label.framework.getPrinters();
}

module.exports.print = function (what) {
    let labelFile = dymo.label.framework.openLabelFile(what.label);
    let objectNames = labelFile.getObjectNames();

    if(what.fields){
        for(var field of fields){
            if(objectNames.indexOf(field) >= 0){
                labelFile.setObjectText(field, what.fields[field]);
            }
        }
    }

    if(what.images){
        for(var image of images){
            if(objectNames.indexOf(image) >= 0){
                labelFile.setObjectText(field, what.images[field]);
            }
        }
    }

    labelFile.print(what.printer, dymo.label.framework.createLabelPrintParamsXml(), dymo.label.framework.LabelSetBuilder.toXml([]));
}

module.exports.printMany = function (labelFileURI, printer, fields) {
    let labelFile = dymo.label.framework.openLabelFile(what.label);

    labelFile.print(printer, dymo.label.framework.createLabelPrintParamsXml(), dymo.label.framework.LabelSetBuilder.toXml(fields));
}
