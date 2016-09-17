export default function() {
  this.namespace='/api';
  this.get('/places', function() {
    return {
      data: [{
        type: 'places',
        id: 'place001',
        attributes: {
          name: 'Jardín botánico',
          city: 'Medellín',
          type: 'Turismo',
          image: 'http://media2.trover.com/T/5502665dae8d8a5502003aeb/fixedw_large_4x.jpg'
        }
      }, {
        type: 'places',
        id: 'place002',
        attributes: {
          name: 'Museo el castillo',
          city: 'Medellín',
          type: 'Cultura',
          image: 'https://userscontent2.emaze.com/images/370a02f4-4207-4634-9b39-f27e8ad7489d/35f490f4c3ac5276fc7b1c1f50be89b9.jpg'
        }
      }, {
        type: 'places',
        id: 'place003',
        attributes: {
          name: 'Museo de arte Moderno',
          city: 'Valle',
          type: 'Cultura',
          image: 'https://images.trvl-media.com/media/content/shared/images/travelguides/destination/6140804/Medellins-Museum-Of-Modern-Art-68863.jpg'
        }
      }]
    };
  });
}
