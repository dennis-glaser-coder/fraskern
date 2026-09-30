const square2z = [
  [1,3,4,50],[1.5,5,4,50],[2,6,4,50],[2.5,8,4,50],[3,9,3,50],[3,9,4,50],
  [3.5,11,4,50],[4,12,4,50],[5,13,5,50],[5,13,6,50],[6,15,6,50],[7,20,8,60],
  [8,20,8,60],[9,25,10,75],[10,25,10,75],[11,25,12,75],[12,30,12,75],
  [14,45,14,100],[15,45,16,100],[16,45,16,100],[18,45,18,100],[20,45,20,100],
].map(([diameter,cuttingLength,shank,overall])=>({diameter,cuttingLength,shank,overall}))

const square4z = [
  [1,3,4,50],[1.5,5,4,50],[2,6,4,50],[2.5,8,4,50],[3,9,3,50],[3,9,4,50],
  [3.5,11,4,50],[4,12,4,50],[5,13,5,50],[5,13,6,50],[6,15,6,50],[7,20,8,60],
  [8,20,8,60],[8,24,8,60],[9,25,10,75],[10,25,10,75],[10,30,10,75],
  [11,30,12,75],[12,30,12,75],[12,35,12,75],[13,45,14,100],[14,45,14,100],
  [15,45,16,100],[16,45,16,100],[18,45,18,100],[20,45,20,100],
].map(([diameter,cuttingLength,shank,overall])=>({diameter,cuttingLength,shank,overall}))

const hrc65 = [
  [1,3,4,50],[1.5,4,4,50],[2,6,4,50],[2.5,8,4,50],[3,8,3,50],[3,8,4,50],
  [3.5,10,4,50],[4,12,4,50],[5,13,5,50],[5,13,6,50],[6,15,6,50],[7,20,8,60],
  [8,20,8,60],[9,25,10,75],[10,25,10,75],[11,30,12,75],[12,30,12,75],
  [14,45,14,100],[16,45,16,100],[18,45,18,100],[20,45,20,100],
].map(([diameter,cuttingLength,shank,overall])=>({diameter,cuttingLength,shank,overall}))

const alu2z = [
  [1,3,4,50],[1.5,5,4,50],[2,6,4,50],[2.5,8,4,50],[3,9,3,50],[3,9,4,50],
  [3.5,11,4,50],[4,12,4,50],[5,15,5,50],[5,15,6,50],[6,18,6,50],[7,24,8,60],
  [8,24,8,60],[10,30,10,75],[11,35,12,75],[12,35,12,75],[14,45,14,100],
  [16,45,16,100],[18,45,18,100],[20,45,20,100],
].map(([diameter,cuttingLength,shank,overall])=>({diameter,cuttingLength,shank,overall}))

const rough = [
  [4,12,4,50],[5,13,5,50],[5,13,6,50],[6,15,6,50],[8,20,8,60],[10,25,10,75],
  [12,30,12,75],[14,45,14,100],[16,45,16,100],[18,45,18,100],[20,45,20,100],
].map(([diameter,cuttingLength,shank,overall])=>({diameter,cuttingLength,shank,overall}))

const ball = [
  [0.5,2,4,50],[0.75,3,4,50],[1,4,4,50],[1.25,5,4,50],[1.5,6,3,50],[1.5,6,4,50],
  [1.75,7,4,50],[2,8,4,50],[2.5,10,5,50],[2.5,10,6,50],[3,12,6,50],
  [3.5,14,8,60],[4,16,8,60],[5,20,10,75],[6,24,12,75],[7,28,14,100],
  [8,32,16,100],[9,36,18,100],[10,40,20,100],
].map(([radius,cuttingLength,shank,overall])=>({radius,diameter:radius*2,cuttingLength,shank,overall}))

const corner = [
  [2,.2,6,4,50],[2,.5,6,4,50],[2.5,.2,8,4,50],[2.5,.5,8,4,50],
  [3,.2,9,4,50],[3,.5,9,4,50],[3.5,.5,11,4,50],[4,.2,10,4,50],[4,.5,10,4,50],
  [5,.5,13,5,50],[5,.5,13,6,50],[5,1,13,6,50],[6,.2,15,6,50],[6,.5,15,6,50],
  [6,1,15,6,50],[8,.5,20,8,60],[8,1,20,8,60],[8,2,20,8,60],
  [10,.5,25,10,75],[10,1,25,10,75],[10,2,25,10,75],[10,3,25,10,75],
  [12,.5,30,12,75],[12,1,30,12,75],[12,2,30,12,75],[12,3,30,12,75],
].map(([diameter,radius,cuttingLength,shank,overall])=>({diameter,radius,cuttingLength,shank,overall}))

const images = {
  h45_2z:'data:image/webp;base64,UklGRvgEAABXRUJQVlA4IOwEAAAwFgCdASpQAKUAPikSiEKhoSESCSYoGAKEtJQA7AAU8x1ZzO+0JM1w318fZexDs/lnu7f0Z7hD/EelHh7xuf8D2l/9LywuLvCD97CWIbvOL4y1UQvw+5HPfFuMA+G49l/VqvqgVWz716QW/x9gEAb3ARnzgziFX2BIed0OWGO4mh35H8nS7cjA74fveCo+i2YXDFGXjjbH6cyK9J4mRXYCbsEo9xjz9Z1P3xQmKAWt8iavpBm0gsCI3QgA/v74eWU4PI+fYfA3QzvPVv/OJ/8hjsp/Gv9/gxbf2Mt75O+Aar0PnuTf8Mwb48/68/hQXGWnHZFH6z7HDN9AKwP5jNsqzTLcs5742YpkXX8jLliqYtUqm/jLHZcZhAKVLtr13RGbgQl+RMJMgw1rgHdA+O8uiyOFB8NWjzxpCH8jguK8kVKyKvF/s1+eyf/Hd/V3P/p/YCLHGNUCSMZ7f5cilEXfSEJRNNif2Z1RgfAmxwUKpdbKNBvD4yptJPUdHUX5CHXhUa6s2oSkUqKjmp/L4VNPpL2Zhd3yUowSx1b/6qymR9fSUn98ZFg3sGVCHI/X2Ue3Hgh2KkoM23T/rZSLKIJdO/GEtdu0m+X5FeZX6m8COQ0Zs9ElA+YIq9j9Oc+puzSmWIM6XjH6RymVVtJ1R/X3c42toZ4h23WEbbf0A0odtHz9/BTZo5dr+q16eXpFHH3QdRnRHn7einOGEM4q+Cz6mlZuhODFTJqOHyH8IiXu2Z/4MJOYhHXDN43Ja8e2BJd2xLZWrY6u/Bs41puipWtb9YLw88YZmuEipIHG7JG3TlhMbcn7Tpv/71ypzsL+J6zh1ItKaLCr4NYeT7J5IfwTAJBi5XPns8XB0xqcoj9UQ65zcN3z9is3aEdfAfjJi7WsLKakiw3/B76/xel4nM8ZPNb5X/HA0xP0R7ZVl2qvOS3Uyl5ZKsiCYSTzOhnu9OmX3qhxDRS0/E0Tio64owIq/dZn59ngMfPKEboNqL0WrNyTStdFgqzgNjSI6U8x29Z7LPfQSngqfiNoJrIx9GfNL7qnw7wfv8Lz67741NaNYQ2/GFa3DE7wvK4eR9acT4h0H/kkmJ55crnGrzBi/5LRbCVC8P15XxsPFOseADSAKA3Kda1ii6n49kO36/2hivK1fhhFIxsikAmqS/k3TqYnMjIWPDo2RobrDL/YjXtFkRR0/1Plf7z2yASCX3pD0xInrEXe9todbppN4a72hyrojX6sGKC2HAUnuof6FPOt0w3WRGCw1LcZd+oQDoqH8oosoD7uYIwbx0i4Xkqu9pPKD/QxFXtFGD0tne2mSzo4TA6RIDmr9FUJrhb/V788e9ZkfjxeapFivxlezYtsZ6o8k0fA8YBkTZHMX3PrkmOB8w9mFaJdnZgyZcP/VnXo7ptrBxpXemSKZwra7u3lGyMsZ48Xtsnaf/XODLFEZ0wBGhy2nM6PQCr+H5mz0cn6N9xkeKhQP/fYV3tt2hJ6/qgtW66qOFBFV0Vpw4RhJPQNQZWEtDneQahE4wrich2jhqfg8FRSGr3927oL/KGrx4t4J3fMYXD8peQkU2Lj6jstm7CshicyrelZWbvll814c3THOjQlDY8qMF83WjGPWGCrgeYO9WzzMeZ2PQIs/c94o/cy4hmv/MEwBu4nkqvU/nkaWj/bNV4guV6EAAA=',
  h45_4z:'data:image/webp;base64,UklGRnIFAABXRUJQVlA4IGYFAACwGgCdASpQAJsAPikSh0KhoQjWZyYMAUJaRKgAPLZtAFad5Q+9nsbx0eafMP+MfZ77J+Wfr33o8AL8I/oP+c30fcV6Ad5D+Vf5v8xfebwXfJPoA+wD81/9X09/+fzDfTX/V/w/wG/rL/0OxEYLxu57AFiAhbfNd/3PhpbdUU6Jkr/3TtNJNLm/P20LdYwrB5Q0JElSIZDzZ/6NNWpjG0qzosuq+VZ1u410giQLZaDMrmcR/K4Y3Dc9mocQoFqk18KmXrMWr0Qx8pKFAHoibeuNnOFQVK09uKBz6Ch3sYAA/v89gQnS/tTYcJF+ck7apc+/jWe3M72JYtgDsE4F+pS01leX48mZibODd64m64TFwBm0GK9gDH5HOtxGTjArNolxqqkyW0IXM77O6cbd/0Is/b9Yw4hZzw2fieTUW82xToXr+sOq+NeTFjsLlw42IFGoCe3lDKQtgbgFYfvvY7L+ceLTGbXTgolR0/wi3pe0DfMDF6VlJJGJYwtSTFGf7k81AvGzTleBPha2fWSIbP0kvHXce2iODmHK+/NaF6jLZ9ksPP8Mkhls9Rz8DLfzST3csI/JU5+rzem/oIOaHCRb33DisQt5lk24tEAwY/hc4UGeHZ4WKotJS3Zt2kPegm2jEdvoY47vUvNztD2i7oiSdZeW/AyX/v4j1GJ0aLua0S3GZxwqkt79VQEKBqnum69UNMzfGqbGjEmeVlfMNmZ5B6pTBWH2fbAsfOLh+Mn/GxGa6zOeOrXQXj1ToKaAAXpAWZ+vVSq9Yb2C7rDhiac8V2LiEJsZAeieofQgt0ZrcbrXhYjgbbsOL9juT1FGCbiMwCBWrcr7HrzP/lq7EkkFyQLyl4VhjuYEap9vFMAIz04vWAV7P57AnClx4GuawbvOxDp55d16MTef1frufZb23+KuIBxtv8Unq6MMjLBWC8usc0lhrs+X4hD2BRgv4Mh/qWg+9GLhmc26xLKXskxIboCsJbVrYqr78pbgPAjOyL8bQ7QEaHRaKgr8NSyq/WuFeEopGWaYksjv590f0n3853X38vJE956IxCCOKraBlAl/jnYOi6PMuNdsu4SfwSvZ04eS0CRgaGBOQmD+//Z3vQM3/op9H3NuUwUeaAgen/iVO31yDBcE6yhhlJ9LgxnuP3jvB/wobHy2LEFLdSO2g5SYJ4Hz7uWGWKpQFrnKnmYlRrEfbqdPjDR9LQZ3j6Wzk+2y7JlIcWi9MPUXc9G8yjOqNqS7Kh0fAaSxDj38uvbeGBGniWjvF9+IQcnwEb5iAT/n0VF0ZtsgiNpezlhV0O/Ex9/iUCBfM4FG+0phq/KL9V0Dc/c5xN2j61c7SHIrFZBkj1bO8lmDaHHqJ4DlGCbYE4wO/XT/TFdjA/rGCXpd7Ag5VKRN+XGolwaaFR/dsroq2uv/OMflZOwdRpmIn9eyyPHFo/9/C7+3aum3x3GZsipKvFnwnZU/t5VdfBK77QPQH/ge45vWPibBuuXWVilKeFXs7C+7t6ZxdHh46yYf06f9FbP8Tw4zaZNmeB19tfrzsn9EyMo4dfP2GshXkQoSrJf4u9UokBKY4pjv5adA0v+Dfb2fieyKLK85WYWzykumSyuFh85f1oCRJfWT181yJRtV+uJWNkd8vkF/xEuqnu9POJB4RgcpdgVjbS7ZvuRjXo4hwaYa6tk0A0Ck5fPFsd5IaAbFQbawG9AIG9HX/Pf4RT9WKULlq0uYcpH59rMPMVV522ZnSKMNsI6MvYn6trCRV4DwujaL4TZ4O+/Hclu0iPntN+Hy1/cr2ycYJMCccbAnbzAzVnXs1ERhg/VV7Qrhb7/UBNqdRJg4iu4aJAgAAA==',
  h45_ball:'data:image/webp;base64,UklGRngDAABXRUJQVlA4IGwDAACQEgCdASpQAJsAPikSh0MhoQimArIMAUJaS++rwJfuC/fbo7QBrWNKPyl7AZwv8D/juI+WPwa+rv+S9Rn89/1HpB4JEYn/J9MfQh9KjZ6rfa5MHChr2cvtl5H5fpFgg+ZJFUJRi5zm0XGmyzSw0KWwBVJIC6bHX/A/xt8UFt0Ip09zAnb3Rab58fkDkTVf6Gbd2QinFhFaTpyd5WAAAP7/PZU3ZVyMMssPHeXBf1ol9yqxziPwviTbaNchUTn/xV+/GtBNW9B5GSaVNisH5A2lxAfyvBpH5NcJPtZOab+ilULHP27HX963vbI4to1xHv/MJRqm+0ST6W/+uP4ulC4k29icdAMFIwAqj/8Kdm5tga3y3/ISMjfeuENUPrYmJAgc62e+jzgSEX+zNxp3Ac1PpigcXA3CxqPGBM1aerwPVbnWmUWbwF8f3CrZ9+LTnGBH10P89T//gcqh+yp4qhmO3jLmcwKMOHJ2LsPTr3v3hWfns+JTuJWTaI/6QMg36GjnR/wjSJahc/tO5BHBx4GBopjyGxMq3YMhNmDBAQgO/UMCjM54n862ly8GtXU53cofDrIplrJdw+hCIe5G2u8yF3gf8q2AGbuBe3KI6ZxDbfjSZ5l4TvcRCXZyUIHAgYPc3lbf9Bt+suePU3cbAlv4u1i5FVYaIPttzGcfpOeR62OTx1ZliQa7Suyyf+IWb6e5bE3rDGxrhoxqpviYrMogBQsA2zrEIR+7ZT4roS71e+b9HP7/yBYeBhFo3bWz7fWdo1gKL9VAJkrU/kmGgqr7lK2lgo2rxb5v599a+g3/s7d6zLOjg6htNH1hEwBEiDovbH/1Nu/2axDIG4GH3VNXbQe1QWNp70Pm1AaXPUPUHzMdV/8wXXvTqBO8KuGC+XG79qXQ8hjXWG+Qd5Qucr9vsuVsrV+LJs1mpXKsAjnpN97f6VYTP+cO37v3MC/IFKH45/nZ/6HX69dwFLF7rEof8qO9fUKSG1ejJBxcK2NtsngSVyKQiTrBPzWHANuz/q10N3hhK4S8k5kVzJoSb4V1IlpfFgZfG3olViFJJZi0WcX8f3DaKBjlRK61iU89YcGPTZRz8sWQVLvk4taTCHU4x+/md+YSf401JcpCeYydHR7oL1xitsj8DZNOhQyPMJNvV4CUBnp0xYLGwAA==',
  h45_corner:'data:image/webp;base64,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',
  black:'https://hdktools.com/wp-content/uploads/2025/02/%E4%B8%BB%E9%A1%B5%E4%BA%A7%E5%93%81%E8%BD%AE%E6%92%AD%E2%80%94%E9%92%A2%E7%94%A8%E5%B0%8F%E5%BE%84%E5%B9%B3%E5%88%80.png',
  copper:'https://hdktools.com/wp-content/uploads/2025/02/%E4%B8%BB%E9%A1%B5%E4%BA%A7%E5%93%81%E8%BD%AE%E6%92%AD%E2%80%94%E9%92%A2%E7%94%A8%E7%B2%97%E7%9A%AE%E5%88%80.png',
  hard:'https://hdktools.com/wp-content/uploads/2025/02/%E4%B8%BB%E9%A1%B5%E4%BA%A7%E5%93%81%E8%BD%AE%E6%92%AD%E2%80%94%E9%92%A2%E7%94%A865%E5%B9%B3%E5%88%80-1.png',
  alu:'https://hdktools.com/wp-content/uploads/2025/02/%E4%B8%BB%E9%A1%B5%E4%BA%A7%E5%93%81%E8%BD%AE%E6%92%AD%E2%80%94%E9%93%9D%E7%94%A8%E4%B8%83%E5%BD%A9%E7%90%83%E5%88%80-1.png',
}

export const products = [
  {
    id:'h45-2z-standard', name:'VHM Schaftfräser HRC45 2Z', series:'HRC45', shape:'Schaftfräser',
    flutes:2, coating:'AlTiN', materials:['Stahl','Guss'], image:images.h45_2z, variants:square2z,
    description:'2-schneidiger VHM-Schaftfräser für Stahl und Guss. Standardlänge, 35° Drall.',
  },
  {
    id:'h45-4z-standard', name:'VHM Schaftfräser HRC45 4Z', series:'HRC45', shape:'Schaftfräser',
    flutes:4, coating:'AlTiN', materials:['Stahl','Guss'], image:images.h45_4z, variants:square4z,
    description:'4-schneidiger VHM-Schaftfräser für Stahl und Guss. Standardlänge, universelle Geometrie.',
  },
  {
    id:'h45-ball-standard', name:'VHM Kugelfräser HRC45 2Z', series:'HRC45', shape:'Kugelfräser',
    flutes:2, coating:'AlTiN', materials:['Stahl','Guss'], image:images.h45_ball, variants:ball,
    description:'VHM-Kugelfräser für Konturen, 3D-Bearbeitung und Schlichtoperationen.',
  },
  {
    id:'h45-corner-standard', name:'VHM Torusfräser HRC45 4Z', series:'HRC45', shape:'Torusfräser',
    flutes:4, coating:'AlTiN', materials:['Stahl','Guss'], image:images.h45_corner, variants:corner,
    description:'VHM-Torusfräser mit Eckenradius für stabile Kanten und universelle Bearbeitung.',
  },
  {
    id:'h55-2z-standard', name:'VHM Schaftfräser TiSiN HRC55 2Z', series:'HRC55', shape:'Schaftfräser',
    flutes:2, coating:'TiSiN', materials:['Stahl','Guss'], image:images.copper, variants:square2z,
    description:'TiSiN-beschichteter 2-Schneider für Stahl und Guss mit hoher Temperatur- und Verschleißbeständigkeit.',
  },
  {
    id:'h65-4z-standard', name:'VHM Hochleistungsfräser HRC65 4Z', series:'HRC65', shape:'Schaftfräser',
    flutes:4, coating:'High Performance', materials:['Hochfeste Stähle','Edelstahl','Guss'], image:images.hard, variants:hrc65,
    description:'4-schneidiger Hochleistungsfräser mit 45° Drall für harte und wärmebehandelte Stähle.',
  },
  {
    id:'alu-2z-standard', name:'VHM Aluminiumfräser 2Z', series:'AL', shape:'Aluminiumfräser',
    flutes:2, coating:'polierte Schneiden', materials:['Aluminium','NE-Metalle'], image:images.alu, variants:alu2z,
    description:'2-schneidiger VHM-Fräser mit großen Spanräumen für Aluminium und NE-Metalle.',
  },
  {
    id:'rough-standard', name:'VHM Schruppfräser TiSiN', series:'HRC55', shape:'Schruppfräser',
    flutes:4, coating:'TiSiN', materials:['Stahl','Guss'], image:images.copper, variants:rough,
    description:'VHM-Schruppfräser für hohen Materialabtrag in Stahl und Guss.',
  },
]
