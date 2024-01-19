# `appServiceSourceControlSlot` Submodule <a name="`appServiceSourceControlSlot` Submodule" id="@cdktf/provider-azurerm.appServiceSourceControlSlot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceSourceControlSlot <a name="AppServiceSourceControlSlot" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot azurerm_app_service_source_control_slot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control_slot.AppServiceSourceControlSlot;

AppServiceSourceControlSlot.Builder.create(Construct scope, java.lang.String id)
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
    .slotId(java.lang.String)
//  .branch(java.lang.String)
//  .githubActionConfiguration(AppServiceSourceControlSlotGithubActionConfiguration)
//  .id(java.lang.String)
//  .repoUrl(java.lang.String)
//  .rollbackEnabled(java.lang.Boolean)
//  .rollbackEnabled(IResolvable)
//  .timeouts(AppServiceSourceControlSlotTimeouts)
//  .useLocalGit(java.lang.Boolean)
//  .useLocalGit(IResolvable)
//  .useManualIntegration(java.lang.Boolean)
//  .useManualIntegration(IResolvable)
//  .useMercurial(java.lang.Boolean)
//  .useMercurial(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.slotId">slotId</a></code> | <code>java.lang.String</code> | The ID of the Linux or Windows Web App Slot. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.branch">branch</a></code> | <code>java.lang.String</code> | The URL for the repository. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.githubActionConfiguration">githubActionConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration">AppServiceSourceControlSlotGithubActionConfiguration</a></code> | github_action_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#id AppServiceSourceControlSlot#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.repoUrl">repoUrl</a></code> | <code>java.lang.String</code> | The branch name to use for deployments. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.rollbackEnabled">rollbackEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the Deployment Rollback be enabled? Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts">AppServiceSourceControlSlotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.useLocalGit">useLocalGit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the Slot use local Git configuration. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.useManualIntegration">useManualIntegration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should code be deployed manually. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.useMercurial">useMercurial</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The repository specified is Mercurial. Defaults to `false`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `slotId`<sup>Required</sup> <a name="slotId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.slotId"></a>

- *Type:* java.lang.String

The ID of the Linux or Windows Web App Slot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#slot_id AppServiceSourceControlSlot#slot_id}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.branch"></a>

- *Type:* java.lang.String

The URL for the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#branch AppServiceSourceControlSlot#branch}

---

##### `githubActionConfiguration`<sup>Optional</sup> <a name="githubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.githubActionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration">AppServiceSourceControlSlotGithubActionConfiguration</a>

github_action_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#github_action_configuration AppServiceSourceControlSlot#github_action_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#id AppServiceSourceControlSlot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repoUrl`<sup>Optional</sup> <a name="repoUrl" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.repoUrl"></a>

- *Type:* java.lang.String

The branch name to use for deployments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#repo_url AppServiceSourceControlSlot#repo_url}

---

##### `rollbackEnabled`<sup>Optional</sup> <a name="rollbackEnabled" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.rollbackEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the Deployment Rollback be enabled? Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#rollback_enabled AppServiceSourceControlSlot#rollback_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts">AppServiceSourceControlSlotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#timeouts AppServiceSourceControlSlot#timeouts}

---

##### `useLocalGit`<sup>Optional</sup> <a name="useLocalGit" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.useLocalGit"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the Slot use local Git configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#use_local_git AppServiceSourceControlSlot#use_local_git}

---

##### `useManualIntegration`<sup>Optional</sup> <a name="useManualIntegration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.useManualIntegration"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should code be deployed manually.

Set to `true` to disable continuous integration, such as webhooks into online repos such as GitHub. Defaults to `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#use_manual_integration AppServiceSourceControlSlot#use_manual_integration}

---

##### `useMercurial`<sup>Optional</sup> <a name="useMercurial" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.useMercurial"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The repository specified is Mercurial. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#use_mercurial AppServiceSourceControlSlot#use_mercurial}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.putGithubActionConfiguration">putGithubActionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetGithubActionConfiguration">resetGithubActionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetRepoUrl">resetRepoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetRollbackEnabled">resetRollbackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetUseLocalGit">resetUseLocalGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetUseManualIntegration">resetUseManualIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetUseMercurial">resetUseMercurial</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGithubActionConfiguration` <a name="putGithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.putGithubActionConfiguration"></a>

```java
public void putGithubActionConfiguration(AppServiceSourceControlSlotGithubActionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.putGithubActionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration">AppServiceSourceControlSlotGithubActionConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.putTimeouts"></a>

```java
public void putTimeouts(AppServiceSourceControlSlotTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts">AppServiceSourceControlSlotTimeouts</a>

---

##### `resetBranch` <a name="resetBranch" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetBranch"></a>

```java
public void resetBranch()
```

##### `resetGithubActionConfiguration` <a name="resetGithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetGithubActionConfiguration"></a>

```java
public void resetGithubActionConfiguration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetId"></a>

```java
public void resetId()
```

##### `resetRepoUrl` <a name="resetRepoUrl" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetRepoUrl"></a>

```java
public void resetRepoUrl()
```

##### `resetRollbackEnabled` <a name="resetRollbackEnabled" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetRollbackEnabled"></a>

```java
public void resetRollbackEnabled()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUseLocalGit` <a name="resetUseLocalGit" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetUseLocalGit"></a>

```java
public void resetUseLocalGit()
```

##### `resetUseManualIntegration` <a name="resetUseManualIntegration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetUseManualIntegration"></a>

```java
public void resetUseManualIntegration()
```

##### `resetUseMercurial` <a name="resetUseMercurial" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetUseMercurial"></a>

```java
public void resetUseMercurial()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppServiceSourceControlSlot resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control_slot.AppServiceSourceControlSlot;

AppServiceSourceControlSlot.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control_slot.AppServiceSourceControlSlot;

AppServiceSourceControlSlot.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control_slot.AppServiceSourceControlSlot;

AppServiceSourceControlSlot.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control_slot.AppServiceSourceControlSlot;

AppServiceSourceControlSlot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppServiceSourceControlSlot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppServiceSourceControlSlot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppServiceSourceControlSlot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppServiceSourceControlSlot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppServiceSourceControlSlot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.githubActionConfiguration">githubActionConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference">AppServiceSourceControlSlotGithubActionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.scmType">scmType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference">AppServiceSourceControlSlotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.usesGithubAction">usesGithubAction</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.githubActionConfigurationInput">githubActionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration">AppServiceSourceControlSlotGithubActionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.repoUrlInput">repoUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.rollbackEnabledInput">rollbackEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.slotIdInput">slotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts">AppServiceSourceControlSlotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useLocalGitInput">useLocalGitInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useManualIntegrationInput">useManualIntegrationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useMercurialInput">useMercurialInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.repoUrl">repoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.rollbackEnabled">rollbackEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.slotId">slotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useLocalGit">useLocalGit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useManualIntegration">useManualIntegration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useMercurial">useMercurial</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `githubActionConfiguration`<sup>Required</sup> <a name="githubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.githubActionConfiguration"></a>

```java
public AppServiceSourceControlSlotGithubActionConfigurationOutputReference getGithubActionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference">AppServiceSourceControlSlotGithubActionConfigurationOutputReference</a>

---

##### `scmType`<sup>Required</sup> <a name="scmType" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.scmType"></a>

```java
public java.lang.String getScmType();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.timeouts"></a>

```java
public AppServiceSourceControlSlotTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference">AppServiceSourceControlSlotTimeoutsOutputReference</a>

---

##### `usesGithubAction`<sup>Required</sup> <a name="usesGithubAction" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.usesGithubAction"></a>

```java
public IResolvable getUsesGithubAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `githubActionConfigurationInput`<sup>Optional</sup> <a name="githubActionConfigurationInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.githubActionConfigurationInput"></a>

```java
public AppServiceSourceControlSlotGithubActionConfiguration getGithubActionConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration">AppServiceSourceControlSlotGithubActionConfiguration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `repoUrlInput`<sup>Optional</sup> <a name="repoUrlInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.repoUrlInput"></a>

```java
public java.lang.String getRepoUrlInput();
```

- *Type:* java.lang.String

---

##### `rollbackEnabledInput`<sup>Optional</sup> <a name="rollbackEnabledInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.rollbackEnabledInput"></a>

```java
public java.lang.Object getRollbackEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `slotIdInput`<sup>Optional</sup> <a name="slotIdInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.slotIdInput"></a>

```java
public java.lang.String getSlotIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts">AppServiceSourceControlSlotTimeouts</a>

---

##### `useLocalGitInput`<sup>Optional</sup> <a name="useLocalGitInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useLocalGitInput"></a>

```java
public java.lang.Object getUseLocalGitInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useManualIntegrationInput`<sup>Optional</sup> <a name="useManualIntegrationInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useManualIntegrationInput"></a>

```java
public java.lang.Object getUseManualIntegrationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useMercurialInput`<sup>Optional</sup> <a name="useMercurialInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useMercurialInput"></a>

```java
public java.lang.Object getUseMercurialInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `repoUrl`<sup>Required</sup> <a name="repoUrl" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.repoUrl"></a>

```java
public java.lang.String getRepoUrl();
```

- *Type:* java.lang.String

---

##### `rollbackEnabled`<sup>Required</sup> <a name="rollbackEnabled" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.rollbackEnabled"></a>

```java
public java.lang.Object getRollbackEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `slotId`<sup>Required</sup> <a name="slotId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.slotId"></a>

```java
public java.lang.String getSlotId();
```

- *Type:* java.lang.String

---

##### `useLocalGit`<sup>Required</sup> <a name="useLocalGit" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useLocalGit"></a>

```java
public java.lang.Object getUseLocalGit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useManualIntegration`<sup>Required</sup> <a name="useManualIntegration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useManualIntegration"></a>

```java
public java.lang.Object getUseManualIntegration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useMercurial`<sup>Required</sup> <a name="useMercurial" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useMercurial"></a>

```java
public java.lang.Object getUseMercurial();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceSourceControlSlotConfig <a name="AppServiceSourceControlSlotConfig" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control_slot.AppServiceSourceControlSlotConfig;

AppServiceSourceControlSlotConfig.builder()
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
    .slotId(java.lang.String)
//  .branch(java.lang.String)
//  .githubActionConfiguration(AppServiceSourceControlSlotGithubActionConfiguration)
//  .id(java.lang.String)
//  .repoUrl(java.lang.String)
//  .rollbackEnabled(java.lang.Boolean)
//  .rollbackEnabled(IResolvable)
//  .timeouts(AppServiceSourceControlSlotTimeouts)
//  .useLocalGit(java.lang.Boolean)
//  .useLocalGit(IResolvable)
//  .useManualIntegration(java.lang.Boolean)
//  .useManualIntegration(IResolvable)
//  .useMercurial(java.lang.Boolean)
//  .useMercurial(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.slotId">slotId</a></code> | <code>java.lang.String</code> | The ID of the Linux or Windows Web App Slot. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.branch">branch</a></code> | <code>java.lang.String</code> | The URL for the repository. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.githubActionConfiguration">githubActionConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration">AppServiceSourceControlSlotGithubActionConfiguration</a></code> | github_action_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#id AppServiceSourceControlSlot#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.repoUrl">repoUrl</a></code> | <code>java.lang.String</code> | The branch name to use for deployments. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.rollbackEnabled">rollbackEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the Deployment Rollback be enabled? Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts">AppServiceSourceControlSlotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.useLocalGit">useLocalGit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the Slot use local Git configuration. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.useManualIntegration">useManualIntegration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should code be deployed manually. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.useMercurial">useMercurial</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The repository specified is Mercurial. Defaults to `false`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `slotId`<sup>Required</sup> <a name="slotId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.slotId"></a>

```java
public java.lang.String getSlotId();
```

- *Type:* java.lang.String

The ID of the Linux or Windows Web App Slot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#slot_id AppServiceSourceControlSlot#slot_id}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

The URL for the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#branch AppServiceSourceControlSlot#branch}

---

##### `githubActionConfiguration`<sup>Optional</sup> <a name="githubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.githubActionConfiguration"></a>

```java
public AppServiceSourceControlSlotGithubActionConfiguration getGithubActionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration">AppServiceSourceControlSlotGithubActionConfiguration</a>

github_action_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#github_action_configuration AppServiceSourceControlSlot#github_action_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#id AppServiceSourceControlSlot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repoUrl`<sup>Optional</sup> <a name="repoUrl" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.repoUrl"></a>

```java
public java.lang.String getRepoUrl();
```

- *Type:* java.lang.String

The branch name to use for deployments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#repo_url AppServiceSourceControlSlot#repo_url}

---

##### `rollbackEnabled`<sup>Optional</sup> <a name="rollbackEnabled" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.rollbackEnabled"></a>

```java
public java.lang.Object getRollbackEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the Deployment Rollback be enabled? Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#rollback_enabled AppServiceSourceControlSlot#rollback_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.timeouts"></a>

```java
public AppServiceSourceControlSlotTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts">AppServiceSourceControlSlotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#timeouts AppServiceSourceControlSlot#timeouts}

---

##### `useLocalGit`<sup>Optional</sup> <a name="useLocalGit" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.useLocalGit"></a>

```java
public java.lang.Object getUseLocalGit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the Slot use local Git configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#use_local_git AppServiceSourceControlSlot#use_local_git}

---

##### `useManualIntegration`<sup>Optional</sup> <a name="useManualIntegration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.useManualIntegration"></a>

```java
public java.lang.Object getUseManualIntegration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should code be deployed manually.

Set to `true` to disable continuous integration, such as webhooks into online repos such as GitHub. Defaults to `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#use_manual_integration AppServiceSourceControlSlot#use_manual_integration}

---

##### `useMercurial`<sup>Optional</sup> <a name="useMercurial" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.useMercurial"></a>

```java
public java.lang.Object getUseMercurial();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The repository specified is Mercurial. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#use_mercurial AppServiceSourceControlSlot#use_mercurial}

---

### AppServiceSourceControlSlotGithubActionConfiguration <a name="AppServiceSourceControlSlotGithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control_slot.AppServiceSourceControlSlotGithubActionConfiguration;

AppServiceSourceControlSlotGithubActionConfiguration.builder()
//  .codeConfiguration(AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration)
//  .containerConfiguration(AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration)
//  .generateWorkflowFile(java.lang.Boolean)
//  .generateWorkflowFile(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration.property.codeConfiguration">codeConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration">AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration</a></code> | code_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration.property.containerConfiguration">containerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration">AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration</a></code> | container_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration.property.generateWorkflowFile">generateWorkflowFile</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the service generate the GitHub Action Workflow file. Defaults to `true`. |

---

##### `codeConfiguration`<sup>Optional</sup> <a name="codeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration.property.codeConfiguration"></a>

```java
public AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration getCodeConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration">AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration</a>

code_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#code_configuration AppServiceSourceControlSlot#code_configuration}

---

##### `containerConfiguration`<sup>Optional</sup> <a name="containerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration.property.containerConfiguration"></a>

```java
public AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration getContainerConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration">AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration</a>

container_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#container_configuration AppServiceSourceControlSlot#container_configuration}

---

##### `generateWorkflowFile`<sup>Optional</sup> <a name="generateWorkflowFile" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration.property.generateWorkflowFile"></a>

```java
public java.lang.Object getGenerateWorkflowFile();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the service generate the GitHub Action Workflow file. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#generate_workflow_file AppServiceSourceControlSlot#generate_workflow_file}

---

### AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration <a name="AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control_slot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration;

AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration.builder()
    .runtimeStack(java.lang.String)
    .runtimeVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration.property.runtimeStack">runtimeStack</a></code> | <code>java.lang.String</code> | The value to use for the Runtime Stack in the workflow file content for code base apps. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | The value to use for the Runtime Version in the workflow file content for code base apps. |

---

##### `runtimeStack`<sup>Required</sup> <a name="runtimeStack" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration.property.runtimeStack"></a>

```java
public java.lang.String getRuntimeStack();
```

- *Type:* java.lang.String

The value to use for the Runtime Stack in the workflow file content for code base apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#runtime_stack AppServiceSourceControlSlot#runtime_stack}

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

The value to use for the Runtime Version in the workflow file content for code base apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#runtime_version AppServiceSourceControlSlot#runtime_version}

---

### AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration <a name="AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control_slot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration;

AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration.builder()
    .imageName(java.lang.String)
    .registryUrl(java.lang.String)
//  .registryPassword(java.lang.String)
//  .registryUsername(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration.property.imageName">imageName</a></code> | <code>java.lang.String</code> | The image name for the build. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration.property.registryUrl">registryUrl</a></code> | <code>java.lang.String</code> | The server URL for the container registry where the build will be hosted. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration.property.registryPassword">registryPassword</a></code> | <code>java.lang.String</code> | The password used to upload the image to the container registry. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration.property.registryUsername">registryUsername</a></code> | <code>java.lang.String</code> | The username used to upload the image to the container registry. |

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

The image name for the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#image_name AppServiceSourceControlSlot#image_name}

---

##### `registryUrl`<sup>Required</sup> <a name="registryUrl" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration.property.registryUrl"></a>

```java
public java.lang.String getRegistryUrl();
```

- *Type:* java.lang.String

The server URL for the container registry where the build will be hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#registry_url AppServiceSourceControlSlot#registry_url}

---

##### `registryPassword`<sup>Optional</sup> <a name="registryPassword" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration.property.registryPassword"></a>

```java
public java.lang.String getRegistryPassword();
```

- *Type:* java.lang.String

The password used to upload the image to the container registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#registry_password AppServiceSourceControlSlot#registry_password}

---

##### `registryUsername`<sup>Optional</sup> <a name="registryUsername" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration.property.registryUsername"></a>

```java
public java.lang.String getRegistryUsername();
```

- *Type:* java.lang.String

The username used to upload the image to the container registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#registry_username AppServiceSourceControlSlot#registry_username}

---

### AppServiceSourceControlSlotTimeouts <a name="AppServiceSourceControlSlotTimeouts" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control_slot.AppServiceSourceControlSlotTimeouts;

AppServiceSourceControlSlotTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#create AppServiceSourceControlSlot#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#delete AppServiceSourceControlSlot#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#read AppServiceSourceControlSlot#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#create AppServiceSourceControlSlot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#delete AppServiceSourceControlSlot#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/app_service_source_control_slot#read AppServiceSourceControlSlot#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference <a name="AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control_slot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference;

new AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStackInput">runtimeStackInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStack">runtimeStack</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration">AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `runtimeStackInput`<sup>Optional</sup> <a name="runtimeStackInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStackInput"></a>

```java
public java.lang.String getRuntimeStackInput();
```

- *Type:* java.lang.String

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersionInput"></a>

```java
public java.lang.String getRuntimeVersionInput();
```

- *Type:* java.lang.String

---

##### `runtimeStack`<sup>Required</sup> <a name="runtimeStack" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStack"></a>

```java
public java.lang.String getRuntimeStack();
```

- *Type:* java.lang.String

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.internalValue"></a>

```java
public AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration">AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration</a>

---


### AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference <a name="AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control_slot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference;

new AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryPassword">resetRegistryPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryUsername">resetRegistryUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegistryPassword` <a name="resetRegistryPassword" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryPassword"></a>

```java
public void resetRegistryPassword()
```

##### `resetRegistryUsername` <a name="resetRegistryUsername" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryUsername"></a>

```java
public void resetRegistryUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryPasswordInput">registryPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrlInput">registryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsernameInput">registryUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryPassword">registryPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrl">registryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsername">registryUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration">AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `registryPasswordInput`<sup>Optional</sup> <a name="registryPasswordInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryPasswordInput"></a>

```java
public java.lang.String getRegistryPasswordInput();
```

- *Type:* java.lang.String

---

##### `registryUrlInput`<sup>Optional</sup> <a name="registryUrlInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrlInput"></a>

```java
public java.lang.String getRegistryUrlInput();
```

- *Type:* java.lang.String

---

##### `registryUsernameInput`<sup>Optional</sup> <a name="registryUsernameInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsernameInput"></a>

```java
public java.lang.String getRegistryUsernameInput();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `registryPassword`<sup>Required</sup> <a name="registryPassword" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryPassword"></a>

```java
public java.lang.String getRegistryPassword();
```

- *Type:* java.lang.String

---

##### `registryUrl`<sup>Required</sup> <a name="registryUrl" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrl"></a>

```java
public java.lang.String getRegistryUrl();
```

- *Type:* java.lang.String

---

##### `registryUsername`<sup>Required</sup> <a name="registryUsername" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsername"></a>

```java
public java.lang.String getRegistryUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.internalValue"></a>

```java
public AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration">AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration</a>

---


### AppServiceSourceControlSlotGithubActionConfigurationOutputReference <a name="AppServiceSourceControlSlotGithubActionConfigurationOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control_slot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference;

new AppServiceSourceControlSlotGithubActionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.putCodeConfiguration">putCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.putContainerConfiguration">putContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.resetCodeConfiguration">resetCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.resetContainerConfiguration">resetContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.resetGenerateWorkflowFile">resetGenerateWorkflowFile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeConfiguration` <a name="putCodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.putCodeConfiguration"></a>

```java
public void putCodeConfiguration(AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.putCodeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration">AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration</a>

---

##### `putContainerConfiguration` <a name="putContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.putContainerConfiguration"></a>

```java
public void putContainerConfiguration(AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.putContainerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration">AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration</a>

---

##### `resetCodeConfiguration` <a name="resetCodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.resetCodeConfiguration"></a>

```java
public void resetCodeConfiguration()
```

##### `resetContainerConfiguration` <a name="resetContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.resetContainerConfiguration"></a>

```java
public void resetContainerConfiguration()
```

##### `resetGenerateWorkflowFile` <a name="resetGenerateWorkflowFile" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.resetGenerateWorkflowFile"></a>

```java
public void resetGenerateWorkflowFile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.codeConfiguration">codeConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference">AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.containerConfiguration">containerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference">AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.linuxAction">linuxAction</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.codeConfigurationInput">codeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration">AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.containerConfigurationInput">containerConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration">AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.generateWorkflowFileInput">generateWorkflowFileInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.generateWorkflowFile">generateWorkflowFile</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration">AppServiceSourceControlSlotGithubActionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeConfiguration`<sup>Required</sup> <a name="codeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.codeConfiguration"></a>

```java
public AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference getCodeConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference">AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference</a>

---

##### `containerConfiguration`<sup>Required</sup> <a name="containerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.containerConfiguration"></a>

```java
public AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference getContainerConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference">AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference</a>

---

##### `linuxAction`<sup>Required</sup> <a name="linuxAction" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.linuxAction"></a>

```java
public IResolvable getLinuxAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `codeConfigurationInput`<sup>Optional</sup> <a name="codeConfigurationInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.codeConfigurationInput"></a>

```java
public AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration getCodeConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration">AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration</a>

---

##### `containerConfigurationInput`<sup>Optional</sup> <a name="containerConfigurationInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.containerConfigurationInput"></a>

```java
public AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration getContainerConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration">AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration</a>

---

##### `generateWorkflowFileInput`<sup>Optional</sup> <a name="generateWorkflowFileInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.generateWorkflowFileInput"></a>

```java
public java.lang.Object getGenerateWorkflowFileInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `generateWorkflowFile`<sup>Required</sup> <a name="generateWorkflowFile" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.generateWorkflowFile"></a>

```java
public java.lang.Object getGenerateWorkflowFile();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.internalValue"></a>

```java
public AppServiceSourceControlSlotGithubActionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration">AppServiceSourceControlSlotGithubActionConfiguration</a>

---


### AppServiceSourceControlSlotTimeoutsOutputReference <a name="AppServiceSourceControlSlotTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control_slot.AppServiceSourceControlSlotTimeoutsOutputReference;

new AppServiceSourceControlSlotTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts">AppServiceSourceControlSlotTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts">AppServiceSourceControlSlotTimeouts</a>

---



