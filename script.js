let dealForm = document.getElementById("dealForm");

dealForm.addEventListener("submit",  function (event) {
  event.preventDefault();

  const name = event.target.name.value;
  const lastName = event.target.lastName.value;
  const email = event.target.email.value;

  const dealData = {
    title: `Deal with ${name}`,
    value: 20000,
  };

  createDeal(dealData);
});

async function createDeal(dealData) {
  const pipedriveToken = "ae5afd4c28e0a33f0aa9aee99ca231c314d7d251";
  const companyDoman = "personal-sandbox5";

  const url = `https://${companyDoman}.pipedrive.com/api/v1/deals?api_token=${pipedriveToken}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dealData),
    });

    const result = await response.json();

    if (result.success) {
      alert("Deal created successfully!");
    } else {
      alert("Failed to create deal.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred.");
  }
}
