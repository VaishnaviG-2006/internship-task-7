function calculateTotals() {
    const cells = document.querySelectorAll('.total-cell');
    let subtotal = 0;
    cells.forEach(cell => {
      subtotal += parseFloat(cell.textContent || '0');
    });
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('total').textContent = subtotal.toFixed(2);
  }
  
  function downloadPDF() {
    const element = document.body;
    const opt = {
      margin: 0.5,
      filename: 'bill_TXN001.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  }
  
  // Calculate totals when the page loads
  window.onload = calculateTotals;
  