
var Vec2 = require('../../lib/geom/vec2')
var Rect = require('../../lib/geom/rect')


function renderGlyph(design, glyphObject, boxSize) {

    var glyph = design.surface.rect(boxSize.x, boxSize.y);

    glyph.attr('stroke', 'black');
    glyph.attr('fill', glyphObject.color || '#cee');

    var group = design.surface.group();

    group.add(glyph);

    return {
        glyph: group,
        backboneOffset: boxSize.y / 2.0
    };
}

module.exports = {

    render: renderGlyph

};


