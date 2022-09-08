// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package system.proxies;

public class WorkflowJumpToDetails
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject workflowJumpToDetailsMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "System.WorkflowJumpToDetails";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Error("Error"),
		WorkflowJumpToDetails_Workflow("System.WorkflowJumpToDetails_Workflow"),
		WorkflowJumpToDetails_AvailableActivities("System.WorkflowJumpToDetails_AvailableActivities"),
		WorkflowJumpToDetails_CurrentActivities("System.WorkflowJumpToDetails_CurrentActivities");

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

	public WorkflowJumpToDetails(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, entityName));
	}

	protected WorkflowJumpToDetails(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject workflowJumpToDetailsMendixObject)
	{
		if (workflowJumpToDetailsMendixObject == null) {
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		}
		if (!com.mendix.core.Core.isSubClassOf(entityName, workflowJumpToDetailsMendixObject.getType())) {
			throw new java.lang.IllegalArgumentException(String.format("The given object is not a %s", entityName));
		}	

		this.workflowJumpToDetailsMendixObject = workflowJumpToDetailsMendixObject;
		this.context = context;
	}

	/**
	 * @deprecated Use 'WorkflowJumpToDetails.load(IContext, IMendixIdentifier)' instead.
	 */
	@java.lang.Deprecated
	public static system.proxies.WorkflowJumpToDetails initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return system.proxies.WorkflowJumpToDetails.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 * @param context The context to be used
	 * @param mendixObject The Mendix object for the new instance
	 * @return a new instance of this proxy class
	 */
	public static system.proxies.WorkflowJumpToDetails initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new system.proxies.WorkflowJumpToDetails(context, mendixObject);
	}

	public static system.proxies.WorkflowJumpToDetails load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return system.proxies.WorkflowJumpToDetails.initialize(context, mendixObject);
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
	 * @return value of Error
	 */
	public final java.lang.String getError()
	{
		return getError(getContext());
	}

	/**
	 * @param context
	 * @return value of Error
	 */
	public final java.lang.String getError(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.Error.toString());
	}

	/**
	 * Set value of Error
	 * @param error
	 */
	public final void setError(java.lang.String error)
	{
		setError(getContext(), error);
	}

	/**
	 * Set value of Error
	 * @param context
	 * @param error
	 */
	public final void setError(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String error)
	{
		getMendixObject().setValue(context, MemberNames.Error.toString(), error);
	}

	/**
	 * @throws com.mendix.core.CoreException
	 * @return value of WorkflowJumpToDetails_Workflow
	 */
	public final system.proxies.Workflow getWorkflowJumpToDetails_Workflow() throws com.mendix.core.CoreException
	{
		return getWorkflowJumpToDetails_Workflow(getContext());
	}

	/**
	 * @param context
	 * @return value of WorkflowJumpToDetails_Workflow
	 * @throws com.mendix.core.CoreException
	 */
	public final system.proxies.Workflow getWorkflowJumpToDetails_Workflow(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		system.proxies.Workflow result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.WorkflowJumpToDetails_Workflow.toString());
		if (identifier != null) {
			result = system.proxies.Workflow.load(context, identifier);
		}
		return result;
	}

	/**
	 * Set value of WorkflowJumpToDetails_Workflow
	 * @param workflowjumptodetails_workflow
	 */
	public final void setWorkflowJumpToDetails_Workflow(system.proxies.Workflow workflowjumptodetails_workflow)
	{
		setWorkflowJumpToDetails_Workflow(getContext(), workflowjumptodetails_workflow);
	}

	/**
	 * Set value of WorkflowJumpToDetails_Workflow
	 * @param context
	 * @param workflowjumptodetails_workflow
	 */
	public final void setWorkflowJumpToDetails_Workflow(com.mendix.systemwideinterfaces.core.IContext context, system.proxies.Workflow workflowjumptodetails_workflow)
	{
		if (workflowjumptodetails_workflow == null) {
			getMendixObject().setValue(context, MemberNames.WorkflowJumpToDetails_Workflow.toString(), null);
		} else {
			getMendixObject().setValue(context, MemberNames.WorkflowJumpToDetails_Workflow.toString(), workflowjumptodetails_workflow.getMendixObject().getId());
		}
	}

	/**
	 * @throws com.mendix.core.CoreException
	 * @return value of WorkflowJumpToDetails_AvailableActivities
	 */
	public final java.util.List<system.proxies.WorkflowActivityDetails> getWorkflowJumpToDetails_AvailableActivities() throws com.mendix.core.CoreException
	{
		return getWorkflowJumpToDetails_AvailableActivities(getContext());
	}

	/**
	 * @param context
	 * @return value of WorkflowJumpToDetails_AvailableActivities
	 * @throws com.mendix.core.CoreException
	 */
	@SuppressWarnings("unchecked")
	public final java.util.List<system.proxies.WorkflowActivityDetails> getWorkflowJumpToDetails_AvailableActivities(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		java.util.List<system.proxies.WorkflowActivityDetails> result = new java.util.ArrayList<>();
		Object valueObject = getMendixObject().getValue(context, MemberNames.WorkflowJumpToDetails_AvailableActivities.toString());
		if (valueObject == null) {
			return result;
		}
		for (com.mendix.systemwideinterfaces.core.IMendixObject mendixObject : com.mendix.core.Core.retrieveIdList(context, (java.util.List<com.mendix.systemwideinterfaces.core.IMendixIdentifier>) valueObject)) {
			result.add(system.proxies.WorkflowActivityDetails.initialize(context, mendixObject));
		}
		return result;
	}

	/**
	 * Set value of WorkflowJumpToDetails_AvailableActivities
	 * @param workflowjumptodetails_availableactivities
	 */
	public final void setWorkflowJumpToDetails_AvailableActivities(java.util.List<system.proxies.WorkflowActivityDetails> workflowjumptodetails_availableactivities)
	{
		setWorkflowJumpToDetails_AvailableActivities(getContext(), workflowjumptodetails_availableactivities);
	}

	/**
	 * Set value of WorkflowJumpToDetails_AvailableActivities
	 * @param context
	 * @param workflowjumptodetails_availableactivities
	 */
	public final void setWorkflowJumpToDetails_AvailableActivities(com.mendix.systemwideinterfaces.core.IContext context, java.util.List<system.proxies.WorkflowActivityDetails> workflowjumptodetails_availableactivities)
	{
		var identifiers = workflowjumptodetails_availableactivities
			.stream()
			.map(proxyObject -> proxyObject.getMendixObject().getId())
			.collect(java.util.stream.Collectors.toList());
		
		getMendixObject().setValue(context, MemberNames.WorkflowJumpToDetails_AvailableActivities.toString(), identifiers);
	}

	/**
	 * @throws com.mendix.core.CoreException
	 * @return value of WorkflowJumpToDetails_CurrentActivities
	 */
	public final java.util.List<system.proxies.WorkflowCurrentActivity> getWorkflowJumpToDetails_CurrentActivities() throws com.mendix.core.CoreException
	{
		return getWorkflowJumpToDetails_CurrentActivities(getContext());
	}

	/**
	 * @param context
	 * @return value of WorkflowJumpToDetails_CurrentActivities
	 * @throws com.mendix.core.CoreException
	 */
	@SuppressWarnings("unchecked")
	public final java.util.List<system.proxies.WorkflowCurrentActivity> getWorkflowJumpToDetails_CurrentActivities(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		java.util.List<system.proxies.WorkflowCurrentActivity> result = new java.util.ArrayList<>();
		Object valueObject = getMendixObject().getValue(context, MemberNames.WorkflowJumpToDetails_CurrentActivities.toString());
		if (valueObject == null) {
			return result;
		}
		for (com.mendix.systemwideinterfaces.core.IMendixObject mendixObject : com.mendix.core.Core.retrieveIdList(context, (java.util.List<com.mendix.systemwideinterfaces.core.IMendixIdentifier>) valueObject)) {
			result.add(system.proxies.WorkflowCurrentActivity.initialize(context, mendixObject));
		}
		return result;
	}

	/**
	 * Set value of WorkflowJumpToDetails_CurrentActivities
	 * @param workflowjumptodetails_currentactivities
	 */
	public final void setWorkflowJumpToDetails_CurrentActivities(java.util.List<system.proxies.WorkflowCurrentActivity> workflowjumptodetails_currentactivities)
	{
		setWorkflowJumpToDetails_CurrentActivities(getContext(), workflowjumptodetails_currentactivities);
	}

	/**
	 * Set value of WorkflowJumpToDetails_CurrentActivities
	 * @param context
	 * @param workflowjumptodetails_currentactivities
	 */
	public final void setWorkflowJumpToDetails_CurrentActivities(com.mendix.systemwideinterfaces.core.IContext context, java.util.List<system.proxies.WorkflowCurrentActivity> workflowjumptodetails_currentactivities)
	{
		var identifiers = workflowjumptodetails_currentactivities
			.stream()
			.map(proxyObject -> proxyObject.getMendixObject().getId())
			.collect(java.util.stream.Collectors.toList());
		
		getMendixObject().setValue(context, MemberNames.WorkflowJumpToDetails_CurrentActivities.toString(), identifiers);
	}

	/**
	 * @return the IMendixObject instance of this proxy for use in the Core interface.
	 */
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return workflowJumpToDetailsMendixObject;
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
			final system.proxies.WorkflowJumpToDetails that = (system.proxies.WorkflowJumpToDetails) obj;
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
