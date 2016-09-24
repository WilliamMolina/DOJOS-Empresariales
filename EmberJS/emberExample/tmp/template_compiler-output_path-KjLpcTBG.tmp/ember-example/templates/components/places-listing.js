export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "revision": "Ember@2.8.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 12,
          "column": 0
        }
      },
      "moduleName": "ember-example/templates/components/places-listing.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("article");
      dom.setAttribute(el1,"class","listing");
      var el2 = dom.createTextNode("  \n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("img");
      dom.setAttribute(el2,"alt","");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h3");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","detail type");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      var el4 = dom.createTextNode("Tipo:");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","detail city");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      var el4 = dom.createTextNode("Ciudad:");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(element0, [1]);
      var morphs = new Array(5);
      morphs[0] = dom.createAttrMorph(element1, 'src');
      morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
      morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]),3,3);
      morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]),3,3);
      morphs[4] = dom.createMorphAt(fragment,2,2,contextualElement);
      return morphs;
    },
    statements: [
      ["attribute","src",["concat",[["get","place.image",["loc",[null,[2,14],[2,25]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
      ["content","spy.name",["loc",[null,[3,6],[3,18]]],0,0,0,0],
      ["content","place.type",["loc",[null,[5,23],[5,37]]],0,0,0,0],
      ["content","place.city",["loc",[null,[8,25],[8,39]]],0,0,0,0],
      ["content","yield",["loc",[null,[11,0],[11,9]]],0,0,0,0]
    ],
    locals: [],
    templates: []
  };
}()));