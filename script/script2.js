
    document.getElementById('image1').addEventListener('click', function() {
        // Get the div elements
        var design2 = document.getElementById('design2');
        var design21 = document.getElementById('design21');

        // Check which div is currently displayed and switch
        if (design2.style.display !== "none") {
            // Hide design_2 and show design_2_1
            design2.style.display = "none";
            design21.style.display = "block";
        } else {
            // Hide design_2_1 and show design_2
            design21.style.display = "none";
            design2.style.display = "block";
        }
    });