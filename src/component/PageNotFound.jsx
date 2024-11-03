import React from 'react';

const PageNotFound = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f3f4f6',
            color: '#343a40',
            textAlign: 'center',
            overflow: 'hidden',
        },
        cartoon: {
            fontSize: '6rem',
            animation: 'float 3s ease-in-out infinite',
        },
        heading: {
            fontSize: '4rem',
            marginBottom: '1rem',
            fontWeight: 'bold',
            color: '#dc3545',
            animation: 'bounce 1.5s infinite',
        },
        message: {
            fontSize: '1.5rem',
            color: '#6c757d',
            marginBottom: '2rem',
        },
        button: {
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'background-color 0.3s ease',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.cartoon}>🤖</div>
            <h1 style={styles.heading}>404</h1>
            <p style={styles.message}>Oops! The page you’re looking for doesn’t exist.</p>
            <a
                href="/"
                style={{ ...styles.button }}
                onMouseOver={e => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                onMouseOut={e => e.target.style.backgroundColor = styles.button.backgroundColor}
            >
                Go Back Home
            </a>
            <style>
                {`
                    @keyframes float {
                        0% { transform: translateY(0); }
                        50% { transform: translateY(-15px); }
                        100% { transform: translateY(0); }
                    }

                    @keyframes bounce {
                        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                        40% { transform: translateY(-20px); }
                        60% { transform: translateY(-10px); }
                    }
                `}
            </style>
        </div>
    );
};

export default PageNotFound;
