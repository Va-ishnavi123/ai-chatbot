// Variables to store user's selections
let selectedDegree = '';
let selectedCollege = '';
let selectedLanguage = '';
let queryHistory = [];

// Initialize chatbot with a greeting message
window.onload = () => {
    const greetingMessage = 'Hello! How can I assist you today?';
    displayBotMessage(greetingMessage);
};

// Function to show sub-college options based on the selected degree
function showSubcollegeOptions(degree) {
    selectedDegree = degree;
    const engineeringColleges = document.getElementById('engineeringColleges');
    const polytechnicColleges = document.getElementById('polytechnicColleges');

    if (degree === 'engineering') {
        engineeringColleges.style.display = 'block';
        polytechnicColleges.style.display = 'none';
    } else if (degree === 'polytechnic') {
        engineeringColleges.style.display = 'none';
        polytechnicColleges.style.display = 'block';
    }
    
    // Hide other sections initially
    document.getElementById('language-selection').style.display = 'none';
    document.getElementById('query-selection').style.display = 'none';
    document.getElementById('default-queries').style.display = 'none';
}

// Function to select a college
function selectSubCollege(college) {
    selectedCollege = college;
    document.getElementById('engineeringColleges').style.display = 'none';
    document.getElementById('polytechnicColleges').style.display = 'none';
    document.getElementById('language-selection').style.display = 'block'; // Show language selection
}

// Function to select a language
function selectLanguage(language) {
    selectedLanguage = language;
    document.getElementById('language-selection').style.display = 'none'; // Hide language selection
    document.getElementById('query-selection').style.display = 'block'; // Show query selection
    document.getElementById('default-queries').style.display = 'block'; // Show default queries
}

// Function to handle query selection
function handleQuerySelection(query) {
    const queryText = query;
    if (!selectedLanguage || !selectedDegree || !selectedCollege) return; // Ensure all selections are made

    // Add to search history
    queryHistory.push(queryText);
    updateSearchHistory();

    // Display the user's query
    displayUserMessage(queryText);

    // Display bot's response
    const botResponse = getBotResponse(queryText);
    displayBotMessage(botResponse);
}

// Function to handle custom query submission
function submitQuery() {
    const queryInput = document.getElementById('query-input');
    const queryText = queryInput.value.trim().toLowerCase();
    queryInput.value = ''; // Clear input field

    if (!queryText) return; // Ignore empty queries

    // Add to search history
    queryHistory.push(queryText);
    updateSearchHistory();

    // Display the user's query
    displayUserMessage(queryText);

    // Display bot's response
    const botResponse = getBotResponse(queryText);
    displayBotMessage(botResponse);
}

// Function to display user message
function displayUserMessage(message) {
    const userMessage = document.createElement('div');
    userMessage.textContent = message;
    userMessage.clas
    sName = 'user-message';
    document.getElementById('chat-content').appendChild(userMessage);
}

// Function to display bot message
function displayBotMessage(message) {
    const botMessage = document.createElement('div');
    botMessage.textContent = message;
    botMessage.className = 'bot-message';
    document.getElementById('chat-content').appendChild(botMessage);
}

// Function to update the search history
function updateSearchHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = ''; // Clear existing history

    queryHistory.forEach(query => {
        const listItem = document.createElement('li');
        listItem.textContent = query;
        historyList.appendChild(listItem);
    });
}

// Function to get bot's response based on the query, selected degree, and selected college
function getBotResponse(query) {
    // Responses data
    const responses = {
        'engineering': {'Malaviya National Institute of Technology (MNIT), Jaipur': {
    'fees': {
        'hindi': 'MNIT की फीस ₹90,000 प्रति वर्ष है।',
        'english': 'MNIT fees is ₹90,000 per year.'
    },
    'scholarships': {
        'hindi': 'MNIT में merit-based स्कॉलरशिप उपलब्ध है।',
        'english': 'MNIT offers merit-based scholarships.'
    },
    'Seat Availability': {
        'hindi': 'MNIT में बी.टेक प्रोग्राम के लिए कुल 900 सीटें उपलब्ध हैं।',
        'english': 'MNIT has a total of 900 seats available for the B.Tech program.'
    },
    'Cutoff': {
        'hindi': 'MNIT में प्रवेश के लिए JEE Main स्कोर की आवश्यकता है।',
        'english': 'Admission to MNIT requires a JEE Main score.'
    },
    'hostel': {
        'hindi': 'MNIT में हॉस्टल की सुविधाएँ अच्छी हैं।',
        'english': 'MNIT has good hostel facilities.'
    },
    'placement': {
        'hindi': 'MNIT में 90% प्लेसमेंट दर है।',
        'english': 'MNIT has an impressive placement record with top companies like Microsoft, Amazon, and Adobe recruiting. The average package is around INR 10-12 LPA.'
    },
    'Website': {
        'hindi': 'MNIT की वेबसाइट [www.mnit.ac.in](http://www.mnit.ac.in) है।',
        'english': 'MNIT\'s website is [www.mnit.ac.in](http://www.mnit.ac.in).'
    },
    'Phone number': {
        'hindi': 'MNIT का फोन नंबर +91-141-2713301 है।',
        'english': 'MNIT\'s phone number is +91-141-2713301.'
    },
    'Address': {
        'hindi': 'MNIT का पता Jaipur-302017, Rajasthan है।',
        'english': 'MNIT\'s address is Jaipur-302017, Rajasthan.'
    }
},

            'Indian Institute of Technology (IIT), Jodhpur': {
                'fees': {
                    'hindi': 'College B की फीस ₹60,000 प्रति वर्ष है।',
                    'english': 'College B fees is ₹60,000 per year.'
                },
                'scholarships': {
                    'hindi': 'College B में विभिन्न स्कॉलरशिप योजनाएं उपलब्ध हैं।',
                    'english': 'College B offers various scholarship schemes.'
                },
                'admission': {
                    'hindi': 'College B में प्रवेश के लिए JEE Main स्कोर की आवश्यकता है।',
                    'english': 'Admission to College B requires a JEE Main score.'
                },
                'Seat Availability': {
                    'hindi': 'College A में प्रवेश के लिए JEE Main स्कोर की आवश्यकता है।',
                    'english': 'Admission to College A requires a JEE Main score.'
                },
                'Cutoff': {
                    'hindi': 'College A में प्रवेश के लिए JEE Main स्कोर की आवश्यकता है।',
                    'english': 'Admission to College A requires a JEE Main score.'
                },


                'hostel': {
                    'hindi': 'College B में हॉस्टल की सुविधाएँ बेहतरीन हैं।',
                    'english': 'College B has excellent hostel facilities.'
                },
                'placement': {
                    'hindi': 'College B में 85% प्लेसमेंट दर है।',
                    'english': 'College B has an 85% placement rate.'
                },
                'Website': {
                    'hindi': 'College A की फीस ₹50,000 प्रति वर्ष है।',
                    'english': 'College A fees is ₹50,000 per year.'
                },
                'Phone number': {
                    'hindi': 'College A की फीस ₹50,000 प्रति वर्ष है।',
                    'english': 'College A fees is ₹50,000 per year.'
                },
                'Address': {
                    'hindi': 'College A की फीस ₹50,000 प्रति वर्ष है।',
                    'english': 'College A fees is ₹50,000 per year.'
                },

            },

'Indian Institute of Technology (IIT), Jodhpur': {
    'fees': {
        'hindi': 'IIT Jodhpur की फीस ₹1,00,000 प्रति वर्ष है।',
        'english': 'IIT Jodhpur fees is ₹1,00,000 per year.'
    },
    'scholarships': {
        'hindi': 'IIT Jodhpur में विभिन्न स्कॉलरशिप योजनाएं उपलब्ध हैं।',
        'english': 'IIT Jodhpur offers various scholarship schemes.'
    },
    'admission': {
        'hindi': 'IIT Jodhpur में प्रवेश के लिए JEE Advanced स्कोर की आवश्यकता है।',
        'english': 'Admission to IIT Jodhpur requires a JEE Advanced score.'
    },
    'Seat Availability': {
        'hindi': 'IIT Jodhpur में बी.टेक प्रोग्राम के लिए कुल 1000 सीटें उपलब्ध हैं।',
        'english': 'IIT Jodhpur has a total of 1000 seats available for the B.Tech program.'
    },
    'Cutoff': {
        'hindi': 'IIT Jodhpur में प्रवेश के लिए JEE Advanced स्कोर की आवश्यकता है।',
        'english': 'Admission to IIT Jodhpur requires a JEE Advanced score.'
    },
    'hostel': {
        'hindi': 'IIT Jodhpur में हॉस्टल की सुविधाएँ बेहतरीन हैं।',
        'english': 'IIT Jodhpur has excellent hostel facilities.'
    },
    'placement': {
        'hindi': 'IIT Jodhpur में 85% प्लेसमेंट दर है।',
        'english': 'IIT Jodhpur has an 85% placement rate.'
    },
    'Website': {
        'hindi': 'IIT Jodhpur की वेबसाइट [www.iitj.ac.in](http://www.iitj.ac.in) है।',
        'english': 'IIT Jodhpur\'s website is [www.iitj.ac.in](http://www.iitj.ac.in).'
    },
    'Phone number': {
        'hindi': 'IIT Jodhpur का फोन नंबर +91-291-2801001 है।',
        'english': 'IIT Jodhpur\'s phone number is +91-291-2801001.'
    },
    'Address': {
        'hindi': 'IIT Jodhpur का पता Karni Industrial Area, Pali Road, Jodhpur-342037, Rajasthan है।',
        'english': 'IIT Jodhpur\'s address is Karni Industrial Area, Pali Road, Jodhpur-342037, Rajasthan.'
    }
},

            'Rajasthan Technical University (RTU), Kota': {
                'fees': {
                    'hindi': 'College B की फीस ₹60,000 प्रति वर्ष है।',
                    'english': 'College B fees is ₹60,000 per year.'
                },
                'scholarships': {
                    'hindi': 'College B में विभिन्न स्कॉलरशिप योजनाएं उपलब्ध हैं।',
                    'english': 'College B offers various scholarship schemes.'
                },
                'admission': {
                    'hindi': 'College B में प्रवेश के लिए JEE Main स्कोर की आवश्यकता है।',
                    'english': 'Admission to College B requires a JEE Main score.'
                },
                'Seat Availability': {
                    'hindi': 'College A में प्रवेश के लिए JEE Main स्कोर की आवश्यकता है।',
                    'english': 'Admission to College A requires a JEE Main score.'
                },
                'Cutoff': {
                    'hindi': 'College A में प्रवेश के लिए JEE Main स्कोर की आवश्यकता है।',
                    'english': 'Admission to College A requires a JEE Main score.'
                },


                'hostel': {
                    'hindi': 'College B में हॉस्टल की सुविधाएँ बेहतरीन हैं।',
                    'english': 'College B has excellent hostel facilities.'
                },
                'placement': {
                    'hindi': 'College B में 85% प्लेसमेंट दर है।',
                    'english': 'College B has an 85% placement rate.'
                },
                'Website': {
                    'hindi': 'College A की फीस ₹50,000 प्रति वर्ष है।',
                    'english': 'College A fees is ₹50,000 per year.'
                },
                'Phone number': {
                    'hindi': 'College A की फीस ₹50,000 प्रति वर्ष है।',
                    'english': 'College A fees is ₹50,000 per year.'
                },
                'Address': {
                    'hindi': 'College A की फीस ₹50,000 प्रति वर्ष है।',
                    'english': 'College A fees is ₹50,000 per year.'
                },

            }


            
        },
        'polytechnic': {
            'Government Polytechnic College, Jodhpur': {
    'fees': {
        'hindi': 'Government Polytechnic College की फीस ₹40,000 प्रति वर्ष है।',
        'english': 'Government Polytechnic College fees is ₹40,000 per year.'
    },
    'scholarships': {
        'hindi': 'Government Polytechnic College में merit-based स्कॉलरशिप उपलब्ध है।',
        'english': 'Government Polytechnic College offers merit-based scholarships.'
    },
    'admission': {
        'hindi': 'Government Polytechnic College में प्रवेश के लिए किसी प्रवेश परीक्षा की आवश्यकता नहीं है।',
        'english': 'Admission to Government Polytechnic College does not require an entrance exam.'
    },
    'Seat Availability': {
        'hindi': 'Government Polytechnic College में कुल 500 सीटें उपलब्ध हैं।',
        'english': 'Government Polytechnic College has a total of 500 seats available.'
    },
    'Cutoff': {
        'hindi': 'Government Polytechnic College में प्रवेश के लिए कोई कटऑफ स्कोर नहीं है।',
        'english': 'Admission to Government Polytechnic College does not have a cutoff score.'
    },
    'hostel': {
        'hindi': 'Government Polytechnic College में हॉस्टल की सुविधाएँ उपलब्ध हैं।',
        'english': 'Government Polytechnic College has hostel facilities available.'
    },
    'placement': {
        'hindi': 'Government Polytechnic College में 80% प्लेसमेंट दर है।',
        'english': 'Government Polytechnic College has an 80% placement rate.'
    },
    'Website': {
        'hindi': 'Government Polytechnic College की वेबसाइट [www.gpcjodhpur.edu.in](http://www.gpcjodhpur.edu.in) है।',
        'english': 'Government Polytechnic College\'s website is [www.gpcjodhpur.edu.in](http://www.gpcjodhpur.edu.in).'
    },
    'Phone number': {
        'hindi': 'Government Polytechnic College का फोन नंबर +91-291-2631001 है।',
        'english': 'Government Polytechnic College\'s phone number is +91-291-2631001.'
    },
    'Address': {
        'hindi': 'Government Polytechnic College का पता Ratanada, Jodhpur-342001, Rajasthan है।',
        'english': 'Government Polytechnic College\'s address is Ratanada, Jodhpur-342001, Rajasthan.'
    }
},
'Government Polytechnic College, Kota': {
    'fees': {
        'hindi': 'Government Polytechnic College की फीस ₹45,000 प्रति वर्ष है।',
        'english': 'Government Polytechnic College fees is ₹45,000 per year.'
    },
    'scholarships': {
        'hindi': 'Government Polytechnic College में विभिन्न स्कॉलरशिप योजनाएं उपलब्ध हैं।',
        'english': 'Government Polytechnic College offers various scholarship schemes.'
    },
    'admission': {
        'hindi': 'Government Polytechnic College में प्रवेश के लिए कोई प्रवेश परीक्षा आवश्यक नहीं है।',
        'english': 'Admission to Government Polytechnic College does not require an entrance exam.'
    },
    'Seat Availability': {
        'hindi': 'Government Polytechnic College में कुल 400 सीटें उपलब्ध हैं।',
        'english': 'Government Polytechnic College has a total of 400 seats available.'
    },
    'Cutoff': {
        'hindi': 'Government Polytechnic College में प्रवेश के लिए कोई कटऑफ स्कोर नहीं है।',
        'english': 'Admission to Government Polytechnic College does not have a cutoff score.'
    },
    'hostel': {
        'hindi': 'Government Polytechnic College में हॉस्टल की सुविधाएँ बेहतरीन हैं।',
        'english': 'Government Polytechnic College has excellent hostel facilities.'
    },
    'placement': {
        'hindi': 'Government Polytechnic College में 75% प्लेसमेंट दर है।',
        'english': 'Government Polytechnic College has a 75% placement rate.'
    },
    'Website': {
        'hindi': 'Government Polytechnic College की वेबसाइट [www.gpcota.edu.in](http://www.gpcota.edu.in) है।',
        'english': 'Government Polytechnic College\'s website is [www.gpcota.edu.in](http://www.gpcota.edu.in).'
    },
    'Phone number': {
        'hindi': 'Government Polytechnic College का फोन नंबर +91-744-2391234 है।',
        'english': 'Government Polytechnic College\'s phone number is +91-744-2391234.'
    },
    'Address': {
        'hindi': 'Government Polytechnic College का पता [College Address, Kota, Rajasthan] है।',
        'english': 'Government Polytechnic College\'s address is [College Address, Kota, Rajasthan].'
    }
},
'Arya College of Engineering & Research Centre, Jaipur (Polytechnic)': {
    'fees': {
        'hindi': 'Arya College की फीस ₹45,000 प्रति वर्ष है।',
        'english': 'Arya College fees is ₹45,000 per year.'
    },
    'scholarships': {
        'hindi': 'Arya College में विभिन्न स्कॉलरशिप योजनाएं उपलब्ध हैं।',
        'english': 'Arya College offers various scholarship schemes.'
    },
    'admission': {
        'hindi': 'Arya College में प्रवेश के लिए कोई प्रवेश परीक्षा आवश्यक नहीं है।',
        'english': 'Admission to Arya College does not require an entrance exam.'
    },
    'Seat Availability': {
        'hindi': 'Arya College में कुल 300 सीटें उपलब्ध हैं।',
        'english': 'Arya College has a total of 300 seats available.'
    },
    'Cutoff': {
        'hindi': 'Arya College में प्रवेश के लिए कोई कटऑफ स्कोर नहीं है।',
        'english': 'Admission to Arya College does not have a cutoff score.'
    },
    'hostel': {
        'hindi': 'Arya College में हॉस्टल की सुविधाएँ बेहतरीन हैं।',
        'english': 'Arya College has excellent hostel facilities.'
    },
    'placement': {
        'hindi': 'Arya College में 75% प्लेसमेंट दर है।',
        'english': 'Arya College has a 75% placement rate.'
    },
    'Website': {
        'hindi': 'Arya College की वेबसाइट [www.aryacollege.in](http://www.aryacollege.in) है।',
        'english': 'Arya College\'s website is [www.aryacollege.in](http://www.aryacollege.in).'
    },
    'Phone number': {
        'hindi': 'Arya College का फोन नंबर +91-141-6601000 है।',
        'english': 'Arya College\'s phone number is +91-141-6601000.'
    },
    'Address': {
        'hindi': 'Arya College का पता [Arya College, Kukas, Jaipur, Rajasthan] है।',
        'english': 'Arya College\'s address is [Arya College, Kukas, Jaipur, Rajasthan].'
    }
},
'Government Women Polytechnic College, Jaipur': {
    'fees': {
        'hindi': 'Government Women Polytechnic College, Jaipur की फीस ₹45,000 प्रति वर्ष है।',
        'english': 'Government Women Polytechnic College, Jaipur fees is ₹45,000 per year.'
    },
    'scholarships': {
        'hindi': 'Government Women Polytechnic College, Jaipur में विभिन्न स्कॉलरशिप योजनाएं उपलब्ध हैं।',
        'english': 'Government Women Polytechnic College, Jaipur offers various scholarship schemes.'
    },
    'admission': {
        'hindi': 'Government Women Polytechnic College, Jaipur में प्रवेश के लिए कोई प्रवेश परीक्षा आवश्यक नहीं है।',
        'english': 'Admission to Government Women Polytechnic College, Jaipur does not require an entrance exam.'
    },
    'Seat Availability': {
        'hindi': 'Government Women Polytechnic College, Jaipur में कुल सीटें 150 हैं।',
        'english': 'Government Women Polytechnic College, Jaipur has a total of 150 seats.'
    },
    'Cutoff': {
        'hindi': 'Government Women Polytechnic College, Jaipur में प्रवेश के लिए कोई विशेष कटऑफ नहीं है।',
        'english': 'There is no specific cutoff for admission to Government Women Polytechnic College, Jaipur.'
    },
    'hostel': {
        'hindi': 'Government Women Polytechnic College, Jaipur में हॉस्टल की सुविधाएँ बेहतरीन हैं।',
        'english': 'Government Women Polytechnic College, Jaipur has excellent hostel facilities.'
    },
    'placement': {
        'hindi': 'Government Women Polytechnic College, Jaipur में 75% प्लेसमेंट दर है।',
        'english': 'Government Women Polytechnic College, Jaipur has a 75% placement rate.'
    },
    'Website': {
        'hindi': 'Government Women Polytechnic College, Jaipur की वेबसाइट पर जाएं।',
        'english': 'Visit the website of Government Women Polytechnic College, Jaipur.'
    },
    'Phone number': {
        'hindi': 'Government Women Polytechnic College, Jaipur का फोन नंबर 123-456-7890 है।',
        'english': 'The phone number of Government Women Polytechnic College, Jaipur is 123-456-7890.'
    },
    'Address': {
        'hindi': 'Government Women Polytechnic College, Jaipur का पता XYZ रोड, जयपुर है।',
        'english': 'The address of Government Women Polytechnic College, Jaipur is XYZ Road, Jaipur.'
    }
},


'Poornima Group of Colleges, Jaipur (Polytechnic)': {
    'fees': {
        'hindi': 'Poornima Group of Colleges, Jaipur (Polytechnic) की फीस ₹45,000 प्रति वर्ष है।',
        'english': 'Poornima Group of Colleges, Jaipur (Polytechnic) fees is ₹45,000 per year.'
    },
    'scholarships': {
        'hindi': 'Poornima Group of Colleges, Jaipur (Polytechnic) में विभिन्न स्कॉलरशिप योजनाएं उपलब्ध हैं।',
        'english': 'Poornima Group of Colleges, Jaipur (Polytechnic) offers various scholarship schemes.'
    },
    'admission': {
        'hindi': 'Poornima Group of Colleges, Jaipur (Polytechnic) में प्रवेश के लिए कोई प्रवेश परीक्षा आवश्यक नहीं है।',
        'english': 'Admission to Poornima Group of Colleges, Jaipur (Polytechnic) does not require an entrance exam.'
    },
    'Seat Availability': {
        'hindi': 'Poornima Group of Colleges, Jaipur (Polytechnic) में कुल सीटें 200 हैं।',
        'english': 'Poornima Group of Colleges, Jaipur (Polytechnic) has a total of 200 seats.'
    },
    'Cutoff': {
        'hindi': 'Poornima Group of Colleges, Jaipur (Polytechnic) में प्रवेश के लिए कोई विशेष कटऑफ नहीं है।',
        'english': 'There is no specific cutoff for admission to Poornima Group of Colleges, Jaipur (Polytechnic).'
    },
    'hostel': {
        'hindi': 'Poornima Group of Colleges, Jaipur (Polytechnic) में हॉस्टल की सुविधाएँ बेहतरीन हैं।',
        'english': 'Poornima Group of Colleges, Jaipur (Polytechnic) has excellent hostel facilities.'
    },
    'placement': {
        'hindi': 'Poornima Group of Colleges, Jaipur (Polytechnic) में 75% प्लेसमेंट दर है।',
        'english': 'Poornima Group of Colleges, Jaipur (Polytechnic) has a 75% placement rate.'
    },
    'Website': {
        'hindi': 'Poornima Group of Colleges, Jaipur (Polytechnic) की वेबसाइट पर जाएं।',
        'english': 'Visit the website of Poornima Group of Colleges, Jaipur (Polytechnic).'
    },
    'Phone number': {
        'hindi': 'Poornima Group of Colleges, Jaipur (Polytechnic) का फोन नंबर 123-456-7890 है।',
        'english': 'The phone number of Poornima Group of Colleges, Jaipur (Polytechnic) is 123-456-7890.'
    },
    'Address': {
        'hindi': 'Poornima Group of Colleges, Jaipur (Polytechnic) का पता XYZ रोड, जयपुर है।',
        'english': 'The address of Poornima Group of Colleges, Jaipur (Polytechnic) is XYZ Road, Jaipur.'
    }
}


        }
    };

    // Check for greetings
    const greetings = ['hello', 'hi', 'hey', 'greetings'];
    if (greetings.includes(query)) {
        return 'Hi there! How can I help you today?';
    }

    // If no degree, college, or language selected, return a prompt
    if (!selectedLanguage || !selectedDegree || !selectedCollege) {
        return 'Please select a degree, college, and language first.';
    }

    // Check for default queries
    if (responses[selectedDegree] && responses[selectedDegree][selectedCollege] && responses[selectedDegree][selectedCollege][query]) {
        return responses[selectedDegree][selectedCollege][query][selectedLanguage];
    } else {
        return 'Sorry, I can\'t answer that.';
    }
}