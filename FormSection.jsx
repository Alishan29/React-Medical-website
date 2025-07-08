import { FormatAlignJustify, Margin } from '@mui/icons-material';
import React from 'react';
import ContactForm from './ContactForm';
import { LocationOn, Email, Phone } from '@mui/icons-material';



function FormSection() {
  return (
    <div style={styles.container}>
      {/* Left Side - Form */}
      <div style={styles.left}>
        <h2 style={styles.contactHeading}>Contact Us</h2>
        <form style={styles.form}>
          <input type="text" placeholder="Name" style={styles.input} />
          <input type="email" placeholder="Email" style={styles.input} />
          <input type="text" placeholder="Address" style={styles.input} />
          <textarea placeholder="Message" style={styles.textarea}></textarea>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>

      <div style={styles.right}>
        {/* Contact Info Above Map */}
        <div style={styles.contactInfo}>
          <div style={styles.infoItem}>
            <LocationOn style={styles.icon} />
            <span>123 Main St, Rome, Italy</span>
          </div>
          <div style={styles.infoItem}>
            <Phone style={styles.icon} />
            <span>+39 123 456 789</span>
          </div>
          <div style={styles.infoItem}>
            <Email style={styles.icon} />
            <span>info@example.com</span>
          </div>
        </div>

        {/* Map Section */}
        <iframe
          title="Map of Italy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5851686.567655944!2d7.6612332!3d41.87194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13157262bb2764f9%3A0x71bb9b4df10d6e86!2sItaly!5e0!3m2!1sen!2s!4v1719923749619!5m2!1sen!2s"
          width="100%"
          height="50%" // 👈 reduce to half height
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}





// Simple CSS-in-JS styling
const styles = {


  contactHeading: {
    fontSize: '30px',
    fontWeight: 700,
    lineHeight: '1.2em',
    marginBottom: '30px',
  },




  container: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    padding: '80px',
    gap: '10px',
    boxSizing: 'border-box',
  },

  left: {
    flex: 1,
    padding: '40px',
    boxSizing: 'border-box',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },

  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '10px',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    height: '100px',
    resize: 'vertical',
    border: '1px solid #ccc',
    borderRadius: '10px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#2e94d9',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '10px',
    width: '30%',
  },


  right: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',   // ✅ vertically center
    alignItems: 'flex-start',   // ✅ keep content aligned to the left
    gap: '20px',
    height: '100%',
    padding: '20px',
    boxSizing: 'border-box',
    lineHeight:'2em',
  },


  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px', // ✅ adds spacing between icon and text
    fontSize: '16px',
    color: '#333',
  },
  
};

export default FormSection;
