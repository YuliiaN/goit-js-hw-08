!function(){var e,t={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")},a="feedback-form-state",r={};t.input.addEventListener("input",(function(e){var t=e.target.value;t&&(r[e.target.name]=t)})),t.textarea.addEventListener("input",(function(e){var t=e.target.value;t&&(r[e.target.name]=t)})),t.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(a)})),(e=localStorage.getItem(a))&&(t.input.value=JSON.parse(e).email,t.textarea.value=JSON.parse(e).message)}();
//# sourceMappingURL=03-feedback.4cb689c6.js.map
