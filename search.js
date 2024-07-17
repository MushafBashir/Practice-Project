function searchData(){
    let persons=[
        {name:"Elon Musk", url:"elonmusk.html"},
        {name:"Bruce Lee", url:"brucelee.html"},
        {name:"Thomas Edison", url:"thomasedison.html"},
        {name:"Steve Jobs", url:"stevejobs.html"},
        {name:"Maulana Rumi", url:"maulanarumi.html"},
        {name:"Aristotle", url:"aristotle.html"},
        {name:"Winston Churchill", url:"winstonchurchill.html"},
        {name:"Albert Einstein", url:"alberteinstein.html"},
        {name:"Tom Cruise", url:"tomcruise.html"},
        {name:"William Shakespeare", url:"williamshakespeare.html"},
        {name:"Alexander The Great", url:"alexanderthegreat.html"},
        {name:"Mark Twain", url:"marktwain.html"},
        {name:"Bill Gates", url:"billgates.html"},
        {name:"Tipu Sultan", url:"tipusultan.html"},
        {name:"Salahuddin Ayyubi", url:"salahuddinayubi.html"},
        {name:"Mother Teresa", url:"motherteresa.html"},
        {name:"Booker T.Washington", url:"washington.html"},
        {name:"Thomas Jefferson", url:"thomasjefferson.html"},
        {name:"Abraham Lincoln", url:"abrahamlincoln.html"},
        {name:"Andrew Carnegie", url:"andrewcarnegie.html"}
        // 'Elon Musk',
        // 'Bruce Lee',
        // 'Thomas Edison',
        // 'Steve Jobs',
        // 'Maulana Rumi',
        // 'Aristotle',
        // 'Winston Churchill',
        // 'Albert Einstein',
        // 'Tom Cruise',
        // 'William Shakespeare',
        // 'ALexander The Great',
        // 'Mark Twain',
        // 'Bill Gates',
        // 'Tipu Sultan',
        // 'Salahuddin Ayubi',
        // 'Mother Teresa',
        // 'Booker T.Washington',
        // 'Thomas Jefferson',
        // 'Abraham Lincoln',
        //'Andrew Carnegie',
    ]


    let list = document.getElementById('list');
    
    
      persons.forEach((person)=>{
        let a = document.createElement('a');
        a.innerHTML = person.name;
        a.classList.add('listpersons');
        a.href=person.url;       ///////////////
        list.appendChild(a);
      })
    }
    
    let searchBar = document.getElementById("searchBar");
    
    searchBar.addEventListener('keyup', type)
    
    function type(){
        let listing = document.getElementById("list");
        let anchor = document.getElementsByClassName('listpersons');
    
        let input = document.getElementById('searchBar').value;
        input = input.toLowerCase();
    
    
    
    
    
        let noResults = true;
    for (i = 0; i < anchor.length; i++) { 
        if (!anchor[i].innerHTML.toLowerCase().includes(input) || input === "") {
            anchor[i].style.display="none";
            continue;
        }
        else {
            anchor[i].style.display="flex";
            noResults = false; 
        }
    
        listing.style.display = noResults ? "none" : "block";
    }
    }