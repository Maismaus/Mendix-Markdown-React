// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package system.proxies;

public class Session
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject sessionMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "System.Session";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		SessionId("SessionId"),
		CSRFToken("CSRFToken"),
		LastActive("LastActive"),
		Session_User("System.Session_User");

		private final java.lang.String metaName;

		MemberNames(java.lang.String s)
		{
			metaName = s;
		}

		@java.lang.Override
		public java.lang.String toString()
		{
			return metaName;
		}
	}

	public Session(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, entityName));
	}

	protected Session(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject sessionMendixObject)
	{
		if (sessionMendixObject == null) {
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		}
		if (!com.mendix.core.Core.isSubClassOf(entityName, sessionMendixObject.getType())) {
			throw new java.lang.IllegalArgumentException(String.format("The given object is not a %s", entityName));
		}	

		this.sessionMendixObject = sessionMendixObject;
		this.context = context;
	}

	/**
	 * @deprecated Use 'Session.load(IContext, IMendixIdentifier)' instead.
	 */
	@java.lang.Deprecated
	public static system.proxies.Session initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return system.proxies.Session.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 * @param context The context to be used
	 * @param mendixObject The Mendix object for the new instance
	 * @return a new instance of this proxy class
	 */
	public static system.proxies.Session initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new system.proxies.Session(context, mendixObject);
	}

	public static system.proxies.Session load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return system.proxies.Session.initialize(context, mendixObject);
	}

	public static java.util.List<system.proxies.Session> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		return com.mendix.core.Core.createXPathQuery(String.format("//%1$s%2$s", entityName, xpathConstraint))
			.execute(context)
			.stream()
			.map(obj -> system.proxies.Session.initialize(context, obj))
			.collect(java.util.stream.Collectors.toList());
	}

	/**
	 * Commit the changes made on this proxy object.
	 * @throws com.mendix.core.CoreException
	 */
	public final void commit() throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Commit the changes made on this proxy object using the specified context.
	 * @throws com.mendix.core.CoreException
	 */
	public final void commit(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Delete the object.
	 */
	public final void delete()
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}

	/**
	 * Delete the object using the specified context.
	 */
	public final void delete(com.mendix.systemwideinterfaces.core.IContext context)
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}
	/**
	 * @return value of SessionId
	 */
	public final java.lang.String getSessionId()
	{
		return getSessionId(getContext());
	}

	/**
	 * @param context
	 * @return value of SessionId
	 */
	public final java.lang.String getSessionId(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.SessionId.toString());
	}

	/**
	 * Set value of SessionId
	 * @param sessionid
	 */
	public final void setSessionId(java.lang.String sessionid)
	{
		setSessionId(getContext(), sessionid);
	}

	/**
	 * Set value of SessionId
	 * @param context
	 * @param sessionid
	 */
	public final void setSessionId(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String sessionid)
	{
		getMendixObject().setValue(context, MemberNames.SessionId.toString(), sessionid);
	}

	/**
	 * @return value of CSRFToken
	 */
	public final java.lang.String getCSRFToken()
	{
		return getCSRFToken(getContext());
	}

	/**
	 * @param context
	 * @return value of CSRFToken
	 */
	public final java.lang.String getCSRFToken(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.CSRFToken.toString());
	}

	/**
	 * Set value of CSRFToken
	 * @param csrftoken
	 */
	public final void setCSRFToken(java.lang.String csrftoken)
	{
		setCSRFToken(getContext(), csrftoken);
	}

	/**
	 * Set value of CSRFToken
	 * @param context
	 * @param csrftoken
	 */
	public final void setCSRFToken(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String csrftoken)
	{
		getMendixObject().setValue(context, MemberNames.CSRFToken.toString(), csrftoken);
	}

	/**
	 * @return value of LastActive
	 */
	public final java.util.Date getLastActive()
	{
		return getLastActive(getContext());
	}

	/**
	 * @param context
	 * @return value of LastActive
	 */
	public final java.util.Date getLastActive(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.util.Date) getMendixObject().getValue(context, MemberNames.LastActive.toString());
	}

	/**
	 * Set value of LastActive
	 * @param lastactive
	 */
	public final void setLastActive(java.util.Date lastactive)
	{
		setLastActive(getContext(), lastactive);
	}

	/**
	 * Set value of LastActive
	 * @param context
	 * @param lastactive
	 */
	public final void setLastActive(com.mendix.systemwideinterfaces.core.IContext context, java.util.Date lastactive)
	{
		getMendixObject().setValue(context, MemberNames.LastActive.toString(), lastactive);
	}

	/**
	 * @throws com.mendix.core.CoreException
	 * @return value of Session_User
	 */
	public final system.proxies.User getSession_User() throws com.mendix.core.CoreException
	{
		return getSession_User(getContext());
	}

	/**
	 * @param context
	 * @return value of Session_User
	 * @throws com.mendix.core.CoreException
	 */
	public final system.proxies.User getSession_User(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		system.proxies.User result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.Session_User.toString());
		if (identifier != null) {
			result = system.proxies.User.load(context, identifier);
		}
		return result;
	}

	/**
	 * Set value of Session_User
	 * @param session_user
	 */
	public final void setSession_User(system.proxies.User session_user)
	{
		setSession_User(getContext(), session_user);
	}

	/**
	 * Set value of Session_User
	 * @param context
	 * @param session_user
	 */
	public final void setSession_User(com.mendix.systemwideinterfaces.core.IContext context, system.proxies.User session_user)
	{
		if (session_user == null) {
			getMendixObject().setValue(context, MemberNames.Session_User.toString(), null);
		} else {
			getMendixObject().setValue(context, MemberNames.Session_User.toString(), session_user.getMendixObject().getId());
		}
	}

	/**
	 * @return the IMendixObject instance of this proxy for use in the Core interface.
	 */
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return sessionMendixObject;
	}

	/**
	 * @return the IContext instance of this proxy, or null if no IContext instance was specified at initialization.
	 */
	public final com.mendix.systemwideinterfaces.core.IContext getContext()
	{
		return context;
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this) {
			return true;
		}
		if (obj != null && getClass().equals(obj.getClass()))
		{
			final system.proxies.Session that = (system.proxies.Session) obj;
			return getMendixObject().equals(that.getMendixObject());
		}
		return false;
	}

	@java.lang.Override
	public int hashCode()
	{
		return getMendixObject().hashCode();
	}

	/**
	 * @return String name of this class
	 */
	public static java.lang.String getType()
	{
		return entityName;
	}

	/**
	 * @return String GUID from this object, format: ID_0000000000
	 * @deprecated Use getMendixObject().getId().toLong() to get a unique identifier for this object.
	 */
	@java.lang.Deprecated
	public java.lang.String getGUID()
	{
		return "ID_" + getMendixObject().getId().toLong();
	}
}
