{/* ΠΡΩΤΕΣ ΣΤΙΓΜΕΣ */}
<div className="form-section">
  <h2>Οι πρώτες σου στιγμές</h2>

  <label>Η πρώτη φορά που σε κράτησα:</label>
  <textarea name="firstHold" />

  <label>Η πρώτη σου μέρα στο σπίτι:</label>
  <textarea name="firstHomeDay" />

  <label>Η πρώτη σου λέξη:</label>
  <input type="text" name="firstWord" />

  <label>Τα πρώτα σου βήματα:</label>
  <textarea name="firstSteps" />
</div>


{/* Ο ΚΟΣΜΟΣ ΣΟΥ */}
<div className="form-section">
  <h2>Ο κόσμος σου</h2>

  <label>Οι γονείς σου:</label>
  <textarea name="parents" />

  <label>Οι θείοι και οι θείες:</label>
  <textarea name="unclesAunts" />

  <label>Οι παππούδες και οι γιαγιάδες, οι νονοί/ες σου:</label>
  <textarea name="grandparentsGodparents" />

  <label>Οι φίλοι που έγιναν οικογένεια:</label>
  <textarea name="friendsFamily" />

  <label>Οι αξίες που θέλουμε να σου δώσουμε σαν γονείς:</label>
  <textarea name="values" />
</div>


{/* ΦΩΤΟΓΡΑΦΙΕΣ */}
<div className="form-section">
  <h2>Φωτογραφίες</h2>

  <label>Ανέβασε φωτογραφίες:</label>
  <input type="file" name="photos" multiple accept="image/*" />
</div>


{/* ΒΙΝΤΕΟ */}
<div className="form-section">
  <h2>Βίντεο</h2>

  <label>Ανέβασε βίντεο:</label>
  <input type="file" name="videos" multiple accept="video/*" />
</div>
