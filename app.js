const postArray = [{
    id:1,
    image: './img/post1.jpeg',
    category: '✍️ Article',
    title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
    description: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
    author:{
        photo:'./img/post1author.jpeg',
        name:'Sarthak Kamra'
    },
    views: '1.4k views'
},
{   
    id:2,
    image: './img/post2.jpeg',
    category: '🔬️ Education',
    title: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
    description: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
    author:{
        photo:'./img/post2author.jpeg',
        name:'Sarah West'
    },
    views: '1.4k views'
}
];
const postContainer = document.querySelector('.post-container');

postArray.forEach((post)=>{
    postContainer.innerHTML += `
    <div class="post order-${post.id}">
        <div class="post-img-container">
            <img src="${post.image}" alt="post image" class="post-img">
        </div>
        <div class="post-content">
            <p class="post-category fw-bold">${post.category}</p>
            <div class="d-flex justify-content-between align-items-start">
                <h2 class="post-title fw-bold">${post.title}</h2>
                <div class="btn-group">
                            <button type="button" class="btn btn-dots" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="./img/dots.svg" alt="">
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                              <li><button class="dropdown-item" type="button">Edit</button></li>
                              <li><button class="dropdown-item" type="button">Report</button></li>
                              <li><button class="dropdown-item" type="button">Option 3</button></li>
                            </ul>
                </div>
            </div>
            <p class="post-description">${post.description}</p>
            <div class="d-flex justify-content-between align-items-center post-bottom">
                <div class="d-flex justify-content-center align-items-center post-author-info">
                    <img class="post-author-img" src="${post.author.photo}" alt="">
                    <h4 class="post-author-name mb-0 fw-bold">${post.author.name}</h4>
                </div>
                <div class="d-flex justify-content-between align-items-center gap-40 views-share">
                    <div class="d-flex justify-content-between align-items-center post-views">
                        <img src="./img/eye.svg" alt="">
                        <p class="mb-0 post-view-count">${post.views}</p>
                    </div>
                    <div class="post-share-icon">
                        <img src="./img/share.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
});