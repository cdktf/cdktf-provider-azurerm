# `sentinelLogAnalyticsWorkspaceOnboarding` Submodule <a name="`sentinelLogAnalyticsWorkspaceOnboarding` Submodule" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelLogAnalyticsWorkspaceOnboarding <a name="SentinelLogAnalyticsWorkspaceOnboarding" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding azurerm_sentinel_log_analytics_workspace_onboarding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_log_analytics_workspace_onboarding.SentinelLogAnalyticsWorkspaceOnboarding;

SentinelLogAnalyticsWorkspaceOnboarding.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .customerManagedKeyEnabled(java.lang.Boolean)
//  .customerManagedKeyEnabled(IResolvable)
//  .id(java.lang.String)
//  .resourceGroupName(java.lang.String)
//  .timeouts(SentinelLogAnalyticsWorkspaceOnboardingTimeouts)
//  .workspaceId(java.lang.String)
//  .workspaceName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.customerManagedKeyEnabled">customerManagedKeyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#customer_managed_key_enabled SentinelLogAnalyticsWorkspaceOnboarding#customer_managed_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#id SentinelLogAnalyticsWorkspaceOnboarding#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#resource_group_name SentinelLogAnalyticsWorkspaceOnboarding#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_id SentinelLogAnalyticsWorkspaceOnboarding#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.workspaceName">workspaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_name SentinelLogAnalyticsWorkspaceOnboarding#workspace_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customerManagedKeyEnabled`<sup>Optional</sup> <a name="customerManagedKeyEnabled" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.customerManagedKeyEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#customer_managed_key_enabled SentinelLogAnalyticsWorkspaceOnboarding#customer_managed_key_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#id SentinelLogAnalyticsWorkspaceOnboarding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceGroupName`<sup>Optional</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#resource_group_name SentinelLogAnalyticsWorkspaceOnboarding#resource_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#timeouts SentinelLogAnalyticsWorkspaceOnboarding#timeouts}

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_id SentinelLogAnalyticsWorkspaceOnboarding#workspace_id}.

---

##### `workspaceName`<sup>Optional</sup> <a name="workspaceName" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.workspaceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_name SentinelLogAnalyticsWorkspaceOnboarding#workspace_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetCustomerManagedKeyEnabled">resetCustomerManagedKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetResourceGroupName">resetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetWorkspaceName">resetWorkspaceName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.putTimeouts"></a>

```java
public void putTimeouts(SentinelLogAnalyticsWorkspaceOnboardingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a>

---

##### `resetCustomerManagedKeyEnabled` <a name="resetCustomerManagedKeyEnabled" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetCustomerManagedKeyEnabled"></a>

```java
public void resetCustomerManagedKeyEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetId"></a>

```java
public void resetId()
```

##### `resetResourceGroupName` <a name="resetResourceGroupName" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetResourceGroupName"></a>

```java
public void resetResourceGroupName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```

##### `resetWorkspaceName` <a name="resetWorkspaceName" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetWorkspaceName"></a>

```java
public void resetWorkspaceName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelLogAnalyticsWorkspaceOnboarding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_log_analytics_workspace_onboarding.SentinelLogAnalyticsWorkspaceOnboarding;

SentinelLogAnalyticsWorkspaceOnboarding.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_log_analytics_workspace_onboarding.SentinelLogAnalyticsWorkspaceOnboarding;

SentinelLogAnalyticsWorkspaceOnboarding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_log_analytics_workspace_onboarding.SentinelLogAnalyticsWorkspaceOnboarding;

SentinelLogAnalyticsWorkspaceOnboarding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_log_analytics_workspace_onboarding.SentinelLogAnalyticsWorkspaceOnboarding;

SentinelLogAnalyticsWorkspaceOnboarding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SentinelLogAnalyticsWorkspaceOnboarding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SentinelLogAnalyticsWorkspaceOnboarding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SentinelLogAnalyticsWorkspaceOnboarding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SentinelLogAnalyticsWorkspaceOnboarding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SentinelLogAnalyticsWorkspaceOnboarding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference">SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.customerManagedKeyEnabledInput">customerManagedKeyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceNameInput">workspaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.customerManagedKeyEnabled">customerManagedKeyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceName">workspaceName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.timeouts"></a>

```java
public SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference">SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference</a>

---

##### `customerManagedKeyEnabledInput`<sup>Optional</sup> <a name="customerManagedKeyEnabledInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.customerManagedKeyEnabledInput"></a>

```java
public java.lang.Object getCustomerManagedKeyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceNameInput`<sup>Optional</sup> <a name="workspaceNameInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceNameInput"></a>

```java
public java.lang.String getWorkspaceNameInput();
```

- *Type:* java.lang.String

---

##### `customerManagedKeyEnabled`<sup>Required</sup> <a name="customerManagedKeyEnabled" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.customerManagedKeyEnabled"></a>

```java
public java.lang.Object getCustomerManagedKeyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceName"></a>

```java
public java.lang.String getWorkspaceName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelLogAnalyticsWorkspaceOnboardingConfig <a name="SentinelLogAnalyticsWorkspaceOnboardingConfig" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_log_analytics_workspace_onboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig;

SentinelLogAnalyticsWorkspaceOnboardingConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .customerManagedKeyEnabled(java.lang.Boolean)
//  .customerManagedKeyEnabled(IResolvable)
//  .id(java.lang.String)
//  .resourceGroupName(java.lang.String)
//  .timeouts(SentinelLogAnalyticsWorkspaceOnboardingTimeouts)
//  .workspaceId(java.lang.String)
//  .workspaceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.customerManagedKeyEnabled">customerManagedKeyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#customer_managed_key_enabled SentinelLogAnalyticsWorkspaceOnboarding#customer_managed_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#id SentinelLogAnalyticsWorkspaceOnboarding#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#resource_group_name SentinelLogAnalyticsWorkspaceOnboarding#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_id SentinelLogAnalyticsWorkspaceOnboarding#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.workspaceName">workspaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_name SentinelLogAnalyticsWorkspaceOnboarding#workspace_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customerManagedKeyEnabled`<sup>Optional</sup> <a name="customerManagedKeyEnabled" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.customerManagedKeyEnabled"></a>

```java
public java.lang.Object getCustomerManagedKeyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#customer_managed_key_enabled SentinelLogAnalyticsWorkspaceOnboarding#customer_managed_key_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#id SentinelLogAnalyticsWorkspaceOnboarding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceGroupName`<sup>Optional</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#resource_group_name SentinelLogAnalyticsWorkspaceOnboarding#resource_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.timeouts"></a>

```java
public SentinelLogAnalyticsWorkspaceOnboardingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#timeouts SentinelLogAnalyticsWorkspaceOnboarding#timeouts}

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_id SentinelLogAnalyticsWorkspaceOnboarding#workspace_id}.

---

##### `workspaceName`<sup>Optional</sup> <a name="workspaceName" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.workspaceName"></a>

```java
public java.lang.String getWorkspaceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_name SentinelLogAnalyticsWorkspaceOnboarding#workspace_name}.

---

### SentinelLogAnalyticsWorkspaceOnboardingTimeouts <a name="SentinelLogAnalyticsWorkspaceOnboardingTimeouts" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_log_analytics_workspace_onboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts;

SentinelLogAnalyticsWorkspaceOnboardingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#create SentinelLogAnalyticsWorkspaceOnboarding#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#delete SentinelLogAnalyticsWorkspaceOnboarding#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#read SentinelLogAnalyticsWorkspaceOnboarding#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#create SentinelLogAnalyticsWorkspaceOnboarding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#delete SentinelLogAnalyticsWorkspaceOnboarding#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/sentinel_log_analytics_workspace_onboarding#read SentinelLogAnalyticsWorkspaceOnboarding#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference <a name="SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sentinel_log_analytics_workspace_onboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference;

new SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a>

---



