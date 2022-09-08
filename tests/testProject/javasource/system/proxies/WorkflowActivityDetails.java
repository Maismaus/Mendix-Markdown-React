// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package system.proxies;

public class WorkflowActivityDetails
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject workflowActivityDetailsMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "System.WorkflowActivityDetails";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		ActivityId("ActivityId"),
		ActivityCaption("ActivityCaption"),
		ActivityType("ActivityType"),
		ExistsInCurrentVersion("ExistsInCurrentVersion");

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

	public WorkflowActivityDetails(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, entityName));
	}

	protected WorkflowActivityDetails(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject workflowActivityDetailsMendixObject)
	{
		if (workflowActivityDetailsMendixObject == null) {
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		}
		if (!com.mendix.core.Core.isSubClassOf(entityName, workflowActivityDetailsMendixObject.getType())) {
			throw new java.lang.IllegalArgumentException(String.format("The given object is not a %s", entityName));
		}	

		this.workflowActivityDetailsMendixObject = workflowActivityDetailsMendixObject;
		this.context = context;
	}

	/**
	 * @deprecated Use 'WorkflowActivityDetails.load(IContext, IMendixIdentifier)' instead.
	 */
	@java.lang.Deprecated
	public static system.proxies.WorkflowActivityDetails initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return system.proxies.WorkflowActivityDetails.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 * @param context The context to be used
	 * @param mendixObject The Mendix object for the new instance
	 * @return a new instance of this proxy class
	 */
	public static system.proxies.WorkflowActivityDetails initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new system.proxies.WorkflowActivityDetails(context, mendixObject);
	}

	public static system.proxies.WorkflowActivityDetails load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return system.proxies.WorkflowActivityDetails.initialize(context, mendixObject);
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
	 * @return value of ActivityId
	 */
	public final java.lang.String getActivityId()
	{
		return getActivityId(getContext());
	}

	/**
	 * @param context
	 * @return value of ActivityId
	 */
	public final java.lang.String getActivityId(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.ActivityId.toString());
	}

	/**
	 * Set value of ActivityId
	 * @param activityid
	 */
	public final void setActivityId(java.lang.String activityid)
	{
		setActivityId(getContext(), activityid);
	}

	/**
	 * Set value of ActivityId
	 * @param context
	 * @param activityid
	 */
	public final void setActivityId(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String activityid)
	{
		getMendixObject().setValue(context, MemberNames.ActivityId.toString(), activityid);
	}

	/**
	 * @return value of ActivityCaption
	 */
	public final java.lang.String getActivityCaption()
	{
		return getActivityCaption(getContext());
	}

	/**
	 * @param context
	 * @return value of ActivityCaption
	 */
	public final java.lang.String getActivityCaption(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.ActivityCaption.toString());
	}

	/**
	 * Set value of ActivityCaption
	 * @param activitycaption
	 */
	public final void setActivityCaption(java.lang.String activitycaption)
	{
		setActivityCaption(getContext(), activitycaption);
	}

	/**
	 * Set value of ActivityCaption
	 * @param context
	 * @param activitycaption
	 */
	public final void setActivityCaption(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String activitycaption)
	{
		getMendixObject().setValue(context, MemberNames.ActivityCaption.toString(), activitycaption);
	}

	/**
	 * @return value of ActivityType
	 */
	public final java.lang.String getActivityType()
	{
		return getActivityType(getContext());
	}

	/**
	 * @param context
	 * @return value of ActivityType
	 */
	public final java.lang.String getActivityType(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.ActivityType.toString());
	}

	/**
	 * Set value of ActivityType
	 * @param activitytype
	 */
	public final void setActivityType(java.lang.String activitytype)
	{
		setActivityType(getContext(), activitytype);
	}

	/**
	 * Set value of ActivityType
	 * @param context
	 * @param activitytype
	 */
	public final void setActivityType(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String activitytype)
	{
		getMendixObject().setValue(context, MemberNames.ActivityType.toString(), activitytype);
	}

	/**
	 * @return value of ExistsInCurrentVersion
	 */
	public final java.lang.Boolean getExistsInCurrentVersion()
	{
		return getExistsInCurrentVersion(getContext());
	}

	/**
	 * @param context
	 * @return value of ExistsInCurrentVersion
	 */
	public final java.lang.Boolean getExistsInCurrentVersion(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Boolean) getMendixObject().getValue(context, MemberNames.ExistsInCurrentVersion.toString());
	}

	/**
	 * Set value of ExistsInCurrentVersion
	 * @param existsincurrentversion
	 */
	public final void setExistsInCurrentVersion(java.lang.Boolean existsincurrentversion)
	{
		setExistsInCurrentVersion(getContext(), existsincurrentversion);
	}

	/**
	 * Set value of ExistsInCurrentVersion
	 * @param context
	 * @param existsincurrentversion
	 */
	public final void setExistsInCurrentVersion(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Boolean existsincurrentversion)
	{
		getMendixObject().setValue(context, MemberNames.ExistsInCurrentVersion.toString(), existsincurrentversion);
	}

	/**
	 * @return the IMendixObject instance of this proxy for use in the Core interface.
	 */
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return workflowActivityDetailsMendixObject;
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
			final system.proxies.WorkflowActivityDetails that = (system.proxies.WorkflowActivityDetails) obj;
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
