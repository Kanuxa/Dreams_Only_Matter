const member1 = document.getElementById('member1');
const member2 = document.getElementById('member2');
const member3 = document.getElementById('member3');

const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');

const popupPhoto = document.getElementById('popupPhoto');
const popupName = document.getElementById('popupName'); 
const popupUni = document.getElementById('popupUni');
const popupSchool = document.getElementById('popupSchool');
const popupEmail = document.getElementById('popupEmail');
const popupPhone = document.getElementById('popupPhone');
const popupBio = document.getElementById('popupBio');

const members = {
    Kanan: {
        name: "Kanan Gurbanli",
        photo: '<img src="./images/members/Kanan.jpg" alt="Kanan">',
        uni: "Student of ADA University",
        school: "BS in Information Technology",
        email: "Email: kgurbanli15744@ada.edu.az",
        phone: "Phone: (+994)55-777-00-65",
        bio: "I’m Kanan Gurbanli, a third-year student at ADA University with a major in Information Technologies. I’m a person who loves to travel and find new adventures along the way. I have found that nothing satisfies me more than meeting new people, developing new relationships, solving problems, and contributing to the growth of businesses. After graduating from high school with a gold medal, I started my bachelor's degree. During my experience at ADA University, I made many friends both native and international, joined student clubs, and discovered the beauty of student life. Along with my classes, I volunteered in different student activities. In my third year of study, I applied to several universities for Exchange Program. I spent the Fall 23 semester at Oklahoma State University, US. That was a great experience for me studying and living within completely different societies. Currently, I’m looking forward to finding some internship opportunities and starting my professional career."
    },
    Murad: {
        name: "Murad Tariverdiyev",
        photo: '<img src="./images/members/Murad.jpg" alt="Murad">',
        uni: "Student of ADA University",
        school: "BS in Computer Science",
        email: "Email: mtariverdiyev19957@ada.edu.az",
        phone: "Phone: (+994)50-447-90-61",
        bio: "Hello and Welcome! I'm Murad Tariverdiyev, studying in Computer Science at ADA University as a first-year undergraduate. Since joining ADA University in September 2023, I've completed EAPP course to improve my language skills before beginning General Education. Currently, I'm trying to survive in Dr.Araz's classes. Beyond my formal education, my passion lies in competitive programming. Therefore, during my school years, I have learned C++, C, and Python. Throughout my learning process, I have participated in National Informatics Olympiads and other international events including IZhO, IATI, and APIO. I'm proud to have earned two silver medals in the National Informatics Olympiad. Now, as I embark on this exciting chapter at ADA University, I'm eager to complete my education with a higher GPA! If you have an interest in this field, do not forget to join us to explore every detail of websites! Thanks for visiting!"

    },
    Aykhan: {
        name: "Aykhan Hasanov",
        photo: '<img src="./images/members/Aykhan.jpg" alt="Aykhan">',
        uni: "Student of ADA University",
        school: "BS in Computer Engineering",
        email: "Email: ayxanhsnov41@gmail.com",
        phone: "Phone: (+994)70-222-85-28",
        bio: "I am a student of Ada University.  My specialty was computer engineering.  I have a hobby of collecting custom football t-shirts.  In addition, I plan to visit many cities in the future."

    }
}

member1.addEventListener('click', () => {
    popup.style.display = 'block';
    popupPhoto.innerHTML = members.Kanan.photo;
    popupName.innerHTML = members.Kanan.name;
    popupUni.innerHTML = members.Kanan.uni;
    popupSchool.innerHTML = members.Kanan.school;
    popupEmail.innerHTML = members.Kanan.email;
    popupPhone.innerHTML = members.Kanan.phone;
    popupBio.innerHTML = members.Kanan.bio;

});

member2.addEventListener('click', () => {
    popup.style.display = 'block';
    popupPhoto.innerHTML = members.Murad.photo;
    popupName.innerHTML = members.Murad.name;
    popupUni.innerHTML = members.Murad.uni;
    popupSchool.innerHTML = members.Murad.school;
    popupEmail.innerHTML = members.Murad.email;
    popupPhone.innerHTML = members.Murad.phone;
    popupBio.innerHTML = members.Murad.bio;
});

member3.addEventListener('click', () => {
    popup.style.display = 'block';
    popupPhoto.innerHTML = members.Aykhan.photo;
    popupName.innerHTML = members.Aykhan.name;
    popupUni.innerHTML = members.Aykhan.uni;
    popupSchool.innerHTML = members.Aykhan.school;
    popupEmail.innerHTML = members.Aykhan.email;
    popupPhone.innerHTML = members.Aykhan.phone;
    popupBio.innerHTML = members.Aykhan.bio;
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});