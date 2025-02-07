const handleSubmit = async (e) => {
  e.preventDefault();

  if (!phone || !name) {
    setErrorMessage("Please fill in all fields.");
    return;
  }

  if (!validatePhoneNumber(phone)) {
    setErrorMessage("Invalid phone number. Enter a valid 10-digit number.");
    return;
  }

  setErrorMessage(""); 
  const refurl = document.referrer && document.referrer !== "" ? document.referrer : "N/A";
  const source = window.location.href;

  const data = {
    phone: "91" + phone,
    name,
    problem: problem || "N/A",
    refurl,
    source,
    medium: "price download popup",
  };

  try {
    const response = await fetch("https://chat-xbot.webspecia.in/api/iwh/ecf71fd692f9ede5e7593a573a864830", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Response:", result);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    setFormVisible(false);
    setThankYouVisible(true);
  } catch (error) {
    console.error("Error:", error);
    setErrorMessage("Failed to submit the form. Please try again later.");
  }
};
