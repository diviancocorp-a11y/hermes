import { supabase } from '../lib/supabase';

/**
 * @hermes/core — notifications service
 *
 * Notificaciones server-side ÚNICAMENTE para web push (subscriptions).
 * El bot de WhatsApp viene en una iteración futura con solución open source.
 * Por ahora el cliente usa botón wa.me directo desde la UI (ver business.whatsapp).
 */

/**
 * Envía notificación push web a un suscriptor.
 * @param {string} userId
 * @param {{ title: string, body: string, url?: string }} payload
 */
export async function sendPushNotification(userId, payload) {
  try {
    const { error } = await supabase.functions.invoke('send-push', {
      body: { userId, payload },
    });
    if (error) {
      console.error('sendPushNotification error:', error);
      return false;
    }
    return true;
  } catch (err) {
    console.error('sendPushNotification:', err);
    return false;
  }
}
