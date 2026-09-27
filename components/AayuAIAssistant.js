// Aayu AI Conversational Assistant Component
// Interactive slide-over assistant tailored to student fitness & nutrition

import { AayuAIService } from '../services/aiAssistant.js';

export class AayuAIAssistant {
  constructor(currentUser, onNavigate, onStartActivity) {
    this.currentUser = currentUser;
    this.onNavigate = onNavigate;
    this.onStartActivity = onStartActivity;

    this.messages = [
      {
        id: 'msg-0',
        sender: 'ai',
        text: AayuAIService.getGreeting(currentUser),
        time: 'Just now'
      }
    ];

    this.quickPrompts = AayuAIService.getQuickPrompts(currentUser);
  }

  updateUser(user) {
    this.currentUser = user;
    this.quickPrompts = AayuAIService.getQuickPrompts(user);
  }

  formatMarkdown(text) {
    if (!text) return '';
    let escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Bold **text**
    escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italic *text*
    escaped = escaped.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Blockquote > text
    escaped = escaped.replace(/^>\s*(.+)$/gm, '<blockquote style="border-left: 3px solid #8b5cf6; padding-left: 8px; margin: 6px 0; color: var(--text-subtle); font-style: italic;">$1</blockquote>');

    return escaped;
  }

  sendUserMessage(text) {
    if (!text || !text.trim()) return;

    const userMsg = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text: text.trim(),
      time: 'Just now'
    };
    this.messages.push(userMsg);
    this.renderMessages();

    // Generate tailored AI response
    setTimeout(() => {
      const response = AayuAIService.generateResponse(userMsg.text, this.currentUser, this.messages);
      const aiMsg = {
        id: 'msg-' + (Date.now() + 1),
        sender: 'ai',
        text: response.text,
        actionLabel: response.actionLabel,
        actionActivityId: response.actionActivityId,
        actionNavigate: response.actionNavigate,
        time: 'Just now'
      };
      this.messages.push(aiMsg);
      this.renderMessages();
    }, 400);
  }

  renderMessages() {
    const bodyEl = document.getElementById('ai-chat-body');
    if (!bodyEl) return;

    bodyEl.innerHTML = this.messages.map(m => {
      if (m.sender === 'user') {
        return `
          <div class="chat-bubble chat-bubble-user">
            ${m.text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}
          </div>
        `;
      } else {
        return `
          <div class="chat-bubble chat-bubble-ai">
            <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.35rem; color: #7c3aed; font-weight: 700; font-size: 0.78rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Aayu AI Student Coach
            </div>
            <div style="white-space: pre-line; word-break: break-word;">${this.formatMarkdown(m.text)}</div>

            ${m.actionLabel ? `
              <div style="margin-top: 0.75rem;">
                <button class="btn btn-cyan btn-sm" onclick="window.AayuApp.handleAIAction('${m.actionActivityId || ''}', '${m.actionNavigate || ''}')">
                  ${m.actionLabel} &rarr;
                </button>
              </div>
            ` : ''}
          </div>
        `;
      }
    }).join('');

    bodyEl.scrollTop = bodyEl.scrollHeight;
  }

  getHTML() {
    return `
      <div class="ai-drawer-backdrop" id="ai-drawer-backdrop" onclick="if(event.target.id === 'ai-drawer-backdrop') window.AayuApp.toggleAI()">
        <div class="ai-drawer" id="ai-drawer-container">
          <!-- Header -->
          <div class="ai-drawer-header">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <div class="brand-icon-box" style="width: 36px; height: 36px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12 2.1 12.5"/><path d="m4.5 15 4 4"/><path d="m14.5 4 4 4"/></svg>
              </div>
              <div>
                <h3 style="font-size: 1.1rem; font-weight: 700;">Aayu AI Assistant</h3>
                <span style="font-size: 0.72rem; color: #059669; display: flex; align-items: center; gap: 4px;">
                  <span style="width: 6px; height: 6px; background: #10b981; border-radius: 50%; display: inline-block;"></span>
                  Personalized for ${this.currentUser?.name?.split(' ')[0] || 'You'}
                </span>
              </div>
            </div>

            <button class="modal-close-btn" onclick="window.AayuApp.toggleAI()" title="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          <!-- Chat Body -->
          <div class="ai-chat-body" id="ai-chat-body">
            <!-- Messages populated here -->
          </div>

          <!-- Quick Suggestion Chips -->
          <div style="padding: 0.75rem 1.25rem; border-top: 1px solid var(--border-subtle); background: rgba(0, 0, 0, 0.02);">
            <div style="font-size: 0.74rem; font-weight: 700; color: var(--text-subtle); text-transform: uppercase; margin-bottom: 0.4rem; letter-spacing: 0.04em;">
              Suggested Questions
            </div>
            <div class="ai-quick-prompts-row">
              ${this.quickPrompts.slice(0, 4).map((p, idx) => `
                <button class="ai-prompt-chip" onclick="window.AayuApp.sendAIPrompt('${p.replace(/'/g, "\\'")}')">
                  ${p}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Non-Medical Wellness Disclaimer -->
          <div style="padding: 0.4rem 1.25rem; font-size: 0.68rem; color: var(--text-subtle); text-align: center; background: rgba(0, 0, 0, 0.03);">
            Aayu AI provides student wellness suggestions. Not intended as medical advice.
          </div>

          <!-- Input Row -->
          <form class="ai-chat-input-row" onsubmit="event.preventDefault(); window.AayuApp.submitAIChat();">
            <input type="text" class="input-field" id="ai-chat-input" placeholder="Ask about workouts, snacks, posture, or routine..." autocomplete="off" />
            <button type="submit" class="btn btn-primary btn-sm" id="btn-ai-send" style="padding: 0.75rem 1rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>
        </div>
      </div>
    `;
  }
}
