# `appServiceSourceControl` Submodule <a name="`appServiceSourceControl` Submodule" id="@cdktf/provider-azurerm.appServiceSourceControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceSourceControlA <a name="AppServiceSourceControlA" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control azurerm_app_service_source_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control.AppServiceSourceControlA;

AppServiceSourceControlA.Builder.create(Construct scope, java.lang.String id)
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
    .appId(java.lang.String)
//  .branch(java.lang.String)
//  .githubActionConfiguration(AppServiceSourceControlGithubActionConfiguration)
//  .id(java.lang.String)
//  .repoUrl(java.lang.String)
//  .rollbackEnabled(java.lang.Boolean)
//  .rollbackEnabled(IResolvable)
//  .timeouts(AppServiceSourceControlTimeouts)
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
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.appId">appId</a></code> | <code>java.lang.String</code> | The ID of the Windows or Linux Web App. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.branch">branch</a></code> | <code>java.lang.String</code> | The branch name to use for deployments. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.githubActionConfiguration">githubActionConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a></code> | github_action_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#id AppServiceSourceControlA#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.repoUrl">repoUrl</a></code> | <code>java.lang.String</code> | The URL for the repository. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.rollbackEnabled">rollbackEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the Deployment Rollback be enabled? Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.useLocalGit">useLocalGit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the App use local Git configuration. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.useManualIntegration">useManualIntegration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should code be deployed manually. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.useMercurial">useMercurial</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The repository specified is Mercurial. Defaults to `false`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.appId"></a>

- *Type:* java.lang.String

The ID of the Windows or Linux Web App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#app_id AppServiceSourceControlA#app_id}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.branch"></a>

- *Type:* java.lang.String

The branch name to use for deployments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#branch AppServiceSourceControlA#branch}

---

##### `githubActionConfiguration`<sup>Optional</sup> <a name="githubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.githubActionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a>

github_action_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#github_action_configuration AppServiceSourceControlA#github_action_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#id AppServiceSourceControlA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repoUrl`<sup>Optional</sup> <a name="repoUrl" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.repoUrl"></a>

- *Type:* java.lang.String

The URL for the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#repo_url AppServiceSourceControlA#repo_url}

---

##### `rollbackEnabled`<sup>Optional</sup> <a name="rollbackEnabled" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.rollbackEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the Deployment Rollback be enabled? Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#rollback_enabled AppServiceSourceControlA#rollback_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#timeouts AppServiceSourceControlA#timeouts}

---

##### `useLocalGit`<sup>Optional</sup> <a name="useLocalGit" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.useLocalGit"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the App use local Git configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#use_local_git AppServiceSourceControlA#use_local_git}

---

##### `useManualIntegration`<sup>Optional</sup> <a name="useManualIntegration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.useManualIntegration"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should code be deployed manually.

Set to `false` to enable continuous integration, such as webhooks into online repos such as GitHub. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#use_manual_integration AppServiceSourceControlA#use_manual_integration}

---

##### `useMercurial`<sup>Optional</sup> <a name="useMercurial" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.useMercurial"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The repository specified is Mercurial. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#use_mercurial AppServiceSourceControlA#use_mercurial}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putGithubActionConfiguration">putGithubActionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetGithubActionConfiguration">resetGithubActionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetRepoUrl">resetRepoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetRollbackEnabled">resetRollbackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseLocalGit">resetUseLocalGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseManualIntegration">resetUseManualIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseMercurial">resetUseMercurial</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGithubActionConfiguration` <a name="putGithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putGithubActionConfiguration"></a>

```java
public void putGithubActionConfiguration(AppServiceSourceControlGithubActionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putGithubActionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putTimeouts"></a>

```java
public void putTimeouts(AppServiceSourceControlTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a>

---

##### `resetBranch` <a name="resetBranch" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetBranch"></a>

```java
public void resetBranch()
```

##### `resetGithubActionConfiguration` <a name="resetGithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetGithubActionConfiguration"></a>

```java
public void resetGithubActionConfiguration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetId"></a>

```java
public void resetId()
```

##### `resetRepoUrl` <a name="resetRepoUrl" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetRepoUrl"></a>

```java
public void resetRepoUrl()
```

##### `resetRollbackEnabled` <a name="resetRollbackEnabled" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetRollbackEnabled"></a>

```java
public void resetRollbackEnabled()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUseLocalGit` <a name="resetUseLocalGit" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseLocalGit"></a>

```java
public void resetUseLocalGit()
```

##### `resetUseManualIntegration` <a name="resetUseManualIntegration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseManualIntegration"></a>

```java
public void resetUseManualIntegration()
```

##### `resetUseMercurial` <a name="resetUseMercurial" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseMercurial"></a>

```java
public void resetUseMercurial()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppServiceSourceControlA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control.AppServiceSourceControlA;

AppServiceSourceControlA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control.AppServiceSourceControlA;

AppServiceSourceControlA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control.AppServiceSourceControlA;

AppServiceSourceControlA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control.AppServiceSourceControlA;

AppServiceSourceControlA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppServiceSourceControlA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppServiceSourceControlA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppServiceSourceControlA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppServiceSourceControlA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppServiceSourceControlA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.githubActionConfiguration">githubActionConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.scmType">scmType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference">AppServiceSourceControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.usesGithubAction">usesGithubAction</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.githubActionConfigurationInput">githubActionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.repoUrlInput">repoUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.rollbackEnabledInput">rollbackEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useLocalGitInput">useLocalGitInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useManualIntegrationInput">useManualIntegrationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useMercurialInput">useMercurialInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.repoUrl">repoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.rollbackEnabled">rollbackEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useLocalGit">useLocalGit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useManualIntegration">useManualIntegration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useMercurial">useMercurial</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `githubActionConfiguration`<sup>Required</sup> <a name="githubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.githubActionConfiguration"></a>

```java
public AppServiceSourceControlGithubActionConfigurationOutputReference getGithubActionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationOutputReference</a>

---

##### `scmType`<sup>Required</sup> <a name="scmType" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.scmType"></a>

```java
public java.lang.String getScmType();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.timeouts"></a>

```java
public AppServiceSourceControlTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference">AppServiceSourceControlTimeoutsOutputReference</a>

---

##### `usesGithubAction`<sup>Required</sup> <a name="usesGithubAction" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.usesGithubAction"></a>

```java
public IResolvable getUsesGithubAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `githubActionConfigurationInput`<sup>Optional</sup> <a name="githubActionConfigurationInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.githubActionConfigurationInput"></a>

```java
public AppServiceSourceControlGithubActionConfiguration getGithubActionConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `repoUrlInput`<sup>Optional</sup> <a name="repoUrlInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.repoUrlInput"></a>

```java
public java.lang.String getRepoUrlInput();
```

- *Type:* java.lang.String

---

##### `rollbackEnabledInput`<sup>Optional</sup> <a name="rollbackEnabledInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.rollbackEnabledInput"></a>

```java
public java.lang.Object getRollbackEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a>

---

##### `useLocalGitInput`<sup>Optional</sup> <a name="useLocalGitInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useLocalGitInput"></a>

```java
public java.lang.Object getUseLocalGitInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useManualIntegrationInput`<sup>Optional</sup> <a name="useManualIntegrationInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useManualIntegrationInput"></a>

```java
public java.lang.Object getUseManualIntegrationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useMercurialInput`<sup>Optional</sup> <a name="useMercurialInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useMercurialInput"></a>

```java
public java.lang.Object getUseMercurialInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `repoUrl`<sup>Required</sup> <a name="repoUrl" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.repoUrl"></a>

```java
public java.lang.String getRepoUrl();
```

- *Type:* java.lang.String

---

##### `rollbackEnabled`<sup>Required</sup> <a name="rollbackEnabled" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.rollbackEnabled"></a>

```java
public java.lang.Object getRollbackEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useLocalGit`<sup>Required</sup> <a name="useLocalGit" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useLocalGit"></a>

```java
public java.lang.Object getUseLocalGit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useManualIntegration`<sup>Required</sup> <a name="useManualIntegration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useManualIntegration"></a>

```java
public java.lang.Object getUseManualIntegration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useMercurial`<sup>Required</sup> <a name="useMercurial" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useMercurial"></a>

```java
public java.lang.Object getUseMercurial();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceSourceControlAConfig <a name="AppServiceSourceControlAConfig" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control.AppServiceSourceControlAConfig;

AppServiceSourceControlAConfig.builder()
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
    .appId(java.lang.String)
//  .branch(java.lang.String)
//  .githubActionConfiguration(AppServiceSourceControlGithubActionConfiguration)
//  .id(java.lang.String)
//  .repoUrl(java.lang.String)
//  .rollbackEnabled(java.lang.Boolean)
//  .rollbackEnabled(IResolvable)
//  .timeouts(AppServiceSourceControlTimeouts)
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
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | The ID of the Windows or Linux Web App. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.branch">branch</a></code> | <code>java.lang.String</code> | The branch name to use for deployments. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.githubActionConfiguration">githubActionConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a></code> | github_action_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#id AppServiceSourceControlA#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.repoUrl">repoUrl</a></code> | <code>java.lang.String</code> | The URL for the repository. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.rollbackEnabled">rollbackEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the Deployment Rollback be enabled? Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useLocalGit">useLocalGit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the App use local Git configuration. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useManualIntegration">useManualIntegration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should code be deployed manually. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useMercurial">useMercurial</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The repository specified is Mercurial. Defaults to `false`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

The ID of the Windows or Linux Web App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#app_id AppServiceSourceControlA#app_id}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

The branch name to use for deployments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#branch AppServiceSourceControlA#branch}

---

##### `githubActionConfiguration`<sup>Optional</sup> <a name="githubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.githubActionConfiguration"></a>

```java
public AppServiceSourceControlGithubActionConfiguration getGithubActionConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a>

github_action_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#github_action_configuration AppServiceSourceControlA#github_action_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#id AppServiceSourceControlA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repoUrl`<sup>Optional</sup> <a name="repoUrl" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.repoUrl"></a>

```java
public java.lang.String getRepoUrl();
```

- *Type:* java.lang.String

The URL for the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#repo_url AppServiceSourceControlA#repo_url}

---

##### `rollbackEnabled`<sup>Optional</sup> <a name="rollbackEnabled" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.rollbackEnabled"></a>

```java
public java.lang.Object getRollbackEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the Deployment Rollback be enabled? Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#rollback_enabled AppServiceSourceControlA#rollback_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.timeouts"></a>

```java
public AppServiceSourceControlTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#timeouts AppServiceSourceControlA#timeouts}

---

##### `useLocalGit`<sup>Optional</sup> <a name="useLocalGit" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useLocalGit"></a>

```java
public java.lang.Object getUseLocalGit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the App use local Git configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#use_local_git AppServiceSourceControlA#use_local_git}

---

##### `useManualIntegration`<sup>Optional</sup> <a name="useManualIntegration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useManualIntegration"></a>

```java
public java.lang.Object getUseManualIntegration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should code be deployed manually.

Set to `false` to enable continuous integration, such as webhooks into online repos such as GitHub. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#use_manual_integration AppServiceSourceControlA#use_manual_integration}

---

##### `useMercurial`<sup>Optional</sup> <a name="useMercurial" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useMercurial"></a>

```java
public java.lang.Object getUseMercurial();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The repository specified is Mercurial. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#use_mercurial AppServiceSourceControlA#use_mercurial}

---

### AppServiceSourceControlGithubActionConfiguration <a name="AppServiceSourceControlGithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control.AppServiceSourceControlGithubActionConfiguration;

AppServiceSourceControlGithubActionConfiguration.builder()
//  .codeConfiguration(AppServiceSourceControlGithubActionConfigurationCodeConfiguration)
//  .containerConfiguration(AppServiceSourceControlGithubActionConfigurationContainerConfiguration)
//  .generateWorkflowFile(java.lang.Boolean)
//  .generateWorkflowFile(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.codeConfiguration">codeConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a></code> | code_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.containerConfiguration">containerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a></code> | container_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.generateWorkflowFile">generateWorkflowFile</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the service generate the GitHub Action Workflow file. Defaults to `true`. |

---

##### `codeConfiguration`<sup>Optional</sup> <a name="codeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.codeConfiguration"></a>

```java
public AppServiceSourceControlGithubActionConfigurationCodeConfiguration getCodeConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a>

code_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#code_configuration AppServiceSourceControlA#code_configuration}

---

##### `containerConfiguration`<sup>Optional</sup> <a name="containerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.containerConfiguration"></a>

```java
public AppServiceSourceControlGithubActionConfigurationContainerConfiguration getContainerConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a>

container_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#container_configuration AppServiceSourceControlA#container_configuration}

---

##### `generateWorkflowFile`<sup>Optional</sup> <a name="generateWorkflowFile" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.generateWorkflowFile"></a>

```java
public java.lang.Object getGenerateWorkflowFile();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the service generate the GitHub Action Workflow file. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#generate_workflow_file AppServiceSourceControlA#generate_workflow_file}

---

### AppServiceSourceControlGithubActionConfigurationCodeConfiguration <a name="AppServiceSourceControlGithubActionConfigurationCodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control.AppServiceSourceControlGithubActionConfigurationCodeConfiguration;

AppServiceSourceControlGithubActionConfigurationCodeConfiguration.builder()
    .runtimeStack(java.lang.String)
    .runtimeVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.property.runtimeStack">runtimeStack</a></code> | <code>java.lang.String</code> | The value to use for the Runtime Stack in the workflow file content for code base apps. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | The value to use for the Runtime Version in the workflow file content for code base apps. |

---

##### `runtimeStack`<sup>Required</sup> <a name="runtimeStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.property.runtimeStack"></a>

```java
public java.lang.String getRuntimeStack();
```

- *Type:* java.lang.String

The value to use for the Runtime Stack in the workflow file content for code base apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#runtime_stack AppServiceSourceControlA#runtime_stack}

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

The value to use for the Runtime Version in the workflow file content for code base apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#runtime_version AppServiceSourceControlA#runtime_version}

---

### AppServiceSourceControlGithubActionConfigurationContainerConfiguration <a name="AppServiceSourceControlGithubActionConfigurationContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control.AppServiceSourceControlGithubActionConfigurationContainerConfiguration;

AppServiceSourceControlGithubActionConfigurationContainerConfiguration.builder()
    .imageName(java.lang.String)
    .registryUrl(java.lang.String)
//  .registryPassword(java.lang.String)
//  .registryUsername(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.imageName">imageName</a></code> | <code>java.lang.String</code> | The image name for the build. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryUrl">registryUrl</a></code> | <code>java.lang.String</code> | The server URL for the container registry where the build will be hosted. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryPassword">registryPassword</a></code> | <code>java.lang.String</code> | The password used to upload the image to the container registry. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryUsername">registryUsername</a></code> | <code>java.lang.String</code> | The username used to upload the image to the container registry. |

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

The image name for the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#image_name AppServiceSourceControlA#image_name}

---

##### `registryUrl`<sup>Required</sup> <a name="registryUrl" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryUrl"></a>

```java
public java.lang.String getRegistryUrl();
```

- *Type:* java.lang.String

The server URL for the container registry where the build will be hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#registry_url AppServiceSourceControlA#registry_url}

---

##### `registryPassword`<sup>Optional</sup> <a name="registryPassword" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryPassword"></a>

```java
public java.lang.String getRegistryPassword();
```

- *Type:* java.lang.String

The password used to upload the image to the container registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#registry_password AppServiceSourceControlA#registry_password}

---

##### `registryUsername`<sup>Optional</sup> <a name="registryUsername" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryUsername"></a>

```java
public java.lang.String getRegistryUsername();
```

- *Type:* java.lang.String

The username used to upload the image to the container registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#registry_username AppServiceSourceControlA#registry_username}

---

### AppServiceSourceControlTimeouts <a name="AppServiceSourceControlTimeouts" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control.AppServiceSourceControlTimeouts;

AppServiceSourceControlTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#create AppServiceSourceControlA#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#delete AppServiceSourceControlA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#read AppServiceSourceControlA#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#create AppServiceSourceControlA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#delete AppServiceSourceControlA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/app_service_source_control#read AppServiceSourceControlA#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference <a name="AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference;

new AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStackInput">runtimeStackInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStack">runtimeStack</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `runtimeStackInput`<sup>Optional</sup> <a name="runtimeStackInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStackInput"></a>

```java
public java.lang.String getRuntimeStackInput();
```

- *Type:* java.lang.String

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersionInput"></a>

```java
public java.lang.String getRuntimeVersionInput();
```

- *Type:* java.lang.String

---

##### `runtimeStack`<sup>Required</sup> <a name="runtimeStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStack"></a>

```java
public java.lang.String getRuntimeStack();
```

- *Type:* java.lang.String

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.internalValue"></a>

```java
public AppServiceSourceControlGithubActionConfigurationCodeConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a>

---


### AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference <a name="AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference;

new AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryPassword">resetRegistryPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryUsername">resetRegistryUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegistryPassword` <a name="resetRegistryPassword" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryPassword"></a>

```java
public void resetRegistryPassword()
```

##### `resetRegistryUsername` <a name="resetRegistryUsername" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryUsername"></a>

```java
public void resetRegistryUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryPasswordInput">registryPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrlInput">registryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsernameInput">registryUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryPassword">registryPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrl">registryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsername">registryUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `registryPasswordInput`<sup>Optional</sup> <a name="registryPasswordInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryPasswordInput"></a>

```java
public java.lang.String getRegistryPasswordInput();
```

- *Type:* java.lang.String

---

##### `registryUrlInput`<sup>Optional</sup> <a name="registryUrlInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrlInput"></a>

```java
public java.lang.String getRegistryUrlInput();
```

- *Type:* java.lang.String

---

##### `registryUsernameInput`<sup>Optional</sup> <a name="registryUsernameInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsernameInput"></a>

```java
public java.lang.String getRegistryUsernameInput();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `registryPassword`<sup>Required</sup> <a name="registryPassword" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryPassword"></a>

```java
public java.lang.String getRegistryPassword();
```

- *Type:* java.lang.String

---

##### `registryUrl`<sup>Required</sup> <a name="registryUrl" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrl"></a>

```java
public java.lang.String getRegistryUrl();
```

- *Type:* java.lang.String

---

##### `registryUsername`<sup>Required</sup> <a name="registryUsername" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsername"></a>

```java
public java.lang.String getRegistryUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.internalValue"></a>

```java
public AppServiceSourceControlGithubActionConfigurationContainerConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a>

---


### AppServiceSourceControlGithubActionConfigurationOutputReference <a name="AppServiceSourceControlGithubActionConfigurationOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control.AppServiceSourceControlGithubActionConfigurationOutputReference;

new AppServiceSourceControlGithubActionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putCodeConfiguration">putCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putContainerConfiguration">putContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetCodeConfiguration">resetCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetContainerConfiguration">resetContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetGenerateWorkflowFile">resetGenerateWorkflowFile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeConfiguration` <a name="putCodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putCodeConfiguration"></a>

```java
public void putCodeConfiguration(AppServiceSourceControlGithubActionConfigurationCodeConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putCodeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a>

---

##### `putContainerConfiguration` <a name="putContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putContainerConfiguration"></a>

```java
public void putContainerConfiguration(AppServiceSourceControlGithubActionConfigurationContainerConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putContainerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a>

---

##### `resetCodeConfiguration` <a name="resetCodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetCodeConfiguration"></a>

```java
public void resetCodeConfiguration()
```

##### `resetContainerConfiguration` <a name="resetContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetContainerConfiguration"></a>

```java
public void resetContainerConfiguration()
```

##### `resetGenerateWorkflowFile` <a name="resetGenerateWorkflowFile" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetGenerateWorkflowFile"></a>

```java
public void resetGenerateWorkflowFile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.codeConfiguration">codeConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.containerConfiguration">containerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.linuxAction">linuxAction</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.codeConfigurationInput">codeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.containerConfigurationInput">containerConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.generateWorkflowFileInput">generateWorkflowFileInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.generateWorkflowFile">generateWorkflowFile</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeConfiguration`<sup>Required</sup> <a name="codeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.codeConfiguration"></a>

```java
public AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference getCodeConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference</a>

---

##### `containerConfiguration`<sup>Required</sup> <a name="containerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.containerConfiguration"></a>

```java
public AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference getContainerConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference</a>

---

##### `linuxAction`<sup>Required</sup> <a name="linuxAction" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.linuxAction"></a>

```java
public IResolvable getLinuxAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `codeConfigurationInput`<sup>Optional</sup> <a name="codeConfigurationInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.codeConfigurationInput"></a>

```java
public AppServiceSourceControlGithubActionConfigurationCodeConfiguration getCodeConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a>

---

##### `containerConfigurationInput`<sup>Optional</sup> <a name="containerConfigurationInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.containerConfigurationInput"></a>

```java
public AppServiceSourceControlGithubActionConfigurationContainerConfiguration getContainerConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a>

---

##### `generateWorkflowFileInput`<sup>Optional</sup> <a name="generateWorkflowFileInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.generateWorkflowFileInput"></a>

```java
public java.lang.Object getGenerateWorkflowFileInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `generateWorkflowFile`<sup>Required</sup> <a name="generateWorkflowFile" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.generateWorkflowFile"></a>

```java
public java.lang.Object getGenerateWorkflowFile();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.internalValue"></a>

```java
public AppServiceSourceControlGithubActionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a>

---


### AppServiceSourceControlTimeoutsOutputReference <a name="AppServiceSourceControlTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_source_control.AppServiceSourceControlTimeoutsOutputReference;

new AppServiceSourceControlTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a>

---



