const vacationsData = [
  {
    destination: 'Guia',
    from: '4/11/2020',
    to: '4/4/2020',
    price: 2549,
    image: 'https://addons-media.operacdn.com/media/CACHE/images/themes/05/126105/1.0-rev1/images/d197fa99-897f-46a6-954e-c6f852179897/7eaf8a54a1a9a12b0f383fdb050ae52c.jpg',
    id: 'd5c48f70-0b0f-4033-a518-18a9c4741907',
    description:
      'interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus'
  },
  {
    destination: 'Villa Santa Rosa',
    from: '4/9/2020',
    to: '4/11/2020',
    price: 2863,
    image: 'https://cdn-prod.medicalnewstoday.com/content/images/hero/325/325466/325466_1100.jpg',
    id: '52605dcf-71c6-4f90-aca2-6ce069705a57',
    description:
      'magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et'
  },
  {
    destination: 'Syktyvkar',
    from: '4/7/2020',
    to: '4/5/2020',
    price: 1955,
    image: 'https://www.amny.com/wp-content/uploads/2020/03/GettyImages-1089200736.jpg',
    id: 'c6597f80-0695-44f3-af1a-e90fd30fdeef',
    description:
      'purus eu magna vulputate luctus cum sociis natoque penatibus et'
  },
  {
    destination: 'Xianghu',
    from: '4/6/2020',
    to: '4/7/2020',
    price: 2009,
    image: 'https://static.amazon.jobs/locations/58/thumbnails/NYC.jpg?1547618123',
    id: '4efd6901-3424-4eb0-ad8b-ea399a9dd74f',
    description:
      'mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas'
  },
  {
    destination: 'Sagang',
    from: '4/8/2020',
    to: '4/9/2020',
    price: 1605,
    image: 'https://assets.kpmg/content/dam/kpmg/xx/images/2019/05/white-buildings-near-blue-water-oia-santorini-greece.jpg/jcr:content/renditions/cq5dam.web.512.341.jpg',
    id: '50d5fc11-0d83-42dc-81fd-25f51764dcf8',
    description:
      'volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque'
  },
  {
    destination: 'Sosándra',
    from: '4/6/2020',
    to: '4/6/2020',
    price: 2958,
    image: 'https://www.greecetravel.com/volcano-view-hotel004.jpg',
    id: '3a215935-8d93-4643-9fe6-8d27c4152a7a',
    description:
      'vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere'
  },
  {
    destination: 'Sitovo',
    from: '4/10/2020',
    to: '4/5/2020',
    price: 1783,
    image: 'https://addons-media.operacdn.com/media/CACHE/images/themes/05/126105/1.0-rev1/images/d197fa99-897f-46a6-954e-c6f852179897/7eaf8a54a1a9a12b0f383fdb050ae52c.jpg',
    id: '65e78438-4f31-46a1-b893-7ec53f9f86c5',
    description:
      'accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices'
  },
  {
    destination: 'Acas',
    from: '4/11/2020',
    to: '4/8/2020',
    price: 2824,
    image: 'https://www.greecetravel.com/volcano-view-hotel004.jpg',
    id: 'cc6398c3-dfea-4a45-9ed6-d3f12a9b2947',
    description: 'sit amet sem fusce consequat nulla nisl nunc nisl duis'
  },
  {
    destination: 'Ljungby',
    from: '4/11/2020',
    to: '4/2/2020',
    price: 1581,
    image: 'https://assets.kpmg/content/dam/kpmg/xx/images/2019/05/white-buildings-near-blue-water-oia-santorini-greece.jpg/jcr:content/renditions/cq5dam.web.512.341.jpg',
    id: '766d81a1-6425-4374-abf1-7b31b59588fc',
    description:
      'aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis'
  },
  {
    destination: 'Baibu',
    from: '4/11/2020',
    to: '4/11/2020',
    price: 1361,
    image: 'https://cdn-prod.medicalnewstoday.com/content/images/hero/325/325466/325466_1100.jpg',
    id: 'e79a03c3-9720-4bcc-99a1-940bbc1c8c78',
    description:
      'hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem'
  },
  {
    destination: 'Dongfeng',
    from: '4/6/2020',
    to: '4/8/2020',
    price: 2575,
    image: 'https://cdn-prod.medicalnewstoday.com/content/images/hero/325/325466/325466_1100.jpg',
    id: 'ad980fe7-144b-44ff-afd7-5acc53d33b1b',
    description:
      'semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci'
  },
  {
    destination: 'Baklashi',
    from: '4/7/2020',
    to: '4/9/2020',
    price: 2806,
    image: 'https://cdn-prod.medicalnewstoday.com/content/images/hero/325/325466/325466_1100.jpg',
    id: 'e45ca712-02de-4797-b80a-2d83e812da46',
    description:
      'id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in'
  },
  {
    destination: 'Älvängen',
    from: '4/10/2020',
    to: '4/7/2020',
    price: 1149,
    image: 'https://addons-media.operacdn.com/media/CACHE/images/themes/05/126105/1.0-rev1/images/d197fa99-897f-46a6-954e-c6f852179897/7eaf8a54a1a9a12b0f383fdb050ae52c.jpg',
    id: '8c45f512-fc7e-4b83-a9c9-6dfa9d8b9d6c',
    description:
      'venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet'
  },
  {
    destination: 'Shali',
    from: '4/5/2020',
    to: '4/5/2020',
    price: 2821,
    image: 'https://www.greecetravel.com/volcano-view-hotel004.jpg',
    id: 'f2fa6884-0c89-4b45-b0e6-4e048b0eefc8',
    description: 'felis donec semper sapien a libero nam dui proin leo'
  },
  {
    destination: 'Changle',
    from: '4/5/2020',
    to: '4/2/2020',
    price: 2257,
    image: 'https://www.greecetravel.com/volcano-view-hotel004.jpg',
    id: '878e763f-f0e8-4f01-9459-2b7c8601a9e4',
    description:
      'vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci'
  }
];

export const vacations = (req, res, next) => res.send({vacations: vacationsData, discounts: [vacationsData[0], vacationsData[1]]});
