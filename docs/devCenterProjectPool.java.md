# `devCenterProjectPool` Submodule <a name="`devCenterProjectPool` Submodule" id="@cdktf/provider-azurerm.devCenterProjectPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevCenterProjectPool <a name="DevCenterProjectPool" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool azurerm_dev_center_project_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_center_project_pool.DevCenterProjectPool;

DevCenterProjectPool.Builder.create(Construct scope, java.lang.String id)
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
    .devBoxDefinitionName(java.lang.String)
    .devCenterAttachedNetworkName(java.lang.String)
    .devCenterProjectId(java.lang.String)
    .localAdministratorEnabled(java.lang.Boolean)
    .localAdministratorEnabled(IResolvable)
    .location(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .managedVirtualNetworkRegions(java.util.List<java.lang.String>)
//  .singleSignOnEnabled(java.lang.Boolean)
//  .singleSignOnEnabled(IResolvable)
//  .stopOnDisconnectGracePeriodMinutes(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DevCenterProjectPoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.devBoxDefinitionName">devBoxDefinitionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#dev_box_definition_name DevCenterProjectPool#dev_box_definition_name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.devCenterAttachedNetworkName">devCenterAttachedNetworkName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#dev_center_attached_network_name DevCenterProjectPool#dev_center_attached_network_name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.devCenterProjectId">devCenterProjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#dev_center_project_id DevCenterProjectPool#dev_center_project_id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.localAdministratorEnabled">localAdministratorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#local_administrator_enabled DevCenterProjectPool#local_administrator_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#location DevCenterProjectPool#location}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#name DevCenterProjectPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#id DevCenterProjectPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.managedVirtualNetworkRegions">managedVirtualNetworkRegions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#managed_virtual_network_regions DevCenterProjectPool#managed_virtual_network_regions}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.singleSignOnEnabled">singleSignOnEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#single_sign_on_enabled DevCenterProjectPool#single_sign_on_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.stopOnDisconnectGracePeriodMinutes">stopOnDisconnectGracePeriodMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#stop_on_disconnect_grace_period_minutes DevCenterProjectPool#stop_on_disconnect_grace_period_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#tags DevCenterProjectPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `devBoxDefinitionName`<sup>Required</sup> <a name="devBoxDefinitionName" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.devBoxDefinitionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#dev_box_definition_name DevCenterProjectPool#dev_box_definition_name}.

---

##### `devCenterAttachedNetworkName`<sup>Required</sup> <a name="devCenterAttachedNetworkName" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.devCenterAttachedNetworkName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#dev_center_attached_network_name DevCenterProjectPool#dev_center_attached_network_name}.

---

##### `devCenterProjectId`<sup>Required</sup> <a name="devCenterProjectId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.devCenterProjectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#dev_center_project_id DevCenterProjectPool#dev_center_project_id}.

---

##### `localAdministratorEnabled`<sup>Required</sup> <a name="localAdministratorEnabled" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.localAdministratorEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#local_administrator_enabled DevCenterProjectPool#local_administrator_enabled}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#location DevCenterProjectPool#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#name DevCenterProjectPool#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#id DevCenterProjectPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedVirtualNetworkRegions`<sup>Optional</sup> <a name="managedVirtualNetworkRegions" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.managedVirtualNetworkRegions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#managed_virtual_network_regions DevCenterProjectPool#managed_virtual_network_regions}.

---

##### `singleSignOnEnabled`<sup>Optional</sup> <a name="singleSignOnEnabled" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.singleSignOnEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#single_sign_on_enabled DevCenterProjectPool#single_sign_on_enabled}.

---

##### `stopOnDisconnectGracePeriodMinutes`<sup>Optional</sup> <a name="stopOnDisconnectGracePeriodMinutes" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.stopOnDisconnectGracePeriodMinutes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#stop_on_disconnect_grace_period_minutes DevCenterProjectPool#stop_on_disconnect_grace_period_minutes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#tags DevCenterProjectPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#timeouts DevCenterProjectPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetManagedVirtualNetworkRegions">resetManagedVirtualNetworkRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetSingleSignOnEnabled">resetSingleSignOnEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetStopOnDisconnectGracePeriodMinutes">resetStopOnDisconnectGracePeriodMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.putTimeouts"></a>

```java
public void putTimeouts(DevCenterProjectPoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetId"></a>

```java
public void resetId()
```

##### `resetManagedVirtualNetworkRegions` <a name="resetManagedVirtualNetworkRegions" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetManagedVirtualNetworkRegions"></a>

```java
public void resetManagedVirtualNetworkRegions()
```

##### `resetSingleSignOnEnabled` <a name="resetSingleSignOnEnabled" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetSingleSignOnEnabled"></a>

```java
public void resetSingleSignOnEnabled()
```

##### `resetStopOnDisconnectGracePeriodMinutes` <a name="resetStopOnDisconnectGracePeriodMinutes" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetStopOnDisconnectGracePeriodMinutes"></a>

```java
public void resetStopOnDisconnectGracePeriodMinutes()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevCenterProjectPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_center_project_pool.DevCenterProjectPool;

DevCenterProjectPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_center_project_pool.DevCenterProjectPool;

DevCenterProjectPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_center_project_pool.DevCenterProjectPool;

DevCenterProjectPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_center_project_pool.DevCenterProjectPool;

DevCenterProjectPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevCenterProjectPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DevCenterProjectPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevCenterProjectPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevCenterProjectPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DevCenterProjectPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference">DevCenterProjectPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devBoxDefinitionNameInput">devBoxDefinitionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterAttachedNetworkNameInput">devCenterAttachedNetworkNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterProjectIdInput">devCenterProjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.localAdministratorEnabledInput">localAdministratorEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.managedVirtualNetworkRegionsInput">managedVirtualNetworkRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.singleSignOnEnabledInput">singleSignOnEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.stopOnDisconnectGracePeriodMinutesInput">stopOnDisconnectGracePeriodMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devBoxDefinitionName">devBoxDefinitionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterAttachedNetworkName">devCenterAttachedNetworkName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterProjectId">devCenterProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.localAdministratorEnabled">localAdministratorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.managedVirtualNetworkRegions">managedVirtualNetworkRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.singleSignOnEnabled">singleSignOnEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.stopOnDisconnectGracePeriodMinutes">stopOnDisconnectGracePeriodMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.timeouts"></a>

```java
public DevCenterProjectPoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference">DevCenterProjectPoolTimeoutsOutputReference</a>

---

##### `devBoxDefinitionNameInput`<sup>Optional</sup> <a name="devBoxDefinitionNameInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devBoxDefinitionNameInput"></a>

```java
public java.lang.String getDevBoxDefinitionNameInput();
```

- *Type:* java.lang.String

---

##### `devCenterAttachedNetworkNameInput`<sup>Optional</sup> <a name="devCenterAttachedNetworkNameInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterAttachedNetworkNameInput"></a>

```java
public java.lang.String getDevCenterAttachedNetworkNameInput();
```

- *Type:* java.lang.String

---

##### `devCenterProjectIdInput`<sup>Optional</sup> <a name="devCenterProjectIdInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterProjectIdInput"></a>

```java
public java.lang.String getDevCenterProjectIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `localAdministratorEnabledInput`<sup>Optional</sup> <a name="localAdministratorEnabledInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.localAdministratorEnabledInput"></a>

```java
public java.lang.Object getLocalAdministratorEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `managedVirtualNetworkRegionsInput`<sup>Optional</sup> <a name="managedVirtualNetworkRegionsInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.managedVirtualNetworkRegionsInput"></a>

```java
public java.util.List<java.lang.String> getManagedVirtualNetworkRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `singleSignOnEnabledInput`<sup>Optional</sup> <a name="singleSignOnEnabledInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.singleSignOnEnabledInput"></a>

```java
public java.lang.Object getSingleSignOnEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stopOnDisconnectGracePeriodMinutesInput`<sup>Optional</sup> <a name="stopOnDisconnectGracePeriodMinutesInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.stopOnDisconnectGracePeriodMinutesInput"></a>

```java
public java.lang.Number getStopOnDisconnectGracePeriodMinutesInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a>

---

##### `devBoxDefinitionName`<sup>Required</sup> <a name="devBoxDefinitionName" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devBoxDefinitionName"></a>

```java
public java.lang.String getDevBoxDefinitionName();
```

- *Type:* java.lang.String

---

##### `devCenterAttachedNetworkName`<sup>Required</sup> <a name="devCenterAttachedNetworkName" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterAttachedNetworkName"></a>

```java
public java.lang.String getDevCenterAttachedNetworkName();
```

- *Type:* java.lang.String

---

##### `devCenterProjectId`<sup>Required</sup> <a name="devCenterProjectId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.devCenterProjectId"></a>

```java
public java.lang.String getDevCenterProjectId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `localAdministratorEnabled`<sup>Required</sup> <a name="localAdministratorEnabled" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.localAdministratorEnabled"></a>

```java
public java.lang.Object getLocalAdministratorEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `managedVirtualNetworkRegions`<sup>Required</sup> <a name="managedVirtualNetworkRegions" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.managedVirtualNetworkRegions"></a>

```java
public java.util.List<java.lang.String> getManagedVirtualNetworkRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `singleSignOnEnabled`<sup>Required</sup> <a name="singleSignOnEnabled" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.singleSignOnEnabled"></a>

```java
public java.lang.Object getSingleSignOnEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stopOnDisconnectGracePeriodMinutes`<sup>Required</sup> <a name="stopOnDisconnectGracePeriodMinutes" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.stopOnDisconnectGracePeriodMinutes"></a>

```java
public java.lang.Number getStopOnDisconnectGracePeriodMinutes();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevCenterProjectPoolConfig <a name="DevCenterProjectPoolConfig" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_center_project_pool.DevCenterProjectPoolConfig;

DevCenterProjectPoolConfig.builder()
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
    .devBoxDefinitionName(java.lang.String)
    .devCenterAttachedNetworkName(java.lang.String)
    .devCenterProjectId(java.lang.String)
    .localAdministratorEnabled(java.lang.Boolean)
    .localAdministratorEnabled(IResolvable)
    .location(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .managedVirtualNetworkRegions(java.util.List<java.lang.String>)
//  .singleSignOnEnabled(java.lang.Boolean)
//  .singleSignOnEnabled(IResolvable)
//  .stopOnDisconnectGracePeriodMinutes(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DevCenterProjectPoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devBoxDefinitionName">devBoxDefinitionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#dev_box_definition_name DevCenterProjectPool#dev_box_definition_name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devCenterAttachedNetworkName">devCenterAttachedNetworkName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#dev_center_attached_network_name DevCenterProjectPool#dev_center_attached_network_name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devCenterProjectId">devCenterProjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#dev_center_project_id DevCenterProjectPool#dev_center_project_id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.localAdministratorEnabled">localAdministratorEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#local_administrator_enabled DevCenterProjectPool#local_administrator_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#location DevCenterProjectPool#location}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#name DevCenterProjectPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#id DevCenterProjectPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.managedVirtualNetworkRegions">managedVirtualNetworkRegions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#managed_virtual_network_regions DevCenterProjectPool#managed_virtual_network_regions}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.singleSignOnEnabled">singleSignOnEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#single_sign_on_enabled DevCenterProjectPool#single_sign_on_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.stopOnDisconnectGracePeriodMinutes">stopOnDisconnectGracePeriodMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#stop_on_disconnect_grace_period_minutes DevCenterProjectPool#stop_on_disconnect_grace_period_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#tags DevCenterProjectPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `devBoxDefinitionName`<sup>Required</sup> <a name="devBoxDefinitionName" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devBoxDefinitionName"></a>

```java
public java.lang.String getDevBoxDefinitionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#dev_box_definition_name DevCenterProjectPool#dev_box_definition_name}.

---

##### `devCenterAttachedNetworkName`<sup>Required</sup> <a name="devCenterAttachedNetworkName" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devCenterAttachedNetworkName"></a>

```java
public java.lang.String getDevCenterAttachedNetworkName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#dev_center_attached_network_name DevCenterProjectPool#dev_center_attached_network_name}.

---

##### `devCenterProjectId`<sup>Required</sup> <a name="devCenterProjectId" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.devCenterProjectId"></a>

```java
public java.lang.String getDevCenterProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#dev_center_project_id DevCenterProjectPool#dev_center_project_id}.

---

##### `localAdministratorEnabled`<sup>Required</sup> <a name="localAdministratorEnabled" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.localAdministratorEnabled"></a>

```java
public java.lang.Object getLocalAdministratorEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#local_administrator_enabled DevCenterProjectPool#local_administrator_enabled}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#location DevCenterProjectPool#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#name DevCenterProjectPool#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#id DevCenterProjectPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedVirtualNetworkRegions`<sup>Optional</sup> <a name="managedVirtualNetworkRegions" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.managedVirtualNetworkRegions"></a>

```java
public java.util.List<java.lang.String> getManagedVirtualNetworkRegions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#managed_virtual_network_regions DevCenterProjectPool#managed_virtual_network_regions}.

---

##### `singleSignOnEnabled`<sup>Optional</sup> <a name="singleSignOnEnabled" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.singleSignOnEnabled"></a>

```java
public java.lang.Object getSingleSignOnEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#single_sign_on_enabled DevCenterProjectPool#single_sign_on_enabled}.

---

##### `stopOnDisconnectGracePeriodMinutes`<sup>Optional</sup> <a name="stopOnDisconnectGracePeriodMinutes" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.stopOnDisconnectGracePeriodMinutes"></a>

```java
public java.lang.Number getStopOnDisconnectGracePeriodMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#stop_on_disconnect_grace_period_minutes DevCenterProjectPool#stop_on_disconnect_grace_period_minutes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#tags DevCenterProjectPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolConfig.property.timeouts"></a>

```java
public DevCenterProjectPoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#timeouts DevCenterProjectPool#timeouts}

---

### DevCenterProjectPoolTimeouts <a name="DevCenterProjectPoolTimeouts" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_center_project_pool.DevCenterProjectPoolTimeouts;

DevCenterProjectPoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#create DevCenterProjectPool#create}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#delete DevCenterProjectPool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#read DevCenterProjectPool#read}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#update DevCenterProjectPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#create DevCenterProjectPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#delete DevCenterProjectPool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#read DevCenterProjectPool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/dev_center_project_pool#update DevCenterProjectPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevCenterProjectPoolTimeoutsOutputReference <a name="DevCenterProjectPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_center_project_pool.DevCenterProjectPoolTimeoutsOutputReference;

new DevCenterProjectPoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devCenterProjectPool.DevCenterProjectPoolTimeouts">DevCenterProjectPoolTimeouts</a>

---



