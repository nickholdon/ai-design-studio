// TikTok API Integration Demo
// N.studio AI - https://nickholdon.github.io/ai-design-studio/

class TikTokDemo {
    constructor() {
        this.isConnected = false;
        this.accessToken = null;
        this.userInfo = null;
        this.generatedContent = null;
        
        this.init();
    }
    
    init() {
        console.log('TikTok API Demo Initialized');
        console.log('Domain:', window.location.origin);
        console.log('Demo Mode: Sandbox Environment');
        
        // Check URL parameters for OAuth callback
        this.checkOAuthCallback();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Update UI state
        this.updateUI();
    }
    
    checkOAuthCallback() {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');
        
        if (code) {
            console.log('OAuth callback detected:', { code, state });
            this.handleOAuthCallback(code, state);
        }
    }
    
    handleOAuthCallback(code, state) {
        // In a real implementation, this would make an API call to exchange code for token
        // For demo purposes, we simulate a successful token exchange
        
        this.accessToken = 'tk_sandbox_' + Math.random().toString(36).substr(2, 16);
        this.userInfo = {
            id: 'tiktok_test_user_' + Math.floor(Math.random() * 10000),
            username: 'peru_business_test',
            displayName: 'Peru Business Test Account',
            avatar: 'https://via.placeholder.com/100/25F4EE/FE2C55?text=TikTok'
        };
        this.isConnected = true;
        
        console.log('Simulated OAuth token exchange complete:', {
            accessToken: this.accessToken,
            userInfo: this.userInfo
        });
        
        // Update UI
        this.updateUI();
        
        // Show success message
        this.showMessage('✅ Successfully connected to TikTok!', 'success');
    }
    
    setupEventListeners() {
        // Login button
        document.getElementById('loginButton')?.addEventListener('click', () => this.startLogin());
        
        // Generate content button
        document.getElementById('generateButton')?.addEventListener('click', () => this.generateContent());
        
        // Share button
        document.getElementById('shareButton')?.addEventListener('click', () => this.shareToTikTok());
        
        // API test button
        document.getElementById('testApiButton')?.addEventListener('click', () => this.testAPI());
    }
    
    startLogin() {
        console.log('Starting TikTok OAuth flow...');
        
        // In a real implementation, this would redirect to TikTok OAuth URL
        // For demo, we simulate the redirect
        this.showMessage('Redirecting to TikTok for authorization...', 'info');
        
        // Simulate OAuth flow
        setTimeout(() => {
            // Simulate successful login
            this.accessToken = 'tk_sandbox_' + Math.random().toString(36).substr(2, 16);
            this.userInfo = {
                id: 'tiktok_test_user_' + Math.floor(Math.random() * 10000),
                username: 'peru_business_test',
                displayName: 'Peru Business Test Account',
                avatar: 'https://via.placeholder.com/100/25F4EE/FE2C55?text=TikTok'
            };
            this.isConnected = true;
            
            this.updateUI();
            this.showMessage('✅ Successfully connected to TikTok!', 'success');
            
            // Enable generate button
            document.getElementById('generateButton').disabled = false;
            document.getElementById('generateButton').style.opacity = '1';
            
        }, 1500);
    }
    
    generateContent() {
        console.log('Generating AI content...');
        
        // Show loading state
        const button = document.getElementById('generateButton');
        const originalText = button.textContent;
        button.textContent = 'Generating...';
        button.disabled = true;
        
        // Simulate AI generation
        setTimeout(() => {
            // Generate mock content
            this.generatedContent = {
                id: 'content_' + Date.now(),
                type: 'image',
                url: 'https://via.placeholder.com/400x500/667eea/ffffff?text=AI+Generated+Model+for+Gamarra+Fashion',
                description: 'Professional model for Gamarra fashion store',
                prompt: 'Modelo profesional para ropa de moda en Gamarra, Lima',
                dimensions: { width: 1024, height: 1280 },
                format: 'PNG',
                timestamp: new Date().toISOString()
            };
            
            // Restore button
            button.textContent = originalText;
            button.disabled = false;
            
            // Update UI
            this.updateUI();
            
            // Show content preview
            this.showContentPreview();
            
            // Enable share button
            document.getElementById('shareButton').disabled = false;
            document.getElementById('shareButton').style.opacity = '1';
            
            this.showMessage('✅ AI content generated successfully!', 'success');
            
        }, 2000);
    }
    
    showContentPreview() {
        const previewContainer = document.getElementById('contentPreview');
        if (!previewContainer || !this.generatedContent) return;
        
        previewContainer.innerHTML = `
            <div class="content-preview">
                <h4>Generated Content Preview</h4>
                <img src="${this.generatedContent.url}" alt="${this.generatedContent.description}" class="image-preview">
                <div class="content-details">
                    <p><strong>Description:</strong> ${this.generatedContent.description}</p>
                    <p><strong>Prompt:</strong> "${this.generatedContent.prompt}"</p>
                    <p><strong>Dimensions:</strong> ${this.generatedContent.dimensions.width} × ${this.generatedContent.dimensions.height}</p>
                    <p><strong>Format:</strong> ${this.generatedContent.format}</p>
                </div>
            </div>
        `;
        previewContainer.style.display = 'block';
    }
    
    shareToTikTok() {
        if (!this.generatedContent) {
            this.showMessage('Please generate content first.', 'warning');
            return;
        }
        
        console.log('Sharing content to TikTok...');
        
        // Show loading state
        const button = document.getElementById('shareButton');
        const originalText = button.textContent;
        button.textContent = 'Sharing...';
        button.disabled = true;
        
        // Simulate API call to TikTok
        setTimeout(() => {
            const shareResult = {
                success: true,
                postId: 'tt_post_' + Math.random().toString(36).substr(2, 10),
                status: 'published_to_drafts',
                url: 'https://www.tiktok.com/@test_user/video/' + Math.random().toString(36).substr(2, 10),
                timestamp: new Date().toISOString()
            };
            
            // Restore button
            button.textContent = originalText;
            button.disabled = false;
            
            // Show result
            this.showShareResult(shareResult);
            this.showMessage('✅ Content shared to TikTok successfully!', 'success');
            
        }, 1500);
    }
    
    showShareResult(result) {
        const resultContainer = document.getElementById('shareResult');
        if (!resultContainer) return;
        
        resultContainer.innerHTML = `
            <div class="share-result">
                <h4>Share Result</h4>
                <div class="result-details">
                    <p><strong>Status:</strong> ${result.success ? '✅ Success' : '❌ Failed'}</p>
                    <p><strong>Post ID:</strong> ${result.postId}</p>
                    <p><strong>Status:</strong> ${result.status}</p>
                    ${result.url ? `<p><strong>URL:</strong> <a href="${result.url}" target="_blank">${result.url}</a></p>` : ''}
                    <p><strong>Time:</strong> ${new Date(result.timestamp).toLocaleTimeString()}</p>
                </div>
                ${result.status === 'published_to_drafts' ? 
                    '<div class="note note-info">Content has been saved to your TikTok drafts. You can edit and publish it from the TikTok app.</div>' : ''}
            </div>
        `;
        resultContainer.style.display = 'block';
    }
    
    testAPI() {
        console.log('Testing TikTok API connection...');
        
        // Simulate API test
        setTimeout(() => {
            const apiStatus = {
                endpoint: 'https://open.tiktokapis.com/v2/',
                sandbox: true,
                scopes: ['user.info.basic', 'video.publish'],
                rateLimit: { remaining: 95, limit: 100 },
                timestamp: new Date().toISOString()
            };
            
            this.showAPITestResult(apiStatus);
            this.showMessage('✅ TikTok API connection test successful!', 'success');
            
        }, 1000);
    }
    
    showAPITestResult(status) {
        const resultContainer = document.getElementById('apiTestResult');
        if (!resultContainer) return;
        
        resultContainer.innerHTML = `
            <div class="api-test-result">
                <h4>API Test Results</h4>
                <table class="api-table">
                    <tr>
                        <td><strong>Endpoint:</strong></td>
                        <td>${status.endpoint}</td>
                    </tr>
                    <tr>
                        <td><strong>Environment:</strong></td>
                        <td>${status.sandbox ? 'Sandbox 🧪' : 'Production 🚀'}</td>
                    </tr>
                    <tr>
                        <td><strong>Scopes:</strong></td>
                        <td>${status.scopes.join(', ')}</td>
                    </tr>
                    <tr>
                        <td><strong>Rate Limit:</strong></td>
                        <td>${status.rateLimit.remaining} / ${status.rateLimit.limit} remaining</td>
                    </tr>
                    <tr>
                        <td><strong>Test Time:</strong></td>
                        <td>${new Date(status.timestamp).toLocaleString()}</td>
                    </tr>
                </table>
            </div>
        `;
        resultContainer.style.display = 'block';
    }
    
    updateUI() {
        // Update connection status
        const statusElement = document.getElementById('connectionStatus');
        if (statusElement) {
            if (this.isConnected) {
                statusElement.innerHTML = '<span class="status-badge status-connected">Connected to TikTok</span>';
            } else {
                statusElement.innerHTML = '<span class="status-badge status-disconnected">Not Connected</span>';
            }
        }
        
        // Update user info
        const userInfoElement = document.getElementById('userInfo');
        if (userInfoElement && this.userInfo) {
            userInfoElement.innerHTML = `
                <div class="user-info">
                    <p><strong>User:</strong> ${this.userInfo.displayName}</p>
                    <p><strong>Username:</strong> @${this.userInfo.username}</p>
                    <p><strong>ID:</strong> ${this.userInfo.id}</p>
                </div>
            `;
        }
    }
    
    showMessage(text, type = 'info') {
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `message message-${type}`;
        messageDiv.textContent = text;
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            background: ${type === 'success' ? '#d4edda' : type === 'warning' ? '#fff3cd' : '#d1ecf1'};
            color: ${type === 'success' ? '#155724' : type === 'warning' ? '#856404' : '#0c5460'};
            border-left: 4px solid ${type === 'success' ? '#28a745' : type === 'warning' ? '#ffc107' : '#17a2b8'};
            z-index: 1000;
            max-width: 400px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            animation: slideInRight 0.3s ease;
        `;
        
        // Add to document
        document.body.appendChild(messageDiv);
        
        // Remove after 5 seconds
        setTimeout(() => {
            messageDiv.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.parentNode.removeChild(messageDiv);
                }
            }, 300);
        }, 5000);
        
        // Add CSS animations if not already present
        if (!document.getElementById('messageAnimations')) {
            const style = document.createElement('style');
            style.id = 'messageAnimations';
            style.textContent = `
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOutRight {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Utility function to log API calls (for demo purposes)
    logAPICall(endpoint, method, data) {
        console.log(`[TikTok API] ${method} ${endpoint}`, data);
        
        const logEntry = {
            timestamp: new Date().toISOString(),
            endpoint,
            method,
            data,
            sandbox: true
        };
        
        // Store in session storage for debugging
        const logs = JSON.parse(sessionStorage.getItem('tiktok_api_logs') || '[]');
        logs.unshift(logEntry);
        sessionStorage.setItem('tiktok_api_logs', JSON.stringify(logs.slice(0, 50)));
    }
}

// Initialize demo when page loads
document.addEventListener('DOMContentLoaded', () => {
    window.tiktokDemo = new TikTokDemo();
    
    // Log initialization
    console.log('N.studio AI - TikTok API Integration Demo');
    console.log('Website: https://nickholdon.github.io/ai-design-studio/');
    console.log('Demo URL:', window.location.href);
    console.log('TikTok Developer Portal: https://developers.tiktok.com/');
    
    // Display environment info
    const envInfo = document.createElement('div');
    envInfo.className = 'environment-info';
    envInfo.style.cssText = `
        position: fixed;
        bottom: 10px;
        right: 10px;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 0.8em;
        z-index: 9999;
        font-family: monospace;
    `;
    envInfo.textContent = `Sandbox Mode | ${window.location.hostname}`;
    document.body.appendChild(envInfo);
});