-- ========================================
-- FONCTIONS SQL STOCKÉES
-- À exécuter dans Supabase SQL Editor
-- ========================================

-- ============ MESSAGES ============

-- Récupérer tous les messages (non archivés par défaut)
CREATE OR REPLACE FUNCTION get_messages(
  p_limit INT DEFAULT 50,
  p_offset INT DEFAULT 0,
  p_include_archived BOOLEAN DEFAULT FALSE
)
RETURNS TABLE (
  id UUID,
  email TEXT,
  name TEXT,
  message TEXT,
  read BOOLEAN,
  archived BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE,
  total_count INT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    cm.id,
    cm.email,
    cm.name,
    cm.message,
    cm.read,
    cm.archived,
    cm.created_at,
    COUNT(*) OVER() AS total_count
  FROM contact_messages cm
  WHERE (p_include_archived OR cm.archived = FALSE)
  ORDER BY cm.created_at DESC
  LIMIT p_limit
  OFFSET p_offset;
END;
$$ LANGUAGE plpgsql;

-- Récupérer un message spécifique
CREATE OR REPLACE FUNCTION get_message(p_id UUID)
RETURNS TABLE (
  id UUID,
  email TEXT,
  name TEXT,
  message TEXT,
  read BOOLEAN,
  archived BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    cm.id,
    cm.email,
    cm.name,
    cm.message,
    cm.read,
    cm.archived,
    cm.created_at
  FROM contact_messages cm
  WHERE cm.id = p_id;
END;
$$ LANGUAGE plpgsql;

-- Créer un message
CREATE OR REPLACE FUNCTION create_message(
  p_email TEXT,
  p_name TEXT,
  p_message TEXT
)
RETURNS TABLE (
  id UUID,
  email TEXT,
  name TEXT,
  message TEXT,
  read BOOLEAN,
  archived BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  INSERT INTO contact_messages (email, name, message, read, archived)
  VALUES (p_email, p_name, p_message, FALSE, FALSE)
  RETURNING 
    contact_messages.id,
    contact_messages.email,
    contact_messages.name,
    contact_messages.message,
    contact_messages.read,
    contact_messages.archived,
    contact_messages.created_at;
END;
$$ LANGUAGE plpgsql;

-- Marquer un message comme lu
CREATE OR REPLACE FUNCTION mark_message_read(p_id UUID)
RETURNS TABLE (
  id UUID,
  email TEXT,
  name TEXT,
  message TEXT,
  read BOOLEAN,
  archived BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  UPDATE contact_messages
  SET read = TRUE
  WHERE id = p_id
  RETURNING 
    contact_messages.id,
    contact_messages.email,
    contact_messages.name,
    contact_messages.message,
    contact_messages.read,
    contact_messages.archived,
    contact_messages.created_at;
END;
$$ LANGUAGE plpgsql;

-- Archiver/désarchiver un message
CREATE OR REPLACE FUNCTION toggle_message_archived(p_id UUID)
RETURNS TABLE (
  id UUID,
  email TEXT,
  name TEXT,
  message TEXT,
  read BOOLEAN,
  archived BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  UPDATE contact_messages
  SET archived = NOT archived
  WHERE id = p_id
  RETURNING 
    contact_messages.id,
    contact_messages.email,
    contact_messages.name,
    contact_messages.message,
    contact_messages.read,
    contact_messages.archived,
    contact_messages.created_at;
END;
$$ LANGUAGE plpgsql;

-- Supprimer un message
CREATE OR REPLACE FUNCTION delete_message(p_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  DELETE FROM contact_messages WHERE id = p_id;
  RETURN FOUND;
END;
$$ LANGUAGE plpgsql;

-- Compter messages non-lus
CREATE OR REPLACE FUNCTION count_unread_messages()
RETURNS INT AS $$
DECLARE
  v_count INT;
BEGIN
  SELECT COUNT(*) INTO v_count
  FROM contact_messages
  WHERE read = FALSE AND archived = FALSE;
  RETURN v_count;
END;
$$ LANGUAGE plpgsql;

-- ============ NEWSLETTER ============

-- S'abonner newsletter
CREATE OR REPLACE FUNCTION subscribe_newsletter(p_email TEXT)
RETURNS TABLE (
  id UUID,
  email TEXT,
  subscribed BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  INSERT INTO newsletter_subscribers (email, subscribed)
  VALUES (p_email, TRUE)
  ON CONFLICT (email)
  DO UPDATE SET subscribed = TRUE
  RETURNING 
    newsletter_subscribers.id,
    newsletter_subscribers.email,
    newsletter_subscribers.subscribed,
    newsletter_subscribers.created_at;
END;
$$ LANGUAGE plpgsql;

-- Récupérer abonnés
CREATE OR REPLACE FUNCTION get_subscribers(
  p_limit INT DEFAULT 50,
  p_offset INT DEFAULT 0
)
RETURNS TABLE (
  id UUID,
  email TEXT,
  subscribed BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE,
  total_count INT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    ns.id,
    ns.email,
    ns.subscribed,
    ns.created_at,
    COUNT(*) OVER() AS total_count
  FROM newsletter_subscribers ns
  WHERE ns.subscribed = TRUE
  ORDER BY ns.created_at DESC
  LIMIT p_limit
  OFFSET p_offset;
END;
$$ LANGUAGE plpgsql;

-- Compter abonnés
CREATE OR REPLACE FUNCTION count_subscribers()
RETURNS INT AS $$
DECLARE
  v_count INT;
BEGIN
  SELECT COUNT(*) INTO v_count
  FROM newsletter_subscribers
  WHERE subscribed = TRUE;
  RETURN v_count;
END;
$$ LANGUAGE plpgsql;

-- ============ STATS ============

-- Récupérer stats dashboard
CREATE OR REPLACE FUNCTION get_dashboard_stats()
RETURNS TABLE (
  total_messages INT,
  unread_messages INT,
  subscribers INT,
  messages_this_month INT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    (SELECT COUNT(*) FROM contact_messages WHERE archived = FALSE)::INT,
    (SELECT COUNT(*) FROM contact_messages WHERE read = FALSE AND archived = FALSE)::INT,
    (SELECT COUNT(*) FROM newsletter_subscribers WHERE subscribed = TRUE)::INT,
    (SELECT COUNT(*) FROM contact_messages 
     WHERE created_at >= NOW() - INTERVAL '1 month' 
     AND archived = FALSE)::INT;
END;
$$ LANGUAGE plpgsql;

-- ============ ADMIN SESSIONS ============

-- Créer session admin
CREATE OR REPLACE FUNCTION create_admin_session(
  p_token TEXT,
  p_expires_at TIMESTAMP WITH TIME ZONE
)
RETURNS TABLE (
  id UUID,
  token TEXT,
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  INSERT INTO admin_sessions (token, expires_at)
  VALUES (p_token, p_expires_at)
  RETURNING 
    admin_sessions.id,
    admin_sessions.token,
    admin_sessions.expires_at,
    admin_sessions.created_at;
END;
$$ LANGUAGE plpgsql;

-- Vérifier session admin
CREATE OR REPLACE FUNCTION verify_admin_session(p_token TEXT)
RETURNS TABLE (
  id UUID,
  token TEXT,
  valid BOOLEAN
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    ases.id,
    ases.token,
    (ases.expires_at > NOW())::BOOLEAN AS valid
  FROM admin_sessions ases
  WHERE ases.token = p_token;
END;
$$ LANGUAGE plpgsql;

-- Supprimer session admin
CREATE OR REPLACE FUNCTION delete_admin_session(p_token TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  DELETE FROM admin_sessions WHERE token = p_token;
  RETURN FOUND;
END;
$$ LANGUAGE plpgsql;

-- ============ CLEANUP ============

-- Supprimer messages archivés + vieux (90 jours)
CREATE OR REPLACE FUNCTION cleanup_old_messages()
RETURNS INT AS $$
DECLARE
  v_deleted INT;
BEGIN
  DELETE FROM contact_messages
  WHERE archived = TRUE 
  AND created_at < NOW() - INTERVAL '90 days';
  
  GET DIAGNOSTICS v_deleted = ROW_COUNT;
  RETURN v_deleted;
END;
$$ LANGUAGE plpgsql;

-- Supprimer sessions expirées
CREATE OR REPLACE FUNCTION cleanup_expired_sessions()
RETURNS INT AS $$
DECLARE
  v_deleted INT;
BEGIN
  DELETE FROM admin_sessions
  WHERE expires_at < NOW();
  
  GET DIAGNOSTICS v_deleted = ROW_COUNT;
  RETURN v_deleted;
END;
$$ LANGUAGE plpgsql;
